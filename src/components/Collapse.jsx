import '../styles/components/Collapse.css'
import ArrowOpen from '../assets/ArrowOpen.svg'
import CollapseDetails from '../components/CollapseDetails'

function Collapse({ collapse, annonce }) {
    
    const ArrowPosition = ArrowOpen
    
    return (
        <div className={ collapse === 'Description' || collapse === 'Equipements' ? "CollapseContainer" : "CollapseContainerAbout" } >
            <div className="CollapseTitle">
                <div className="CollapseText">
                    {collapse}
                </div>
                <div className="CollapseToOpen">
                    <img src={ArrowPosition} alt={ArrowPosition} />
                </div>
            </div>

            { annonce ? 
                <CollapseDetails collapse={ collapse } annonce={ annonce } />
                :
                <CollapseDetails collapse={ collapse } />
            }

        </div>
    )
}

export default Collapse