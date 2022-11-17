import React, { useState } from 'react'

export default function Fungsi() {
  const [count, setCount] = useState<number>(0)

  function tambah(param : number){
    const angka : number = 1;

    setCount(param + angka);
    console.log('tambah');
  }

  function kurang(param : number){
    const angka : number = 1;

    setCount(param - angka);
    console.log('tambah');
  }
  
  const displayTitle = (param : string) =>{
    return <div>{param}</div> 
  }

  return (
    <>
      {displayTitle('Fungsi')}
      <div>Count : {count}</div>
      <button onClick={() => count > 0 && kurang(count)}>-</button>
      <button onClick={() => tambah(count)}>+</button>
    </>
  )
}
