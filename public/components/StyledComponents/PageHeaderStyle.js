import styled from 'styled-components'

import { yellow, black } from './variable';

export const Header = styled.header`
    background: ${yellow};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const LogoContainer = styled.div`
    padding: 1rem 0;
    display: inline-flex;
    cursor: pointer;
    img{
        max-width: 100%;
        object-fit: contain;
        margin-right: 10px;

    }
    h1{
        font-size: 1.8rem;
        font-weight: bold;
    }
`; 

export const Navegacao = styled.nav`
    position: absolute;
    background: ${yellow};
    top: 0;
    bottom: 0;
    right: 0;
    padding: 2rem;
    z-index: 99;
    transform: translateY(-100%);
    transition: transform 0.4s ease;
    &.menu-open{
        transform: translateX(0);
        display: block;
    }
    i{
        width: 1rem;
        height: 1rem;
        position: absolute;
        top: 1rem;
        left: 1rem;
        color: ${black};
        @media(min-width: 768px){
            display: none;
        }
    }
    @media (min-width: 768px){
        position: relative;
        transform: none;
        padding: 1rem 0;
    }
`;

export const NavegacaoLista = styled.ul`
    li{
        color: ${black};
        font-size: 1.75rem;
        font-weight: bold;
        list-style: none;
        display: block;
        margin: 1.5rem 0;
        border-bottom: 2px solid transparent;
        transition: 0.2s ease;
        cursor: pointer;
        &:hover{
            border-color: ${black};
        }
        @media (min-width: 768px){
            font-size: 1rem;
            display: inline;
            margin: 1rem;
        }
    }
`;


export const MenuHamburger = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    i svg{
        width: 2rem;
        height: 2rem;
    }
    @media (min-width: 768px){
        display: none;
    }    
`;