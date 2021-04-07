import React from 'react'
import {useState} from 'react'

const Invent = () => {
  const [cart, setCart] = useState([])

  const items = [
    {
      id: 1,
      name:"Pants"
    },
    {
      id: 2,
      name:"Shoes"
    },
    {
      id: 3,
      name:"Shirts"
    }
  ]

  const addToCart = (i) => {
    setCart([...cart, i])
  }

  const removeFromCart = (i) => {
    const rem = [...cart]
    rem = rem.filter((cartItem) => cartItem.id !== i.id)
    setCart(rem)
  }

  const listItems = items.map((i) => {
    <div key={i.id}>

      {`${i.name}`}

      <input
        type="submit"
        value="add"
        onClick={() => addToCart(i)}
      />
      
    </div>
  })

  const cartItems = cart.map((i) => {
    <div key={i.id}>

      {`${i.name}`}

      <input
        type="submit"
        value="remove"
        onClick={() => removeFromCart(i)}
      />

    </div>
  })

  return (
    <div>
      <h1>Inventory</h1>
      <div>{listItems}</div>
      <h1>Cart</h1>
      <div>{cartItems}</div>
    </div>
  
  )
  
}

export default Invent
// export default function Invent() {
//   return (
//     <div className='invent'>

//       <p>Pants</p> <button>Add</button>
//       <p>Shoes</p>  <button>Add</button>
//       <p>Shirts</p> <button>Add</button>

    
//       </div>
//   )
// }