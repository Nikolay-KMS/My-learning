import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'


export  function Faq() {

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(Array.from(searchParams.entries()));
  console.log(searchParams.get("page"));


  return (
    <div>
      {
        location.state?.param1 && <div>{location.state.param1}</div>
      }
      Faq
    </div>
  )
}


// api.punkapi.com/v2/beers?page=2&per_page=10