import '../styles/layouts/LocationBanner.css'
import Carrousel from '../components/Carrousel'
import ArrowLeft from '../assets/ArrowLeft.svg'
import ArrowRight from '../assets/ArrowRight.svg'

function LocationBanner({annonce}) {
    
    const TotalPics = annonce.pictures.length
    
    return (
        <div className="Carrousel">
            <Carrousel annonce={annonce} />
            <div className="CarrouselNavigation">
                <div className="Arrow" onClick="PreviousImage()">
                    <img src={ ArrowLeft } alt="Previous Image" />
                </div>
                
                <div class="CarrouselCentral">
                    <span className="PicCount">1/{ TotalPics }</span>
                </div>
                <div className="Arrow" onClick="NextImage()">
                    <img src={ ArrowRight } alt="Next Image" />
                </div>
            </div>
        </div>
    )
}

export default LocationBanner