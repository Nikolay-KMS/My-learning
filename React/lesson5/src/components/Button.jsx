import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Button() {

  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/faq", {state: {param1: "ABC"}})}> Go back
    </button>
  )
}
