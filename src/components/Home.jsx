import React from "react";
import { Link } from 'react-router-dom';
import './styles/home.css';
import { useSelector } from "react-redux";
import logo from '../assets/img/logo.jpg'
import config from "../config";

import whatsappLogo from '../assets/img/whatsapp.png';
import instagramLogo from '../assets/img/instagram.png';
import telegramLogo from '../assets/img/telegram.png';



const Home = () => {
    const isAuth = useSelector(state => state.user.isAuth)

    return (

                <div className="wrapper">
                    <img src={logo} className="logo" alt="" />
                    <h1 className="h1" >{config.nameCargo}</h1>
                    <div className="buttons">
                    {!isAuth &&
                        <Link to="/login">
                            <div className="auth__button button">Войти</div>
                        </Link>
                    }
                    {!isAuth &&
                        <Link to="/registration">
                            <div className="reg__button button">Регистрация</div>
                        </Link>
                    }
                    {isAuth &&
                        <Link to="/main">
                            <div className="reg__button button">Главная</div>
                        </Link>
                    }

                    </div>

                    <div className="social-links">
                        <a href="https://wa.me/77053633333" target="_blank" rel="noopener noreferrer">
                            <img src={whatsappLogo} alt="WhatsApp" className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com/aq_cargo.kz?igsh=a2M0ZHduYXE2eXk1" target="_blank" rel="noopener noreferrer">
                            <img src={instagramLogo} alt="Instagram" className="social-icon" />
                        </a>
                        <a href="https://t.me/Aqcargo" target="_blank" rel="noopener noreferrer">
                            <img src={telegramLogo} alt="Telegram" className="social-icon" />
                        </a>
                    </div>
                </div>

    )
}

export default Home;