import React, { useState } from 'react';

import { Link, useHistory} from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImage from '../../assets/logo.svg'

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(event) {
        event.preventDefault();

        const data =({
            name,
            email,
            whatsapp,
            city,
            uf,
        } )

        try{
            const response = await api.post('ongs', data);

            alert(`Seu ID de acesso é: ${response.data.id}`);
            history.push('/')
        }catch(err){
            alert('Erro no cadastro, tente novamente.');
        }
      
    }
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
                        <form className="register-content-form" onSubmit={handleRegister}>
                            <div className="register-content-form-group">
                                <label htmlFor="" className="register-content-form-label w100">
                                    <input type="text"
                                        placeholder="Nome da ONG"
                                        className="register-content-form-input" value={name} onChange={event => setName(event.target.value)}
                                    />
                                </label>
                            </div>
                            <div className="register-content-form-group">
                                <label htmlFor="" className="register-content-form-label w100">
                                    <input type="email"
                                        placeholder="E-mail"
                                        className="register-content-form-input" value={email} onChange={event => setEmail(event.target.value)}
                                    />
                                </label>
                            </div>
                            <div className="register-content-form-group">
                                <label htmlFor="" className="register-content-form-label w100">
                                    <input type="text"
                                        placeholder="Whatsapp"
                                        className="register-content-form-input" value={whatsapp} onChange={event => setWhatsapp(event.target.value)}
                                    />
                                </label>
                            </div>
                            <div className="register-content-form-group">
                                <label htmlFor="" className="register-content-form-label w75">
                                    <input type="text"
                                        placeholder="Cidade"
                                        className="register-content-form-input" value={city} onChange={event => setCity(event.target.value)}
                                    />
                                </label>
                                <label htmlFor="" className="register-content-form-label w20">
                                    <input type="text"
                                        placeholder="UF"
                                        className="register-content-form-input" value={uf} onChange={event => setUf(event.target.value)}
                                    />
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