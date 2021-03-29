import { useState } from 'react';

import {Header, LogoContainer, Navegacao, NavegacaoLista, MenuHamburger} from './StyledComponents/PageHeaderStyle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function PageHeader() {

    const [activeMenu, setActiveMenu] = useState(false);
    let MenuStatus = 'menu-close';

    function OpenMenu(){
        setActiveMenu(true);
    }

    function CloseMenu(){
        setActiveMenu(false);
    }

    if(activeMenu){
        MenuStatus = 'menu-open';
    } else {
        MenuStatus = 'menu-close';
    }

    return (
        <Header>
            <a href="#">
                <LogoContainer>
                        <img src="../assets/img/logo.png" alt="Logo tinyone"/>
                        <h1>tinyone</h1>
                </LogoContainer>
            </a>
            <Navegacao className={MenuStatus}>
                <NavegacaoLista>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#support">Support</a></li>
                    <li><a href="htpps://blog.tinyone.com.br" target="blank">Blog</a></li>
                </NavegacaoLista>
                <i>
                    <FontAwesomeIcon icon={faTimes} onClick={CloseMenu}/>
                </i>
            </Navegacao>
            <MenuHamburger onClick={OpenMenu}>
                <i>
                    <FontAwesomeIcon icon={faBars}/>
                </i>
            </MenuHamburger>

        </Header>
    )
}

export default PageHeader;

