import React from 'react'

import Card from '../card/Card.component'

const CardList = (props) => {
  return (
    <div className='grid grid-cols-4 gap-4 my-4 mx-auto'>
      {
        props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
          )
        )
      }
    </div>
  )
}

export default CardList
