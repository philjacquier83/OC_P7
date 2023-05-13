import '../styles/components/TagName.css'

function TagName({tags}) {
    return (
        <div className="TagContainer">
            <div className="Tag">{ tags }</div>
        </div>
    )
}

export default TagName