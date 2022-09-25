import React from "react";
import Card from "./components/Card";
import jobdata from "./jobdata";
import NavBar from './components/NavBar'; 

export default function Career() {
    const cards = jobdata.map(item => {
        return (<Card key = {item.id}
                name = {item.name}
                type = {item.type}
                img = {item.image}
                page = {item.path}
                price = {item.des}
        />)
    })
    return(
        <div className="career-card">   
            
            {cards}
            
            
        </div>
        
    )
}