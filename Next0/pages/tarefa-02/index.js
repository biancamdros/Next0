export default function Home(){
    return(
        <div>
            <Header title='Receita 2' />
            <h2>Viva Santana!</h2>
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