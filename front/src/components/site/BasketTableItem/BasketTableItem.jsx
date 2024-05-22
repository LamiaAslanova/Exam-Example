import React, { useContext } from 'react'
import MainContext from '../../../context/context'

const BasketTableItem = ({basketInfo}) => {
    const{removeFromBasket} = useContext(MainContext)

  return (
    <tr>
      <td><img width='120px' src={basketInfo.item.image} alt="" /></td>
      <td>{basketInfo.item.title}</td>
      <td className='desc__td'>{basketInfo.item.desc}</td>
      <td><button className='btn btn-danger' onClick={()=>removeFromBasket(basketInfo)}>Remove</button></td>
    </tr>
  )
}

export default BasketTableItem
