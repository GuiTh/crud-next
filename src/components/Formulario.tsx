import { useState } from 'react'
import Entrada from './Entrada'
import Cliente from '../core/Cliente'

interface FormularioProps{
cliente: Cliente
}

export default function Formulario(props: FormularioProps){
    const [nome,setNome] = useState(props.cliente?.nome ?? '')
    const [idade,setIdade] = useState(props.cliente?.idade ?? 0)
    const id = props.cliente?.id
    return(
        <div>
            {id ? (
                <Entrada 
                somenteLeitura
                texto='Código'
                valor={id} 
                />
                ):false}
            <Entrada 
            texto='Idade' 
            tipo='number' 
            valor={idade}
             />
            <Entrada 
            texto='Nome' 
            valor={nome}
             />
        </div>
    )
}