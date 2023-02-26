import React from 'react';
import useFetchData from './../../hooks/useFetchData';
import { useParams } from 'react-router-dom';
import Container from '../../utils/Container';
import Loader from '../../components/loader/Loader';
import './Category.scss'
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';


const Category = () => {

    const productId = useParams();
    const [data , isLoading] = useFetchData(`categories/${productId.id}/products`)

    return (
        <section>
            <Container>
                <div className="search-results__wrapper">
                    {!isLoading ? 
                        data.map( categories => 
                            <div  className="search-results__item" key={v4()}>
                                <Link to={`/product/${categories.id}`}>
                                    <img src={categories.images?.at(0)} width={300} alt="search-results__image" className="search-results__image" />
                                </Link>
                                <div>
                                    <h2 className="search-results__title">{categories.title}</h2>
                                    <p className="search-results__text">{categories.description}</p>
                                    <strong className="search-results__price">${categories.price}</strong>
                                </div>
                            </div>
                        ):
                        <Loader/>
                    }
                </div>
            </Container>
        </section>
    );
};

export default Category;