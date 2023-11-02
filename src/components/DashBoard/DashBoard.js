import React from 'react'
import Card from '../Card/Card'
import './DashBoard.css'

function DashBoard() {
  return (
 
    <div  className="CardPrising">

    <Card title="Product Name" price="$99.99" rating="4.5" icon="⭐" />
    <Card title="Another Product" price="$49.99" rating="3.9" icon="⭐" />
    <Card title="Product Name" price="$99.99" rating="4.5" icon="⭐" />
    <Card title="Another Product" price="$49.99" rating="3.9" icon="⭐" />
  </div> 
  )
}

export default DashBoard