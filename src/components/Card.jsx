import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/components/Card.css'



function Card({ annonce }) {
    
        return (
            <Link to={`/location/${annonce.id}`}>
                <div className='CardBlock'>
                    <img src={annonce.cover} alt={annonce.title} className="CardImg" />
                    <div className='TitreLocation'>{annonce.title}</div>
                 </div>
            </Link>
        )    
}        
 
export default Card