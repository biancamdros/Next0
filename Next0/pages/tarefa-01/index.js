import Message from './message'

export default function Home(){
    return(
        <div>
            <Header title='Receita 1' />
            <h2>Viva Santana!</h2>
            <Message/>
        </div>
    )
}

export function Header({title}) {
    return (
        <div>
           
            <h2>{title}</h2>

        </div>
    )
}