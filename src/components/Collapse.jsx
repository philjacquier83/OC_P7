import { useState } from "react"
import '../styles/components/Collapse.css'
import ArrowOpen from '../assets/ArrowOpen.svg'
import CollapseDetails from '../components/CollapseDetails'
//import useOpenCollapse from '../hooks/useOpenCollapse'

function Collapse({ collapse, annonce }) {
    
    //const isClicked = useOpenCollapse()
    const [ isClicked, setIsClicked ] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked), [isClicked]
    }
    const ArrowPosition = ArrowOpen
    
    return (
        <div className={ collapse === 'Description' || collapse === 'Equipements' ? "CollapseContainer" : "CollapseContainerAbout" } >
            <div className="CollapseTitle">
                <div className="CollapseText">
                    {collapse}
                </div>
                <div className={`CollapseToClose ${isClicked ? 'AnimationCollapseOpen' : 'AnimationCollapseClose'}`} onClick={handleClick}>
                    <img src={ArrowPosition} alt={ArrowPosition} />
                </div>
            </div>

            { annonce ? 
                <CollapseDetails isOpen={ isClicked } collapse={ collapse } annonce={ annonce } />
                :
                <CollapseDetails isOpen={ isClicked } collapse={ collapse } />
            }

        </div>
    )
}

export default Collapse