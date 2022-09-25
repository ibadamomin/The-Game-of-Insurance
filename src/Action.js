import React from "react";
import Card from "./components/Card";
import actiondata from "./actiondata";

export default function Career() {
    const cards = actiondata.map(item => {
        return (<Card key = {item.id}
                name = {item.name}
                type = {item.type}
                img = {item.image}
                des = {item.des}
                page = {item.page}
        />)
    })
    return(
        <div className="career-card">    
            {cards}
        </div>
        
    )
}