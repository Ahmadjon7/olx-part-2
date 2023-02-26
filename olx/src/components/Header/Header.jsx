import React from 'react';
import './Header.scss'
import logo from '../images/olx-logo.png';
import Container from '../../utils/Container';
import { useLocation , Link } from 'react-router-dom';
import {FiHeart, FiMessageCircle, FiUser} from 'react-icons/fi'
import { RedirectButton } from '../../utils/Components';
import { useTranslation } from 'react-i18next'
import  i18n  from '../../language/i18next';
import { useSelector } from 'react-redux';
const Header = () => {

    const location = useLocation();
    const { t } = useTranslation();
    const createUserData = useSelector(state => state.creatReducer)


    return location.pathname.includes('/auth') ? <></> : (
        <header>
            <Container>
                <div className='header-wrapper' key="header">
                    <img className='header__logo' src={logo} alt="logo-img" />
                    <nav>
                        <ul className="language-select">
                            <li className={localStorage.getItem("lang") === "uz" ? "active-lang" : ""} onClick={() => i18n.changeLanguage('uz')}>O'Z</li>
                            <span>|</span>
                            <li className={localStorage.getItem("lang") === "ru" ? "active-lang" : ""} onClick={() => i18n.changeLanguage('ru')}>RU</li>                            
                        </ul>
                        <Link to="/message" className='header-nav__link'>
                            <FiMessageCircle/>
                            {t("header_message")}
                        </Link>
                        <Link to="/like" className='header-nav__link'>
                            <FiHeart/>
                        </Link>
                        <Link to="/auth/create" className='header-nav__link'>
                            <FiUser/>
                            {
                                createUserData.user?.email ? createUserData.user?.email : t("header_profile")
                            }
                        </Link>
                        <RedirectButton redirect="/create-new/" title="E'lon berish" type="light" />
                    </nav>
                </div>
            </Container>
        </header>
    );
};

export default Header;