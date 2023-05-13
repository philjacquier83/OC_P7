import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Annonces from '../assets/logements.json'

function useCarrousel() {
    const { id } = useParams()
    const [ carrousel, nextCarrousel ] = useState([0])

    useEffect(() => {
        const a = Annonces.find((elem) => elem.id === id)
        nextCarrousel(a)
    }, [id])
    return annonce
}

export default useLocation