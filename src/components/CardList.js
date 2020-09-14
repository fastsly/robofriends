import React from 'react'
import Card from './Card.js'
import '../index.css'

const CardList = ({robots})=>{
    const cardArray = robots.map((user,i) =>{
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    })
    return (
        <div className='nav' id='cards'>
            {cardArray}
        </div>
    )
}
export default CardList;