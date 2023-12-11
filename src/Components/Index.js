import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addList, createList, removeList } from '../store/list';
import { addBasket } from '../store/basket'

const Index = () => {
    const [searchData, setSearchData] = useState("godfather");
    const dispatch = useDispatch();
  
    const search = (e) => {
        setSearchData(e.target.parentElement.querySelector("input").value.toLowerCase())
    }
  
    useEffect(() => {
      fetch(`https://www.omdbapi.com/?s=${searchData}&apikey=1ef7ec0e`)
        .then(res => res.json())
        .then(data => {
          dispatch(addBasket(data));
        })
        .catch(error => console.error(error));
    }, [searchData, dispatch]); 

    const list = useSelector(state => state.list.List)

    const add = (id) => {
        if (!list.List?.some(listId => listId == id)) {
            dispatch(addList(basket?.basketList?.Search?.filter(data => data.imdbID == id)))
        }
        else {
            alert('bunu elave etmisen')
        }
    };

    const remove = (id) => {
        dispatch(removeList(id))
    };

    const basket = useSelector((state) => state.basket)

    const [inputValue, setInputValue] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        setIsButtonDisabled(!inputValue.trim());
    }, [inputValue]);

    const createNewList = (e) => {
        setInputValue(e.target.value);
    };

    const save = () => {
        dispatch(createList(inputValue))
    };

    return (
        <div className='index'>
            <div className="mavi">
                <p>MUSTSEE</p>
            </div>
            <div className="white">
                <div className="sol">
                    <div className="search">
                        <input type="text" placeholder='Write name of the film...' />
                        <button onClick={search} >Search</button>
                    </div>
                    <div className="items">
                        {
                            basket?.basketList?.Search?.filter(e => e.Title.toLowerCase().includes(searchData)).map((m, i) => (
                                <div className="item" key={i} >
                                    <img src={m.Poster} alt={m.Title} />
                                    <div className="about">
                                        <p>{m.Title}</p>
                                        <button onClick={() => add(m.imdbID)}>Add to list</button>
                                        <Link to={`/readmore/${m.imdbID}`}>
                                            <button>Read More</button>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="sag">
                    <div className="list">
                        <input value={inputValue} onChange={createNewList} type="text" placeholder='Create a new list' />
                        <div className="items">
                            {
                                list.map((item, index) => (
                                    <div className="item" key={index}>
                                        <p className='item'>{item.Title}</p>
                                        <i onClick={() => remove(item.imdbID)} className="fa-solid fa-x"></i>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="buttons">
                            <button onClick={save} disabled={isButtonDisabled}>Save</button>
                            <Link to="/basket">
                                <button>Go to Basket</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index