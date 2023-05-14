import '../styles/layouts/LocationBanner.css'
import Carrousel from '../components/Carrousel'
import ArrowLeft from '../assets/ArrowLeft.svg'
import ArrowRight from '../assets/ArrowRight.svg'
import useCarrousel from '../hooks/useCarrousel'
import { useEffect, useState } from 'react'

function LocationBanner({annonce}) {
    const TotalPics = annonce.pictures.length
    const [ carrousel, nextCarrousel ] = useState([1])
    useEffect(() => {
        console.log("Numéro image : ", carrousel)
    }, [carrousel])
    
    return (
        <div className="Carrousel">
            
            <Carrousel annonce={annonce} pic={(parseInt(carrousel, 10) - 1)} />
            
            <div className="CarrouselNavigation">
                { (TotalPics > 1) && 
                    <div className="Arrow" onClick={() => nextCarrousel( (parseInt(carrousel, 10) - 1) < 1 ? TotalPics : (parseInt(carrousel, 10) - 1) )}>
                        <img src={ ArrowLeft } alt="Previous Image" />
                    </div>
                }
                
                <div class="CarrouselCentral">
                    <span className="PicCount">{ carrousel }/{ TotalPics }</span>
                </div>
                
                { (TotalPics > 1) && 
                    <div className="Arrow" onClick={() => nextCarrousel( (parseInt(carrousel, 10) + 1) > TotalPics ? 1 : (parseInt(carrousel, 10) + 1) )}>
                        <img src={ ArrowRight } alt="Next Image" />
                    </div>
                }
            </div>
        </div>
    )
}

export default LocationBanner