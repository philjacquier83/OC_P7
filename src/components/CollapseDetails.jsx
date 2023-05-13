import '../styles/components/Collapse.css'

function CollapseDetails({ collapse, annonce }) {
    
    return (
        
        <div className="CollapseDetails">
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
                "Blablabla"
            }
        </div>
    )
}

export default CollapseDetails