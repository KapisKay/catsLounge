import "./Contact.css";
export default  function Contact(props){
    console.log(props);
return(
    <div className="card">
       { props.item.sold && <div className="card-badge"> SOLD </div>}
        <img className="card-image" src={props.item.image} alt =""/>
        <h3 className="card-title">{props.item.name}</h3>
        <div className="card-body">
            <p><i className="fa-solid fa-phone"></i> {props.item.breed}</p>
            {props.item.color && <p><i className="fa-solid fa-envelope"></i> {props.item.color}</p>}
        </div>
        
    </div>

)
}