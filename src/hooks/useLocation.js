import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Annonces from '../assets/logements.json'

function useLocation() {
    const { id } = useParams()
    const [ annonce, setAnnonce ] = useState({ 
        id: "",
		title: "",
		cover: "",
		pictures: [],
		description: "",
		host: {
			name: "",
			picture: ""
		},
		rating: "",
		location: "",
		equipments: [],
		tags: []
    })

    useEffect(() => {
        const a = Annonces.find((elem) => elem.id === id)		
        setAnnonce(a)
    }, [id])
	
	return annonce
	
}

export default useLocation