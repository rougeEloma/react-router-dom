import { Link, useNavigate } from "react-router-dom";

export default function Button({linkValue, buttonValue}) {
    
    const navigating = useNavigate()
    const handleClick = () => {
        navigating(linkValue)
    }

    return(
        <button onClick={handleClick}>
            {buttonValue}
        </button>
    )
}