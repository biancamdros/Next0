import Link from "next/link";

export default function Receita4(){
    return (
        <div>
            <style jsx>{`

                @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300&display=swap');

                nav{
                    margin-top: 20px;
                    display: flex;
                    gap: 10px;
                    justify-content: center;
                }
                a {
                    text-decoration: none;
                    color: #1C1C1C;
                    font-weight: 400;
                    font-family: 'Lato', 'sans-serif';
                    font-size: 20px;
                    padding: 5px;
                }
                a:hover {
                    color: #0489B1;
                }

            `}
            </style>

        
            <nav>
                <Link href='/tarefa-04/exe-01/bagdad'>Exercício 1</Link>
                <Link href='/tarefa-04/exe-03/bagdad'>Exercício 3</Link>
            </nav>

        </div>
    )
}