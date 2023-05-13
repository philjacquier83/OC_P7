import Header from '../layouts/Header'
import Banner from '../components/Banner'
import Footer from '../layouts/Footer'
import Collapse from '../components/Collapse'

function About() {
    
    document.title = "KASA - A Propos"

    return (
        <>
            <Header menuName='A propos' />
            <Banner pageID='About' />
            <Collapse collapse="Fiabilité" />
            <Collapse collapse="Respect" />
            <Collapse collapse="Service" />
            <Collapse collapse="Sécurité" />
            <Footer />
        </>
    )
}

export default About