import React from "react"
import Model from "./Model";
import DietImg from "../img/Diet.jpg"
function Diet(){
    return(
        <Model title = {"Diet"} img = {DietImg} 
            paragraph1 = {"Red foxes prefer rodents and rabbits, but they will also eat birds, amphibians, and fruit. Red foxes will also steal food from garbage cans or farms. Their ability to find food, even during the winter, is one reason why red foxes have a reputation for being cunning and smart."}
        />
  	);
}
export default Diet;
