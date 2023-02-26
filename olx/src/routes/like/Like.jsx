import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

const Like = () => {


    const  { likeProducts } = useSelector(state => state.likeReducer);

    console.log(likeProducts)
    
    return (
        <div>
            <div className="search-results__wrapper">
                {
                    likeProducts.map(likeProduct =>
                        <div className="search-results__item" key={v4()}>
                            <Link to={`product/${likeProduct.id}`}>
                                <img width={300} src={likeProduct.images?.at(0)}  alt="search-results__image" className="search-results__image" />
                            </Link>
                            <div>
                                <h2 className="search-results__title">{likeProduct.title}</h2>
                                <p className="search-results__text">{likeProduct.description}</p>
                                <strong className="search-results__price">${likeProduct.price}</strong>
                            </div>
                        </div>
                    ) 
                }
            </div>
        </div>
    );
};

export default Like;