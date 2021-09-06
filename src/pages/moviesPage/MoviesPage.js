import cl from './MoviesPage.module.css'
import Header from "../../components/header/Header";


export default function MoviesPage({children}) {
    return (
        <div className={cl.mainDivPage}>
            <header>
                <Header/>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
}
