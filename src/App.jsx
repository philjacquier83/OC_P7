import './App.css'
import Header from './layouts/Header'
import Banner from './components/Banner'
import Cards from './layouts/Cards'
import Footer from './layouts/Footer'

function App() {
  const text = 'Chez vous, partout et ailleurs'
  return (
    <>
      <Header />
      <Banner pageID='Accueil' texte={ text }/>
      <Cards />
      <Footer />
    </>
  )
}

export default App
