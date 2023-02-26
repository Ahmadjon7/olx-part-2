/* eslint-disable react/jsx-no-duplicate-props */
import Container from '../../utils/Container';
import { Link } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import './Categories.scss'
import { v4 } from 'uuid';
import Loader from '../loader/Loader';
import { useTranslation } from 'react-i18next'




const Categories = () => {

    const { t } = useTranslation();

    const [data, isLoading] = useFetchData("/categories");

    return (
        <section className='categories'>
            <Container>
                <h2 className='categories-title'>
                    {t("categories_title")}
                </h2>
                <div className="categories-wrapper">
                    {!isLoading ?
                        data.map(category =>
                            <Link key={v4()} className="category-item" to={`/category/${category.id}`}>
                                <div className="category__image--wrapper" >
                                    <img src={category.image} alt="category-img" className='category-image' />
                                </div>
                                <h3 className='category-title'>{category.name}</h3>
                            </Link>
                        ) :
                        <Loader />
                    }
                </div>
            </Container>
        </section>
    );
};

export default Categories;