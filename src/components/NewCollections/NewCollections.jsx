import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

function NewCollections() {
  return (
    <div className='new-collection'>
      <p className='ptag'>Trending Products</p>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item)=><Item key={item.id} item={item}/>)}
      </div>
    </div>
  )
}

export default NewCollections
