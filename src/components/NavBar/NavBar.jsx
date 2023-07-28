import { useContext } from "react";
import ThemeContext from "../../assets/contexts/themeContext";
import img from '../../assets/images/sona-prop.jpg';

import './NavBar.css'

const NavBar = () =>{

    const themeContext = useContext(ThemeContext);

    const optionsMouseEnterAction = (e) =>{

        e.target.innerHTML = e.target.id.slice(0,e.target.id.indexOf('-'))+' &and;';

        switch(e.target.id.slice(0,e.target.id.indexOf('-'))){
            case 'Comprar':

                document.getElementById('hidden-header-ul-1').style.display = 'flex';
                document.getElementById('hidden-header-ul-1').style.animation = 'fade-in .2s ease-in';
                break;
            default:
                break;

        }
    };
    
    const optionsMouseLeaveAction = (e) =>{


        e.target.innerHTML = e.target.id.slice(0,e.target.id.indexOf('-'))+' &or;';
        
    };

    const optionsSubMenuMouseLeaveAction = (e) =>{
        
        for(let i =0;i<1;i++){
            document.getElementById(`hidden-header-ul-${i+1}`).style.display = 'none';
            document.getElementById(`hidden-header-ul-${i+1}`).style.animation = 'none';
        }
    }

        return(
            <>
                <header className="navbar-header">
                    <ul className="header-ul">
                        
                        <li className="header-li">
                            <img src={img} alt="sona-prop-logo"></img>
                        </li>
                        <li id="Comprar-li" className="header-li" onMouseEnter={optionsMouseEnterAction} onMouseLeave={optionsMouseLeaveAction}>
                            Comprar &or;
                        </li>
                        <li id="Alquilar-li" className="header-li" onMouseEnter={optionsMouseEnterAction} onMouseLeave={optionsMouseLeaveAction}>
                            Alquilar &or;
                        </li>
                        <li id="Temporal-li" className="header-li" onMouseEnter={optionsMouseEnterAction} onMouseLeave={optionsMouseLeaveAction}>
                            Temporal &or;
                        </li>
                        <li id="Emprendimientos-li" className="header-li">
                            Emprendimientos
                        </li>
                        <li id="Servicios-li" className="header-li" onMouseEnter={optionsMouseEnterAction} onMouseLeave={optionsMouseLeaveAction}>
                            Servicios &or;
                        </li>
                    </ul>
                    <ul id="hidden-header-ul-1" className="header-ul-hidden" onMouseLeave={optionsSubMenuMouseLeaveAction}>
                        <li className="header-li-hidden">
                            <h3>Ubicación</h3>
                            <ul className="header-location-ul">

                                <li className='header-hidden-li'>Capital Federal</li>

                                <li className='header-hidden-li'>GBA Norte</li>

                                <li className='header-hidden-li'>GBA Sur</li>
                                
                                <li className='header-hidden-li'>Santa Fe</li>

                                <li className='header-hidden-li'>GBA Oeste</li>

                                <li className='header-hidden-li'>Buenos Aires Costa Atlántica</li>

                                <li className='header-hidden-li'>Córdoba</li>

                                <li className='header-hidden-li'>Buenos Aires (fuera de GBA)</li>

                                <li className='header-hidden-li'>Mendoza</li>

                                <li className='header-hidden-li'>Neuquen</li>

                                <li className='header-hidden-li'>Rio Negro</li>
                            </ul>
                        </li>
                        <li className="header-li-hidden">
                            <h4>Tipo de propiedad</h4>
                            <ul className="header-property-type-ul">
                                <li className='header-hidden-li'>Departamento</li>

                                <li className='header-hidden-li'>Casa</li>

                                <li className='header-hidden-li'>Terreno</li>

                                <li className='header-hidden-li'>PH</li>

                                <li className='header-hidden-li'>Local Comercial</li>
                            </ul>
                        </li>
                        <li className="header-li-hidden">
                            <h4>Ambientes</h4>
                            <ul className="header-ambients-ul">
                                <li className='header-hidden-li'>3 ambientes</li>

                                <li className='header-hidden-li'>2 ambientes</li>

                                <li className='header-hidden-li'>4 ambientes</li>

                                <li className='header-hidden-li'>5 o más ambientes</li>

                                <li className='header-hidden-li'>1 ambiente</li>
                            </ul>
                        </li>
                        <li className="header-li-hidden">
                            <h4>Características</h4>
                            <ul className="header-characteristics-ul">

                                <li className='header-hidden-li'>1 o más baños</li>

                                <li className='header-hidden-li'>2 o más baños</li>

                                <li className='header-hidden-li'>Sin cocheras</li>

                                <li className='header-hidden-li'>1 o más cocheras</li>

                                <li className='header-hidden-li'> A estrenar</li>

                                <li className='header-hidden-li'>En construccion</li>

                                <li className='header-hidden-li'>Cocina</li>

                                <li className='header-hidden-li'>Luz</li>

                                <li className='header-hidden-li'>Parrilla</li>

                            </ul>
                        </li>
                        <li className="header-li-hidden">
                            <h4>Servicios</h4>
                            <ul className="header-services-ul">

                                <li className='header-hidden-li'>Publicar aviso para vender</li>

                                <li className='header-hidden-li'>Valuá tu propiedad</li>

                                <li className='header-hidden-li'>¿Qué necesito para comprar?</li>

                                <li className='header-hidden-li'> Razones para comprar en pozo</li>

                            </ul>
                        </li>
                    </ul>
                </header>
            </>
        );
};

export default NavBar;