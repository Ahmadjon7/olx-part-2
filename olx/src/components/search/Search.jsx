import React , { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import Container from '../../utils/Container';
import instance from '../../api/instance';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import './Search.scss'
import { useTranslation } from 'react-i18next'


const Search = () => {
    
    const { t } = useTranslation();

    const [ searchResult , setSearchResult] = useState([])
    const [ searchValue , setSearchValue] = useState([])

    const giveSearchSuggestions = (e) =>{
        setSearchValue(e.target.value);

        instance.get(`/products/?title=${e.target.value}&offset=10&limit=10`)
        .then(reseponse => setSearchResult(reseponse.data))
        .catch(err => console.log(err))
    }

    const giveMoreResult = (e) =>{
        e.preventDefault();
        window.location.pathname = `/search/${searchValue}`
    }

    return (
        <section className='search'>
            <Container>
                <form onSubmit={giveMoreResult}>
                    <div className="search-wrapper">
                        <div className='search-elements'>
                            <FiSearch/>
                            <input onChange={giveSearchSuggestions} className='search-imput' type="text" placeholder={t("categories_plaseholder")} />
                            { searchResult?.length > 0 && searchValue ? <div className='search-suggestions'>
                                {searchResult.map(searchItem => 
                                    <Link to={`product/${searchItem.id}`} className='search-item__link' key={v4()}>
                                        <p>{searchItem.title}</p>
                                    </Link>
                                )}
                            </div>:<></>}
                        </div>
                    <button className='search-btn'><FiSearch/>{t("categories_search")}</button>
                    </div>
                </form>
            </Container>
        </section>
    );
};

export default Search;