import Banner from '../components/Banner'
import LocationBanner from '../layouts/LocationBanner'
//import Informations from '../layouts/Informations'
import Description from '../layouts/Description'
import Footer from '../layouts/Footer'
import useLocation from '../hooks/useLocation.js'
import Header from '../layouts/Header'
import Collapses from '../layouts/Collapses'


function Locations() {  
    
    const annonce = useLocation()
    document.title = annonce.title
    
    return (
        <>
        <Header />
        <Banner />
        <LocationBanner annonce={ annonce } />
        <Description annonce={ annonce } />
        <Collapses annonce={ annonce } />
        <Footer />
        </>
    )
}

export default Locations