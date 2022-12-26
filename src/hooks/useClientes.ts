import Cliente from '../core/Cliente'
import ClienteRepositorio from '../core/ClienteRepositorio'
import { useState, useEffect } from 'react'
import useTabelaOuForm from './useTabelaOuForm'
import ColecaoCliente from '../backend/db/ColecaoCliente'

//ESSE HOOK TRABALHA COM AS FUNCOES DE ALTERAR O FORMULARIO

export default function useCliente(){

    const repo: ClienteRepositorio = new ColecaoCliente()
    const { tabelaVisivel, formularioVisivel, exibirFormulario, exibirTabela} = useTabelaOuForm()
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>()
  
    useEffect(obterTodos, [])
  
    function obterTodos(){
      repo.obterTodos().then(clientes =>{
        setClientes(clientes)
        exibirTabela()
      })
    }
    function selecionarCliente(cliente:Cliente){
      setCliente(cliente)
      exibirFormulario()
    }
    async  function excluirCliente(cliente: Cliente){
      await repo.excluir(cliente)
      obterTodos()
    }
     async function salvarCliente(cliente: Cliente){
      await repo.salvar(cliente)
      obterTodos()
    }
    function novoCliente(cliente: Cliente){
      setCliente(Cliente.vazio())
      exibirFormulario()
    }

    return{
        tabelaVisivel,
        cliente,
        clientes,
        exibirTabela,
        novoCliente,
        excluirCliente,
        selecionarCliente,
        salvarCliente,
    }

}