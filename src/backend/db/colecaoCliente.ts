import ClienteRepositorio from "../../core/ClienteRepositorio";
import Cliente from "../../core/Cliente";
import firebase from "../config";

export default class ColecaoCliente implements ClienteRepositorio {

    //coverte o cliente para objeto
    #conversor ={
        toFirestore(cliente:Cliente){
            return{
                nome: cliente.nome,
                idade: cliente.idade
            }
        },
        //essa funcao recebe os dados do firebase e retorna um cliente
        fromFirestore(snapshot:firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Cliente{
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade,snapshot.id)
        }
    }

    async salvar(cliente: Cliente): Promise<Cliente>{
        if(cliente?.id){
            //dois cenarios de inclusao, se o id do cliente JA estiver setado voce altera ele
            await this.colecao().doc(cliente.id).set(cliente)
            return cliente
        }else{
            //caso o id n esteja setado, esse codigo seta
            const docRef = await this.colecao().add(cliente)
            const doc = await docRef.get()
            return doc.data()
        }
        return null
    }
    async excluir(cliente: Cliente): Promise<void>{
        return this.colecao().doc(cliente.id).delete()
    }
    async obterTodos(): Promise<Cliente[]>{
         const query = await this.colecao().get()
         return query.docs.map(doc => doc.data()) ?? []
    }
    private colecao(){
        return firebase.firestore()
        .collection('clientes')
        .withConverter(this.#conversor)
    }
}