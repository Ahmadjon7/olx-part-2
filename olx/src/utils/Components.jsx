import React from 'react';
import {Link} from "react-router-dom"
import { useTranslation } from 'react-i18next'

const RedirectButton = ({redirect, title, type}) => {
    const { t } = useTranslation();
    return (
        <Link className={ type === "light" ? " link link--light" : " link link--dark"} to={redirect} >
            {t("header_add")}
        </Link>
    );
};


export { RedirectButton };