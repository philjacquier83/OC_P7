import '../styles/components/TextCollapse.css'

function TextCollapse({rubrique}) {
    return (
        <div className="CollapseDetails">
            { equipements.map((equipement) =>
                <div>{ equipement }</div>
            ) }
        </div>
    )
}

export default TextCollapse