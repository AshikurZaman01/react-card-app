import React from "react";
import Title from "./Title";
import Image from "./Image";
import Views from "./Views";

const Card = ()=>{
    return (

        <div>
            <div className="card w-full bg-base-100 shadow-xl px-12">
            <Title></Title>
            <Image></Image>
            <Views></Views>
            </div>
        </div>
        
    );
};

export default Card;