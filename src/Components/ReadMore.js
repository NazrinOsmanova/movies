import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux';

const ReadMore = () => {
  const id = useParams().id
  const basket = useSelector(state => state.basket)
  const [data, setData] = useState(null)

  useEffect(() => {
    if (id) {
      setData(basket?.basketList?.Search?.filter(data => data.imdbID == id))
    }
  }, [id, basket])  

  return (
    <>
      {
        data && data.map(item => (
          <div className='readmore' key={item.imdbID}>
            <Link to="/">
              <button>Back</button>
            </Link>
            <div className="container">
              <h1>{item.Title}</h1>
              <img src={item.Poster} alt="spider" />
              <Link to={`https://www.imdb.com/title/${item.imdbID}`}><button>Go to <span>{item.Title}</span></button></Link>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default ReadMore;