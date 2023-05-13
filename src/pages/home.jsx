import Header from '../layouts/Header'
import Banner from '../components/Banner'
import Cards from '../layouts/Cards'
import Footer from '../layouts/Footer'
import Annonces from '../assets/logements.json'
import Card from '../components/Card'

function HomePage() {
    
    const pageName = "Accueil"
    const text = 'Chez vous, partout et ailleurs'
    document.title = `KASA - ${text}`

    return (
        <>
            <Header menuName='Accueil' />
            <Banner pageID={ pageName } texte={ text } />
            <Cards>
                {Annonces.map((a) => (
                    <Card key={a.id} annonce={a} />
                ))}
            </Cards>
            <Footer />
        </>
    )
}

export default HomePage