
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import './App.css'

const fetchBeers = (page, perPage) =>
  fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`)
    .then(r => r.json())


const getBeersThunk = (direction = 0) => {
  return (dispatch, getState) => {
    const { page, perPage, beers } = getState();

    if(beers[(page + direction)* perPage]) {
      dispatch({ type: 'CHANGE_PAGE', payload: { page: page + direction } })
      return
    }

    dispatch({ type: 'GET_BEERS_REQUEST' });
    dispatch({ type: 'CHANGE_PAGE', payload: { page: page + direction } })

    fetchBeers(page + direction, perPage)
      .then(berrs => {
        // const berrs2= berrs.reduce((acc, beer)=> {
        //   acc[beer.id]= beer;
        //   return acc
        // }, {})
        // console.log(berrs2);
        dispatch({ type: 'GET_BEERS_SUCCESS', payload: { beers: berrs } })
      })
      .catch(error => {
        dispatch({ type: 'GET_BEERS_ERROR' })
        console.log(error);
      });
  }
}

const createPaginationSelector = (start, end) =>
  state => state.beersPagination.slice(start, end);
const createBeersSekector = (beersPagination) =>
  state => beersPagination.map(id => state.beers[id]);

export function App() {
  const isLoading = useSelector(state => state.isLoading);
  const perPage = useSelector(state => state.perPage);
  const page = useSelector(state => state.page);
  const end = perPage * page;
  const start = end - perPage;
  const beersPagination = useSelector(createPaginationSelector(start, end));

  const beers = useSelector(createBeersSekector(beersPagination));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBeersThunk())
  }, [dispatch, perPage])

  const onPrevClick = () => {
    dispatch(getBeersThunk(-1))
  }

  const onNextClick = () => {
    dispatch(getBeersThunk(1))
  }

  const isPrevButtonEnabled = page > 1;

  return (
    <div className="App">
      <p>Page: {page}</p>
      <div>
        <button disabled={!isPrevButtonEnabled} onClick={onPrevClick}>Prev. page</button>
        <button onClick={onNextClick}>Next. page</button>
      </div>

      <select
        value={perPage}
        onChange={(e) =>
          dispatch({
            type: 'CHANGE_PER_PAGE',
            payload: { perPage: Number(e.target.value) }
          })
        }
      >
        <option value={50}>50</option>
        <option value={20}>20</option>
        <option value={10}>10</option>
      </select>
      {isLoading && <h2>Loading</h2>}
      {beers.map((beer) => (
        <div key={beer.id}>{beer.name} {beer.id}</div>
      ))}
    </div>
  )
}
