import React from "react";
import Card from "./components/Card";
import cardata from "./cardata";

export default function Car() {
    const cards = cardata.map(item => {
        return (<Card key = {item.id}
                name = {item.name}
                img = {item.image}
                type = {item.type}
                page = {item.path}

        />)
    })
    return(
        <div className="career-card">    
            {cards}
        </div>
        
    )
}