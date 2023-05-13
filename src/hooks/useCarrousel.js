import { useEffect, useState } from 'react'

function useCarrousel() {
    const [ carrousel, nextCarrousel ] = useState([1])

    useEffect(() => {
        console.log("Numéro image : ", carrousel)
    }, [carrousel])

    const handleClick = () => {
        nextCarrousel(carrousel + 1)
    }
    return carrousel
}

export default useCarrousel