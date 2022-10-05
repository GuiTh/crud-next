export default function Titulo(props){
    return(
        <div className="flex flex-col justify-center">
            <h1 className="">
                {props.children} 
            </h1>
            <hr />
        </div>
    )
}