import React from 'react'
import './TodoSearch.css'

function TodoSearch ({searchValue, setSearchValue})  {

  const onSearchValueChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  return (
    <input className='TodoSearch' placeholder="Sacar la basura"
      onChange={onSearchValueChange}
      value={searchValue}
    />
  )
}

export {TodoSearch}