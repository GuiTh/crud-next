interface EntradaProps{

    somenteLeitura?: boolean
    texto: string
    valor: any
    tipo?: 'text' | 'number'

}

export default function Entrada(props: EntradaProps){
    return(
        <div className="flex flex-col">
            <label>
                {props.texto}
            </label>
            <input
            type={props.tipo ?? 'text'}
            value={props.valor}
            readOnly={props.somenteLeitura}
            className={`
                border border-purple-500 rounded-lg
                focus:outline-none
                `} />

        </div>
    )
}