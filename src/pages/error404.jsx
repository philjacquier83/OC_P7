import Header from '../layouts/Header'
import Error from '../layouts/Error'
import Footer from '../layouts/Footer'

function Error404() {
    document.title = "Page inexistante"
    
    return (
        <>
        <Header />
        <Error />
        <Footer />
        </>
    )
}

export default Error404