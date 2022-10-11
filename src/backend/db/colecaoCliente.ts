import ClienteRepositorio from "../../core/ClienteRepositorio";
import Cliente from "../../core/Cliente";
import firebase from "../config";

export default class ColecaoCliente implements ClienteRepositorio {

    //coverte o cliente para o firestore
    conversor ={
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
        return null
    }
    async excluir(cliente: Cliente): Promise<void>{
        return null
    }
    async obterTodos(cliente: Cliente): Promise<Cliente[]>{
        return null
    }
}