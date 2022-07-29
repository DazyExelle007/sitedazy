import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Mylocalisation from '../components/Mylocalisation';
import Navigation from '../components/Navigation';


const Contact = () => {
    return (
        <div>
            <Navigation/>
            <div className='mycontact container'>
                <div className='tite-contact'>
                        <h1>Contact</h1>
                </div>
            
                <div className='contact-content'>
                    <div className='left-contact'>
                        <h2>Contact rapide</h2>
                        <div className='contact-rapide'>
                            <ul className='card'>
                                <li>
                                <FontAwesomeIcon icon={faPhone}/>
                                +261 347402412
                                </li>
                                <li>
                                <FontAwesomeIcon icon={faEnvelope}/>
                                +261 347402412
                                </li>
                                <li>
                                <FontAwesomeIcon icon={faLocationDot}/>
                                +261 347402412
                                </li>
                                <li>
                                <FontAwesomeIcon icon={faPhone}/>
                                +261 347402412
                                </li>
                            
                            </ul>
                        </div>
                    </div>

                    <div className='rigth-contact'>
                        <h2>Envoyer un message</h2>
                        <div className='localisation'>
                       <Mylocalisation/>
                        </div>
                        <div className='formulaire'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;