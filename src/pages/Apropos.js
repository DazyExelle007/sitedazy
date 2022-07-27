import React from 'react';
import Navigation from '../components/Navigation';
import Monprofil from "../assets/img/maki.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'


const Apropos = () => {
    return (
        <div>
            <Navigation/>
           <div className='group-about'>
            <div className='left-about'>
                <div className="about-title">
                <h1>Tous a savoir sur moi</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio dolores accusantium ipsam quia nostrum.
                     Aspernatur voluptatibus quod consectetur sit consequuntur odio voluptatem, 
                     obcaecati tempora rem natus eos sint saepe doloribus?</p>
                </div>

                <ul className='all-info'>
                    <li>
                     <h1>Pastemps</h1>
                    <div className='content'>
                        <p>Lire</p>
                        <p>Music</p>
                    </div>
                    </li>
                    <li>
                     <h1>Pastemps</h1>
                    <div className='content'>
                        <p>Lire</p>
                        <p>Music</p>
                    </div>
                    </li>
                    <li>
                     <h1>Pastemps</h1>
                    <div className='content'>
                        <p>Lire</p>
                        <p>Music</p>
                    </div>
                    </li>
                </ul>
                
            </div>

            <div className='right-about'>
                <img src={Monprofil} />
            </div>
           </div>
        </div>
    );
};

export default Apropos;