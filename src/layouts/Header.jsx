import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/layouts/Header.css'
import logo from '../assets/LOGO.svg'

function Header({menuName}) {
    const title = 'KASA'
    const listeMenus = [
        {
        name: 'Accueil',
        link: '/',
        id: 1,
        selected: true
        }, 
        {
        name: 'A propos',
        link: '/about',
        id: 2,
        selected: false
        }
    ]    
    
    return (
        <div className="BlocHeader">
            <div className="LogoHeader">
                <Link to="/">
                    <img src={logo} alt={title} />
                </Link>
            </div>
            
            <div className='BlocMenus'>
                {listeMenus.map((menu) => (
                    <div key={ menu.id } className='Menus'>
                        
                        { menu.name === menuName ? 
                            <Link to={ menu.link }>
                                <span className='menuSelected'>
                                    { menu.name }
                                </span>
                            </Link> : 
                            <Link to={ menu.link }>
                                <span className='menuNotSelected'>{ menu.name }</span>
                            </Link>  
                        }

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Header