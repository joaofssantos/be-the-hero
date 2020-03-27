import React from 'react';

import { Link } from 'react-router-dom';

import { FiPower, FiTrash } from 'react-icons/fi';

import './styles.css';

import logoImage from '../../assets/logo.svg'

export default function Profile() {
    return (
        <section className="section profile">
            <header className="profile-header">

                <div className="profile-header-group">
                    <div className="profile-header-logo">
                        <img src={logoImage} alt="Be The Hero" />
                    </div>
                    <div className="profile-header-tagname">
                        <span>
                            Bem vinda, APAD
                    </span>
                    </div>

                </div>
                <div className="profile-header-group">
                    <div className="profile-header-create">
                        <Link to="/incidents/new">Cadastrar novo caso</Link>

                    </div>
                    <div className="profile-header-logout">
                        <button type="button"><FiPower size={18} color="#e02041" /></button>
                    </div>
                </div>

            </header>
            <div className="section-content profile-content">
                <div className="profile-content-title">
                    <h1>Casos Cadastrados</h1>
                </div>
                <div className="profile-content-group">
                    <div className="profile-content-list">
                        <li className="profile-content-list-incident">
                            <button className="profile-content-list-incident-remove">
                                <FiTrash size={20} color="#a8a8b3" />
                            </button>
                            <div className="profile-content-list-incident-title">
                                <h2>Caso: </h2>
                                <h3>Caso Teste</h3>
                            </div>
                            <div className="profile-content-list-incident-description">
                                <h2>Descrição: </h2>
                                <h3>Descrição Teste</h3>
                            </div>
                            <div className="profile-content-list-incident-price">
                                <h2>Valor: </h2>
                                <h3>R$ 120,00</h3>
                            </div>
                        </li>
                        <li className="profile-content-list-incident">
                            <button className="profile-content-list-incident-remove">
                                <FiTrash size={20} color="#a8a8b3" />
                            </button>
                            <div className="profile-content-list-incident-title">
                                <h2>Caso: </h2>
                                <h3>Caso Teste</h3>
                            </div>
                            <div className="profile-content-list-incident-description">
                                <h2>Descrição: </h2>
                                <h3>Descrição Teste</h3>
                            </div>
                            <div className="profile-content-list-incident-price">
                                <h2>Valor: </h2>
                                <h3>R$ 120,00</h3>
                            </div>
                        </li>
                        <li className="profile-content-list-incident">
                            <button className="profile-content-list-incident-remove">
                                <FiTrash size={20} color="#a8a8b3" />
                            </button>
                            <div className="profile-content-list-incident-title">
                                <h2>Caso: </h2>
                                <h3>Caso Teste</h3>
                            </div>
                            <div className="profile-content-list-incident-description">
                                <h2>Descrição: </h2>
                                <h3>Descrição Teste</h3>
                            </div>
                            <div className="profile-content-list-incident-price">
                                <h2>Valor: </h2>
                                <h3>R$ 120,00</h3>
                            </div>
                        </li>
                        <li className="profile-content-list-incident">
                            <button className="profile-content-list-incident-remove">
                                <FiTrash size={20} color="#a8a8b3" />
                            </button>
                            <div className="profile-content-list-incident-title">
                                <h2>Caso: </h2>
                                <h3>Caso Teste</h3>
                            </div>
                            <div className="profile-content-list-incident-description">
                                <h2>Descrição: </h2>
                                <h3>Descrição Teste</h3>
                            </div>
                            <div className="profile-content-list-incident-price">
                                <h2>Valor: </h2>
                                <h3>R$ 120,00</h3>
                            </div>
                        </li>
                    </div>
                </div>
            </div>
        </section>
    );
}