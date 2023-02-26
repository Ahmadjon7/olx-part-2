import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { auth, provider } from '../../../firebase/firebaseconfig';
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import instance from './../../../api/instance';

const Create = (e) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        avatar: "",
        email: "",
        name: "",
        password: ""
    })

    const createAccoutWithGoogle = () => {
        auth.signInWithPopup(provider)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    const createUserWithEmail = (e) => {
        e.preventDefault()
        instance.post("/users", formData)
            .then(response => {
                if (response.data) {
                    //send to store
                    dispatch(
                        { 
                            user: response.data,
                            type: "CREATE_USER"
                        }
                    )
                    history.push("/")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='auth-create'>
            <button onClick={createAccoutWithGoogle} className='auth-google-btn'><FcGoogle />{t("auth_google")}</button>
            <form className='auth-form' onSubmit={createUserWithEmail}>
                <input type="text" placeholder={t("auth_name")} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                <input type="url" placeholder={t("auth_avatar")} onChange={e => setFormData({ ...formData, avatar: e.target.value })} />
                <input type="email" placeholder={t("auth_email")} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                <input type="password" placeholder={t("auth_password")} onChange={e => setFormData({ ...formData, password: e.target.value })} />
                <button type='submit'>{t("auth_btn")}</button>
            </form>
        </div>
    );
};

export default Create;