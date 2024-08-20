import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  
  const [items, setItems] = React.useState(data)
  function removeAll() {
    setItems()
  }
  function removeItem(id) {
    let newItemSet = items.filter((person)=>person.id != id)
    setItems(newItemSet)
  }
  return (
  <>
  {items.map((person)=>{
    const { id, name } = person;
    return <div key={id} className='item'>
              <h4>{name}</h4>
              <button onClick={()=>removeItem(id)}>Remove</button>
            </div>
    
  })}
  <button type='button' className="btn" onClick={()=>removeAll([])}>Clear All</button>
  </>
  )
};

export default UseStateArray;
