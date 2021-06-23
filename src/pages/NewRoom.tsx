import {Link} from 'react-router-dom'
import illustration from '../assets/images/illustration.svg'
import logoimg from '../assets/images/logo.svg'

import {Button} from '../components/Button'
import '../styles/global.scss';
import '../styles/auth.scss'
import { useAuth } from '../hooks/useAuth';

export function NewRoom(){

    const {user} = useAuth();

    return(
        <div id="page-auth">
            <aside>
                <img src={illustration} alt="Illustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as duvidás da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoimg} alt="Letmeask" />
                    <h1>
                        <img style={{borderRadius:50}} src={user?.avatar} alt="User Icon" /> <br/>
                        Bem Vindo!! <br/>
                        {user?.name}
                    </h1>
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input 
                        type="text" 
                        placeholder="Nome da sala"
                        />
                        <Button type='submit'>
                            Criar sala
                        </Button>
                    </form>
                    <p style={{color: 'black'}}>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}