import styled from 'styled-components'

import { yellow, black, h2Size, h2Weight,  textSize, textWeight } from './variable';

export const SectionContact = styled.section`
    background: ${black};
    text-align: center;
    padding-top: 3rem;
    padding-bottom: 3rem;
    @media(min-width: 768px){
        padding-left: 15%;
        padding-right: 15%;
    }
`;
export const ContactTitle = styled.h2`
    font-size: ${h2Size};
    font-weight: ${h2Weight};
    color: ${yellow};
`;

export const ContactSubtitle = styled.p`
    font-size: ${textSize};
    font-weight: ${textWeight};
    color: #898989;
`;

export const ContactForm = styled.form`
    display: grid;
    margin-top: 2rem;
    grid-row-gap: 1rem;
    input{
        border: none;
        border-radius: 5px;
        padding: .5rem 1rem;
    }
    button{
        background: ${yellow};
        border: none;
        border-radius: 2px;
        padding: .5rem 1rem;
        font-size: .7rem;
        text-transform: uppercase;
        font-weight: bold;
        justify-self: center;
    }
    @media(min-width: 768px){
        grid-template-columns: 80% 20%;
        button{
            margin-left: 1rem;
            justify-self: unset;
        }

    }
`;

export const ContactIconBlock = styled.div`
    margin-top: 3rem;
    i svg{
        color: ${yellow};
        width: 2.5rem;
        height:2rem;
    }
`;