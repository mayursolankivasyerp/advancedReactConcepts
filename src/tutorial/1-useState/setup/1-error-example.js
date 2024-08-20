import React, {useState} from 'react';

const ErrorExample = () => {
  const [title, setTitle] = useState('Random Title')
  function handleClick(params) {
    if(title === "Random Title"){
      setTitle("Changed Title")
    }else{
      setTitle("Random Title")
    }
  }
  return (
  <React.Fragment>
    <h2>{title}</h2>
    <button type='button' className='btn' onClick={handleClick}>Change Text</button>
  </React.Fragment>
  )};

export default ErrorExample;
