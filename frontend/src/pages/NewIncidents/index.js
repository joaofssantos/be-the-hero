import React,{useState} from 'react';

import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api'


import './styles.css';

import logoImage from '../../assets/logo.svg'

export default function NewIncident() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');

   async function handleNewIncident(event){
event.preventDefault();

const data ={
    title,
    description,
    value,

}

try {
    await api.post('incidents',data,{
        headers:{
            Authorization: ongId,
        }
    })
    history.push('/profile')
} catch (error) {
    alert('Erro ao cadastrar caso, tente novamente')
}
}

    return (
        <section className="section new-incident">

            <div className="section-content new-incident-content">

                <div className="new-incident-content-box">
                    <div className="new-incident-content-info">
                        <div className="new-incident-content-logo">
                            <img src={logoImage} alt="Logo Be The Hero" />
                        </div>
                        <div className="new-incident-content-title">
                            <h1>Cadastrar novo caso</h1>
                        </div>
                        <div className="new-incident-content-text">
                            <p>
Descrever o caso detalhadamente para encontrar um herói para resolver isso.
                            </p>
                        </div>
                        <div className="new-incident-content-back">
                            <Link to="/profile"><FiArrowLeft size={16} color="#e02041" />Voltar para home</Link>
                        </div>
                    </div>
                    <div className="new-incident-content-item">
                        <form className="new-incident-content-form" onSubmit={handleNewIncident}>
                            <div className="new-incident-content-form-group">
                                <label htmlFor="" className="new-incident-content-form-label w100">
                                    <input type="text" 
                                    placeholder="Titulo do caso" className="new-incident-content-form-input"  value={title} onChange={event => setTitle(event.target.value)}/>
                                </label>
                            </div>
                            <div className="new-incident-content-form-group">
                                <label htmlFor="" className="new-incident-content-form-label w100">
                                    <textarea 
                                    placeholder="Descrição" className="new-incident-content-form-textarea" value={description} onChange={event => setDescription(event.target.value)} >

                                    </textarea>
                                </label>
                            </div>
                            <div className="new-incident-content-form-group">
                                <label htmlFor="" className="new-incident-content-form-label w100">
                                    <input type="text" 
                                    placeholder="Valor em reais" className="new-incident-content-form-input"  value={value} onChange={event => setValue(event.target.value)}/>
                                </label>
                            </div>
                           
                            <div className="new-incident-content-form-group">
                         
                                <button type="submit" className="new-incident-content-form-submit">
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