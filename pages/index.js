import Head from 'next/head';
import { theme } from "../src/theme";


function Button({children}){
    return(
        <>
            <button>
                {children}
            </button>
            <style jsx>{`
                button {
                    border: 1px solid darkgreen;
                    background-color: ${theme.colors.primary[500]};
                    padding: 8px 10px;
                    font-weight: bold;
                    font-family: 'Open Sans', sans-serif;
                }
            `}</style>
        </>
    )
}
export default function Home() {
    return ( 
    <div>

        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/>
            <title>
                Home
            </title>
        </Head>
        Pedacinho de Tela

        <Button>
            Botão
        </Button>

        <button>
            botão
        </button>

    </div>


    )
}