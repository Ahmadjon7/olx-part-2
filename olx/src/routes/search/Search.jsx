import React , { useState ,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import Container from '../../utils/Container';
import { Link } from 'react-router-dom';
import SearchName from '../../components/search/Search'
import instance from '../../api/instance';
import { v4 } from 'uuid';
import './Search.scss'
import Loader from '../../components/loader/Loader';

const Search = () => {

    const [lowerSelect , setLowerSelect] = useState(1)
    const [upperSelect , setUpperSelect] = useState(1)
    const [filterResult , setFilterResult] = useState([])

    const productInfo = useParams();

    var [data , isLoading] =  useFetchData(`/products/?title=${productInfo.productName}`)

    const prices = [1,10,100,1000,10000,100000]
 
    useEffect(() =>{
        if(lowerSelect > upperSelect){
            setLowerSelect(upperSelect)
            setUpperSelect(lowerSelect)
        }
        instance.get(`/products/?title=${productInfo.productName}&price_min=${lowerSelect}&price_max=${upperSelect}`)
        .then(response => setFilterResult(response.data))

    },[lowerSelect, productInfo.productName, upperSelect])

    if(filterResult.length > 0){
        data = filterResult
    }

    return (
        <section className='search-results'>
            <SearchName/>

            <Container>

                <div className="search-filters" >
                    <p>Min price</p>
                    <select value={lowerSelect} onChange={(e) => setLowerSelect(e.target.value) }>
                        {
                            prices.map(price => 
                                <option value={`${price}`} key={v4()}>{price}</option>    
                            )
                        }
                    </select>
                    <p>Max price</p>
                    <select value={upperSelect} onChange={(e) => setUpperSelect(e.target.value) }>
                        {
                            prices.map(price => 
                                <option value={`${price}`} key={v4()}>{price}</option>    
                            )
                        }
                    </select>
                </div>

                <div className="search-results__wrapper">
                    {!isLoading ? 
                        data.map( serachItem => 
                            <div  className="search-results__item" key={v4()}>
                                <Link to={`/product/${serachItem.id}`}>
                                    <img src={serachItem.images?.at(0)} width={300} alt="search-results__image" className="search-results__image" />
                                </Link>
                                <div>
                                    <h2 className="search-results__title">{serachItem.title}</h2>
                                    <p className="search-results__text">{serachItem.description}</p>
                                    <strong className="search-results__price">${serachItem.price}</strong>
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

export default Search;