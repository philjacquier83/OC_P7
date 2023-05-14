import { useState } from "react"

function OpenCollapse() {
    const [ isClicked, setIsClicked ] = useState(false)

    const handleClick = () => {
        setIsClicked(true)
    }

    return isClicked
}

export default OpenCollapse