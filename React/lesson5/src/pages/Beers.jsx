import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

export function Beers() {

  const [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = searchParams.get("page") || 1;
  const perPage = searchParams.get("per_page") || 1;

  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=${perPage}`)
    .then(res => res.json())
    // .then(res => console.log(res))
    .then(beerList => setBeers(beerList))
    .then(console.log(beers))

  }, [])

  return (
    <div>
      <div> Page number: {pageNumber}</div>
      <div> Per Page: {perPage}</div>

      {
        beers.map(beer => (
          <div key={beer.id}>
            <span>Name: {beer.name}</span>
          </div>
        ))
      }
    </div>
  )
}
