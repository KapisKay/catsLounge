import logo from '../images/cats-cafe-logo.jpg'
import './Header.css'
export default function Header(){
    return (
        <header> 
            <div>
                <img src={logo} alt="logo" style={{width:"120px"}} />
            </div>
        </header>
    )
}