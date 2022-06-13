import emptyStar from "../images/emptyStar.png"
import filledStar from "../images/filledStar.png"
import "./rating.css"

export function Rating(props){
    return(
        <img className="rating" 
        src={props.isFilled ? filledStar : emptyStar} alt=""
        onClick={props.handleClick}
        />
    )
}