import React from 'react';
import { AiFillStar, AiOutlineStar} from "react-icons/ai";

const Ability = ({ abilityName,years=null,score}) => {

    let characterCount = 0;
    characterCount += abilityName.length;
    if(years) {
        characterCount += years.length + 9;
    }

    if(characterCount > 30) {
        var msg = `Ability Total Name Too Long ${characterCount}: "${abilityName}" `;
        throw new Error(msg);
    }

    const stars = [];
    for (var i = 0; i < 5; i++) {
        // note: we add a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        if(i<score) {
            stars.push(<AiFillStar className="ability-filled" key={i}/>);    
        }
        else {
            stars.push(<AiOutlineStar className="ability-unfilled" key={i}/>);    
        }
        
    }

    var outputName = ``;
    if(years) {
        outputName = `${abilityName} (${years} years)`;
    }
    else {
        outputName = `${abilityName}`;
    }

    return (
        <div className="abilityLinesContainer">
            <ul className="no-bullets">
                <li className="abilityLine">
                    <span className="ability-title">{outputName}</span>
                    <span className="ability-score">
                        {stars}
                    </span>
                </li>
            </ul>
        </div>
)
}

export default Ability;