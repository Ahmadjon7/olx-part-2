import './Product.scss'
import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import Container from '../../utils/Container';
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi'
import Loader from '../../components/loader/Loader';
import { useTranslation } from 'react-i18next'


const Product = () => {

    const dataId = useParams();

    const [data, isLoading] = useFetchData(`/products/${dataId.id}`)
    
    const { t } = useTranslation();

    return (
        <section className='single-product'>
            <Link to="/" className='btn-back'>
                <HiArrowNarrowLeft /> Back
            </Link>
            <Container>
                {!isLoading ?
                    <div className='single-product__wrapper'>
                        <div className='single-product--imageBox'>
                            {
                                data.images?.at(0) && data.images?.at(0).startsWith("https://") ?
                                    <img className='single-product__image' src={data.images?.at(0)} alt="single-product__image" />
                                    : <img className='single-product__image' src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F3f%2FPlaceholder_view_vector.svg%2F681px-Placeholder_view_vector.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3APlaceholder_view_vector.svg&tbnid=EXnrfE3lRCvyyM&vet=12ahUKEwjItsbJ3KT9AhVtCxAIHdU4DtEQMygEegUIARCfAQ..i&docid=rZF7WVKcxnVDIM&w=681&h=528&q=placeholder%20image&ved=2ahUKEwjItsbJ3KT9AhVtCxAIHdU4DtEQMygEegUIARCfAQ" alt="single-product__image" />
                            }
                        </div>
                        <div className='single-product--info'>
                            <h1>{data.title}</h1>
                            <p>{data.description}</p>
                            <strong>${data.price}</strong>
                            <button className='single-btn'>{t("singleProduct_cart")}</button>
                        </div>
                    </div> 
                    :
                    <Loader/>
                }
            </Container>


        </section>
    );
};

export default Product;