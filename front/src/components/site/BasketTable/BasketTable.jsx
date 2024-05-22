import React from 'react'
import BasketTableItem from '../BasketTableItem/BasketTableItem'

const BasketTable = ({basketInfos}) => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col" className='desc__th'>Description</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        {
            basketInfos.map((basketInfo, index) => {
                return(
                    <BasketTableItem key={index} basketInfo={basketInfo}/>
                )
            })
        }
      </tbody>
    </table>
  )
}

export default BasketTable
