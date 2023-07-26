import { useContext } from "react";
import ThemeContext from "../../assets/contexts/themeContext";
import img from '../../assets/images/sona-prop.jpg';

import './NavBar.css'

const NavBar = () =>{

    const themeContext = useContext(ThemeContext);

    const mouseEnterAction = (e) =>{
        e.target.innerHTML = e.target.id.slice(0,e.target.id.indexOf('-'))+' &and;';
    };
    
    const mouseLeaveAction = (e) =>{


        e.target.innerHTML = e.target.id.slice(0,e.target.id.indexOf('-'))+' &or;';
    };

        return(
            <>
                <header className="navbar-header">
                    <ul className="header-ul">
                        
                        <li className="header-li">
                            <img src={img} alt="sona-prop-logo"></img>
                        </li>
                        <li id="Comprar-li" className="header-li" onMouseEnter={mouseEnterAction} onMouseLeave={mouseLeaveAction}>
                            Comprar &or;
                        </li>
                        <li id="Alquilar-li" className="header-li" onMouseEnter={mouseEnterAction} onMouseLeave={mouseLeaveAction}>
                            Alquilar &or;
                        </li>
                        <li id="Temporal-li" className="header-li" onMouseEnter={mouseEnterAction} onMouseLeave={mouseLeaveAction}>
                            Temporal &or;
                        </li>
                        <li id="Emprendimientos-li" className="header-li">
                            Emprendimientos
                        </li>
                        <li id="Servicios-li" className="header-li" onMouseEnter={mouseEnterAction} onMouseLeave={mouseLeaveAction}>
                            Servicios &or;
                        </li>
                    </ul>
                </header>
            </>
        );
};

export default NavBar;