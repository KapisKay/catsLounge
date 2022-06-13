import "./Cat.css";
import { Rating } from "../Rating/rating"
import { useState } from "react";

export default  function Cat(props){
    
    const[rating, setRating] = useState(props.item.isRated);

    const toggleRating = ()=>{
       setRating(
           prevRate =>  !prevRate       
       )

    }
return(
    <div className="card">
       { props.item.sold && <div className="card-badge"> SOLD </div>}
        <img className="card-image" src={props.item.image} alt =""/>
        <h3 className="card-title">{props.item.name}</h3>
        <div className="card-body">
            <p><i className="fa-solid fa-cat"></i> {props.item.breed}</p>
            {props.item.color && <p><i className="fa-solid fa-palette"></i> {props.item.color}</p>}
           <Rating isFilled = {rating} handleClick = {toggleRating} />
        </div>
        
    </div>

)
}