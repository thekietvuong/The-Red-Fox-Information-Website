import React from "react"
import Model from "./Model";
import LiHisImg from "../img/LifeHistory.jpg"
function LifeHistory(){
    return(
        <Model title = {"LifeHistory"} img = {LiHisImg} 
            paragraph1 = {"Red foxes mate in winter. Right after mating, a female builds a den. Females can deliver anywhere between one and 12 pups per litter. Pups are born brown or gray, usually turning red within about a month. Both parents take care of their offspring until the next fall, when the young foxes set out on their own."}
        />
  	);
}
export default LifeHistory;
