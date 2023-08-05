import { useState } from 'react';

export function Search({ changeValue }){

  const [ number , setNumber ] = useState('')
  
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setNumber(inputValue === '' ? '' : parseInt(inputValue));
  };

  return(
    <>
      <h1 className="title__seeker">Buscar número</h1>
      <div className="search">
        <input 
          type="text"
          className="input__seeker"
          value={number === '' ? '' : number}
          onChange={handleInputChange}
        />
        <button onClick={() => {
            const parsedNumber = parseInt(number);
            if (!isNaN(parsedNumber)) {
              changeValue(parsedNumber);
            }
            setNumber('');
          }}
          className="button__seeker"
        >Buscar</button>
      </div>
    </>
  )
}