import Collapse from '../components/Collapse'
import '../styles/layouts/Collapses.css'

function Collapses({annonce}) {
    
    return (
        <div className="Collapses">
            <Collapse collapse="Description" annonce={ annonce }/>
            <Collapse collapse="Equipements" annonce={ annonce }/>
        </div>
    )
}

export default Collapses