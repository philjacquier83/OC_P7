import '../styles/layouts/Footer.css'
import Logo from '../assets/LogoWhite.svg'

function Footer() {
    const Name = 'Kasa'
    const Year = new Date()
    const CurrentYear = Year.getFullYear()

    return (
        <div className='Footer'>
            <div>
                <img src={ Logo } alt={ Name } title={ Name } />
                <h3>© { CurrentYear } { Name }. All rights reserved</h3>
            </div>
        </div>
    )
}

export default Footer