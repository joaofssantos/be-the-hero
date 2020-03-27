import React from 'react';

import {Link} from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import heroesImage from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';

export default function Logon() {
    return (
        <section className="section logon">
            <div className="section-content logon-content">
                <div className="logon-content-info">
                    <div className="logon-content-logo section-content-logo">
                        <img src={logoImage} alt="Logo Be The Hero" />
                    </div>
                    <div className="logon-content-info-item">
                        <form className="logon-content-form">
                            <div className="logon-content-form-title">
                                <h1>Faça o seu Logon</h1>
                            </div>
                            <label htmlFor="" className="logon-content-form-label">
                                <input type="text" placeholder="Sua ID" className="logon-content-form-input" />
                            </label>
                            <button type="submit" className="logon-content-form-submit">
                                Entrar
                            </button>
                        </form>
                        <div className="logon-content-info-signup">
                            <Link to="/register"><FiLogIn size={16} color="#e02041" />Não Tenho Registro</Link>
                        </div>
                    </div>
                </div>
                <div className="logon-content-image">
                    <img src={heroesImage} alt="Heroes" />
                </div>
            </div>

        </section>
    );
}