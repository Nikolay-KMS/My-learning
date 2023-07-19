import React from 'react'
import { useParams } from 'react-router-dom'

export function Contacts() {

  const params = useParams();
  console.log(params);

  return (    
    <div>
      Contacts
    </div>
  )
}
