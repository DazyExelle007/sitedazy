import React from 'react';
import Navigation from '../components/Navigation';

const Competance = () => {
    return (
        <div>
            <Navigation/>
            <div className='Mycompetence container'>
                <div className='title-competence'>
                 <h1>Mes Competance</h1>
                 <p>Des compétences à votre service</p>
                </div>
            <div className='content-competence'>
                <div className='left-conpetence'>
                    <h2>Compétences complementaire</h2>
                    <h2>Avantage</h2>
                </div>
                <div className='right-competence'>
                    <h2>Compétences en développement</h2>

                    <h2>Compétences en conception graphique</h2>

                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Competance;