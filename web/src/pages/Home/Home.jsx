import React from 'react'
import { getAllProducts } from '../../services/products'

export default function Home() {
  return (
    <div>Home
      <button type='button' onClick={getAllProducts} className=' bg-red-500'>
        Get Documents</button>
    </div>
  )
}
