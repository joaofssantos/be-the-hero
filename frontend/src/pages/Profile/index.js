import React, { useState, useEffect } from 'react';

import { Link , useHistory} from 'react-router-dom';

import { FiPower, FiTrash } from 'react-icons/fi';

import api from '../../services/api'

import './styles.css';

import logoImage from '../../assets/logo.svg'

export default function Profile() {
    const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');


    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ongId])

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id))
        } catch (error) {
            alert('Erro ao deletar caso, tente novamente')
        }
    }
    function handleLogout(){
        localStorage.removeItem('ongId');
        localStorage.removeItem('ongName');

        history.push('/')

    }
    return (
        <section className="section profile">
            <header className="profile-header">
                <div className="profile-header-group">
                    <div className="profile-header-logo">
                        <img src={logoImage} alt="Be The Hero" />
                    </div>
                    <div className="profile-header-tagname">
                        <span>
                            Bem vinda, {ongName}
                        </span>
                    </div>
                </div>
                <div className="profile-header-group">
                    <div className="profile-header-create">
                        <Link to="/incidents/new">Cadastrar novo caso</Link>
                    </div>
                    <div className="profile-header-logout">
                        <button type="button" onClick={handleLogout}><FiPower size={18} color="#e02041" /></button>
                    </div>
                </div>
            </header>
            <div className="section-content profile-content">
                <div className="profile-content-title">
                    <h1>Casos Cadastrados</h1>
                </div>
                <div className="profile-content-group">
                    <div className="profile-content-list">
                        {
                            incidents.map(incident => (
                                <li className="profile-content-list-incident" key={incident.id}>
                                    <button className="profile-content-list-incident-remove" onClick={() => handleDeleteIncident(incident.id)}>
                                        <FiTrash size={20} color="#a8a8b3" />
                                    </button>
                                    <div className="profile-content-list-incident-title">
                                        <h2>Caso:</h2>
                                        <h3>{incident.title}</h3>
                                    </div>
                                    <div className="profile-content-list-incident-description">
                                        <h2>Descrição:</h2>
                                        <h3>{incident.description}</h3>
                                    </div>
                                    <div className="profile-content-list-incident-price">
                                        <h2>Valor: </h2>
                                        <h3>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</h3>
                                    </div>
                                </li>
                            ))
                        }


                    </div>
                </div>
            </div>
        </section>
    );
}