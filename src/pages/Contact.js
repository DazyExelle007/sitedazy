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
                        <h1>Rester en contact</h1>

                </div>
                <div className='localisation'>
                             <Mylocalisation />
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
                        
                        <div className='formulaire'>
                            <form>
                                <div className='group-input'>
                                    <label>
                                    Nom :
                                    <input type="text" name="name" />
                                    </label>
                                </div>
                                <div className='group-input'>
                                    <label>
                                    Email :
                                    <input type="text" name="name" />
                                    </label>
                                </div>
                                <div className='group-input'>
                                    <label>
                                    Objet :
                                    <input type="text" name="name" />
                                    </label>
                                </div>
                                <div className='group-input'>
                                    <label>
                                    Message :
                                    <input type="text" name="name" />
                                    </label>
                                </div>
                           
                            
                            <input type="submit" value="Envoyer" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;