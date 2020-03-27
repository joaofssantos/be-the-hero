import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImage from '../../assets/logo.svg'

export default function Register() {
    return (
        <section className="section register">

            <div className="section-content register-content">
                <div className="register-content-box">
                    <div className="register-content-info">
                        <div className="register-content-logo">
                            <img src={logoImage} alt="Logo Be The Hero" />
                        </div>
                        <div className="register-content-title">
                            <h1>Cadastro</h1>
                        </div>
                        <div className="register-content-text">
                            <p>
                                Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.
                            </p>
                        </div>
                        <div className="register-content-back">
                            <Link to="/"><FiArrowLeft size={16} color="#e02041" />Não Tenho Registro</Link>
                        </div>
                    </div>
                    <div className="register-content-item">
                        <form className="register-content-form">
                            <div className="register-content-form-group">
                                <label htmlFor="" className="register-content-form-label w100">
                                    <input type="text" placeholder="Nome da ONG" className="register-content-form-input" />
                                </label>
                            </div>
                            <div className="register-content-form-group">
                                <label htmlFor="" className="register-content-form-label w100">
                                    <input type="email" placeholder="E-mail" className="register-content-form-input" />
                                </label>
                            </div>
                            <div className="register-content-form-group">
                                <label htmlFor="" className="register-content-form-label w100">
                                    <input type="text" placeholder="Whatsapp" className="register-content-form-input" />
                                </label>
                            </div>
                            <div className="register-content-form-group">
                                <label htmlFor="" className="register-content-form-label w75">
                                    <input type="text" placeholder="Cidade" className="register-content-form-input" />
                                </label>
                                <label htmlFor="" className="register-content-form-label w20">
                                    <input type="text" placeholder="UF" className="register-content-form-input" />
                                </label>
                            </div>
                            <div className="register-content-form-group">
                                <button type="submit" className="register-content-form-submit">
                                    Cadastrar
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}