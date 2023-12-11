import { Link, useParams } from 'react-router-dom';
import React from 'react'
import { useSelector } from 'react-redux';

const Basket = () => {
    const savedList = useSelector(state => state.list.SavedList)

    const rotate = (e) => {
        if (!e.target.classList.contains('myClass')) {
            e.target.classList.add('myClass')
            e.target.parentElement.nextSibling.classList.add("block")
        }
        else {
            e.target.classList.remove('myClass')
            e.target.parentElement.nextSibling.classList.remove("block")
        }
    }

    return (
        <div className='basket'>
            <div className="container">
                <h3>Your Basket</h3>
                <Link to="/">
                    <button>Back</button>
                </Link>
                <div className="divs">
                    {
                        savedList.map((data, ind) => (
                            <div className="items" key={ind} >
                                <div className="line">
                                    <p>List Name: <span>{data.listName}</span></p>
                                    <i onClick={rotate} className="fa-solid fa-chevron-up"></i>
                                </div>
                                <div className="below">
                                    {
                                        data.data.map((array, index) => (
                                            <div className="item" key={index} >
                                                <img src={array.Poster} alt="spider" />
                                                <p>Film Name: <span>{array.Title}</span></p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Basket