import Container from './../../utils/Container';
import { FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import './MainProducts.scss';
import Loader from '../loader/Loader';
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux';


const MainProducts = () => {

    const dispatch = useDispatch()

    const [data , isLoading] = useFetchData("/products?offset=0&limit=20");

    const { t } = useTranslation();

    function trimDescription(str) {
        return str.split(" ").slice(0, 8).join(" ") + "..."
    }

    function addToLike(productItem){
        dispatch({productItem, type:"LIKE_PRODUCT"})
        return
    }

    return (
        <section className="main-products">
            <h2 className='main-products--title'>{t("mainProduct_title")}</h2>
            <Container>
                <div className="main-product--wrapper">
                    {!isLoading ? 
                        data.map(productItem =>
                            <div key={productItem.id} className="product-item">
                                <Link to={`/product/${productItem.id}`} className='prodcut-item--link'>
                                    {
                                        productItem.images?.at(0) && productItem.images?.at(0).startsWith("https://") ?
                                            <img className='product-item__image' src={productItem.images?.at(0)} alt="product-item__image" />
                                            :<img className='product-item__image' src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F3f%2FPlaceholder_view_vector.svg%2F681px-Placeholder_view_vector.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3APlaceholder_view_vector.svg&tbnid=EXnrfE3lRCvyyM&vet=12ahUKEwjItsbJ3KT9AhVtCxAIHdU4DtEQMygEegUIARCfAQ..i&docid=rZF7WVKcxnVDIM&w=681&h=528&q=placeholder%20image&ved=2ahUKEwjItsbJ3KT9AhVtCxAIHdU4DtEQMygEegUIARCfAQ" alt="single-product__image" />
                                    }
                                    <h3 className='product-item__title'>{productItem.title}</h3>
                                </Link>
                                <div className='prodcut-item__tabs'>
                                    <div>
                                        <p className='product-item__text'>{trimDescription(productItem.description)}</p>
                                        <strong className='product-item__price'>${productItem.price}</strong>
                                    </div>
                                    <FiHeart onClick={() => addToLike(productItem)} />
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

export default MainProducts;