import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import Create from './create/Create';
import Login from './login/Login';
import "./Auth.scss"

const Auth = () => {

    const { t } = useTranslation();
    return (
        <section className='auth'>
            <div className='animation-circle'>
            </div>
            <div className='auth-popup'>
                <ul className='auth-pupup__nav'>
                    <li>
                        <NavLink activeClassName='auth__link--active' className="auth__link" to="/auth/login">{t("auth_login")}</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='auth__link--active' className="auth__link" to="/auth/create">{t("auth_create")}</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/auth/create">
                        <Create />
                    </Route>
                    <Route path="/auth/login">
                        <Login />
                    </Route>
                </Switch>
            </div>
        </section>
    );
};

export default Auth;