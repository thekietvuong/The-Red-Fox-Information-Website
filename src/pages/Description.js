import React from "react"
import Model from "./Model";
import descripImg from "../img/Description.jpg"

function Description(){
    return(
        <Model title = {"Description"} img = {descripImg} 
            paragraph1 = {"Red foxes have long snouts and red fur across the face, back, sides, and tail. Their throat, chin, and belly are grayish-white. Red foxes have black feet and black-tipped ears that are large and pointy. One of the most noticeable characteristics of the red fox is the fluffy white-tipped tail. Red foxes are about three feet long and two feet tall."}
            paragraph2 = {"Red foxes are often confused with gray foxes, which share a similar habitat and range. This can make identification difficult, because some red foxes can have large patches of gray fur and gray foxes have patches of red fur. Gray foxes are somewhat smaller and have a slightly more rounded face and shorter snout. The surefire way to tell the difference is to look for the color at the tip of the tail. Gray foxes have black-tipped tails, while red fox tails are white. Although they are very similar in name and appearance, the gray fox and the red fox are only distant cousins, belonging to different genera in the family Canidae."}
        />
  	);
}
export default Description;
