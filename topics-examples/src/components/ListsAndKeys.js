import React from 'react';

function Item(props) {
    return (
        <li>{props.skill}</li>
    )
}

export function ListsAndKeys(props) {
    const skills = ['HTML', 'CSS', 'JS'];

    return (
        <ul>
            {skills.map( (skill, index) => <Item key={index} skill={skill} />)}
        </ul>
    )
}




