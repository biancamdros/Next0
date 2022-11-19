export default function Principal(){
    return(
        <div>
            <h1>Nova Página</h1>
            <MariaPrea  msg = "Morreu Maria Preá..."/>
        </div>
    )
}

export function MariaPrea({msg}){
    return(
        <p>{msg}</p>
    )
}