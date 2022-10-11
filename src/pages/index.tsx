import Botao from "../components/Botao"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"
import Formulario from "../components/Formulario"
import { useState } from "react"

export default function Home() {


  const clientes = [
    new Cliente('Gustavo', 30, "1"),
    new Cliente('Guilherme', 22, "2"),
    new Cliente('Karol', 22, "3"),
    new Cliente('Karla', 50, "4")
  ]


  function clienteSelecionado(cliente:Cliente){
    setCliente(cliente)
    setVisivel('form')
  }
  function clienteExcluido(cliente: Cliente){
    console.log(`Excluir...${cliente.nome}`)
  }
  function salvarCliente(cliente: Cliente){
    setVisivel('tabela')
  }
  function novoCliente(cliente: Cliente){
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')


  return (
    <div className={`
    flex justify-center items-center h-screen 
    bg-gradient-to-r from-blue-500 to-purple-500 text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
          <div className="flex justify-end">

            <Botao cor="gray" className="mb-4" 
            onClick={novoCliente}>
              Novo Cliente
              </Botao>

          </div>

          <Tabela clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}></Tabela>
            </>    
        ):(
            <Formulario cliente={cliente} clienteMudou={salvarCliente} cancelado={() => setVisivel('tabela')}></Formulario>
          )}
      </Layout>
    </div>
  )
}
