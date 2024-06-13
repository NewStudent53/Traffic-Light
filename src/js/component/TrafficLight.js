import React, { useState } from "react";

export const TrafficLight = () => {
	const [color, setColor] = useState("green");

//        ↓ variable name              ↓ default value
//const [ color, setColor ] = useState("red");
//               ⬆ function to change the "color" variable


	/*import React, {useState} from 'react'

export function app() {
    const [selectedColor, setSelectedColor] = useState('yellow')

    return (
        <div className='traffic-light'>
            <div onClick={() => setSelectedColor('red')} className={'light red' + (selectedColor == 'red'?'glow':'')}></div>
            <div onClick={() => setSelectedColor('yellow')} className={'light yellow' + (selectedColor == 'yellow'?'glow':'')}></div>
            <div onClick={() => setSelectedColor('green')} className={'light green' + (selectedColor == 'green'?'glow':'')}></div>
        </div>
    )
}*/

	return (
		<div className="traffic-light">
			<div className="container bg-dark p-3 rounded">
				<div className={"light red " + (color == "red" ? "selected" : "")} onClick={() => setColor("red")}></div>
				<div className={"light yellow " + (color == "yellow" ? "selected" : "")} onClick={() => setColor("yellow")}></div>
				<div className={"light green " + (color == "green" ? "selected" : "")} onClick={() => setColor("green")}></div>
			</div>
		</div>
	);
};

