import '../styles/layouts/Error.css'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className='error'>
            <div>
                <h1>404</h1>
                <h3>Oups! La page que vous demandez n'existe pas.</h3>
            </div>
            <div className='LinkToHome'>
                <Link to="/">
                    Retourner sur la page d'accueil
                </Link>
            </div>
        </div>
    )
}

export default Error