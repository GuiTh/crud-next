import Botao from "../components/Botao"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"
import Formulario from "../components/Formulario"
import {useState} from  'react'


export default function Home() {

  const clientes = [
    new Cliente('Gustavo', 30, "1"),
    new Cliente('Guilherme', 22, "2"),
    new Cliente('Karol', 22, "3"),
    new Cliente('Karla', 50, "4")
  ]


  function clienteSelecionado(cliente:Cliente){
    setCliente(cliente)
  }
  function clienteExcluido(cliente: Cliente){
    console.log(`Excluir...${cliente.nome}`)
  }
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'> ('tabela')

  return (
    <div className={`
    flex justify-center items-center h-screen 
    bg-gradient-to-r from-blue-500 to-purple-500 text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <>
        <div className="flex justify-end">

          <Botao cor="gray" className="mb-4">Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes}
         clienteSelecionado={clienteSelecionado}
         clienteExcluido={clienteExcluido}
         />
         </>

        <Formulario cliente={clientes[2]}></Formulario>
      </Layout>
    </div>
  )
}
