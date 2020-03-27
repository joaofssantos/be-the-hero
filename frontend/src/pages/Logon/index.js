import React, { useState } from 'react';

import { Link , useHistory} from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import heroesImage from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(event) {
        event.preventDefault();

        try {
            const response = await api.post('sessions', { id });
                localStorage.setItem('ongId',id);
                localStorage.setItem('ongName',response.data.ong.name);
                history.push('/profile')
        } catch (error) {

            alert('Falha no login, tente novamente')

        }
    }

    return (
        <section className="section logon">
            <div className="section-content logon-content">
                <div className="logon-content-info">
                    <div className="logon-content-logo section-content-logo">
                        <img src={logoImage} alt="Logo Be The Hero" />
                    </div>
                    <div className="logon-content-info-item">
                        <form className="logon-content-form" onSubmit={handleLogin}>
                            <div className="logon-content-form-title">
                                <h1>Faça o seu Logon</h1>
                            </div>
                            <label htmlFor="" className="logon-content-form-label">
                                <input type="text"
                                    placeholder="Sua ID"
                                    className="logon-content-form-input"
                                    value={id}
                                    onChange={event => setId(event.target.value)}
                                />
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