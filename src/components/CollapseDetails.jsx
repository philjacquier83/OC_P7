import '../styles/components/Collapse.css'
import Engagements from '../assets/engagements.json'

function CollapseDetails({ isOpen, collapse, annonce }) {
    
    return (
        
        <div className={ ( collapse === 'Description' || collapse ==='Equipements' ) ? ( isOpen ? "CollapseDetailsOpen AnimationBlocCollapseClose" : "CollapseDetailsClose AnimationBlocCollapseOpen" ) : ( isOpen ? "CollapseDetailsOpen AnimationBlocCollapseClose" : "CollapseDetailsClose AnimationBlocCollapseOpen" ) }>
            { annonce ? ( 
                collapse === 'Description' ? 
                    annonce.description
                    :
                    annonce.equipments.map((equipment, index) =>
                        <div key={`${equipment}-${index}`}>
                            { equipment }
                        </div>
                    )
                )
                :
                ( Engagements.map((Engagement, index) => Engagement.title === collapse && <div key={`${Engagement.title}-${index}`}> { Engagement.text } </div> ))
            }
        </div>
    )
}

export default CollapseDetails