import React from "react"
import "./card.css"
import state from "../images/st.png"
import ReactCardFlip from 'react-card-flip'
import insurance from "../images/insurance.png"
import { useNavigate } from "react-router-dom";


export default function Card(props) {
    const[isShown, setIsShown] = React.useState(false)
    function handleClick() {
        setIsShown(preShown => !preShown)
    }
    let cardtype = props.type
    
    const navigate = useNavigate();
    console.log(props.path)
    const navigateHome = () => {
        // 👇️ navigate to /
        let path = props.page
        navigate(path);
      };

    return (
        <ReactCardFlip isFlipped={isShown} flipDirection="vertical" className="all">
        <div className="eachFront" onClick={handleClick}>
            <img className = "pic" src = {state} />
            <img className = "gamename" src = {insurance} />
            <div className="box" >
                <h3 className="typename">{cardtype} Card</h3>
            </div>
            
        </div>
        <div className="eachBack" onClick={handleClick}>
            <img className = "back-pic" src = {props.img} />
            
            <button className="button-group" onClick={navigateHome}>{props.name}</button>
         
        </div>
      </ReactCardFlip>
        
        

    )
}