import styled from 'styled-components';

import { black } from './variable';

export const Footer = styled.footer`
background: ${black};
display: grid;
text-align: center;
padding-bottom: 3rem;
@media(min-width: 530px){
    grid-template-columns: 35% 65%;
    text-align: left;
    align-items: start;

}
@media(min-width: 992px){
    grid-template-columns: 20% 80%;
}
@media(min-width: 1024px){
    grid-template-columns: 20% 80%;
}
`;

export const ContactBlock = styled.div`
p, a{
    font-size: .8rem;
    color: #fff;
    display: block;
    margin-top: 0;
    margin-bottom: 1rem;
    @media(min-width: 992px){
        font-size: .65rem;
        margin-bottom: .2rem;
    }
}
`;

export const LinksBlock = styled.div`
ul{
    padding: 0;
    margin: 0;
    li{
        font-size: .8rem;
        color: #fff;
        list-style: none;
        margin-top: 0;
        margin-bottom: 1rem;
        @media(min-width: 992px){
            font-size: .65rem;
            margin-bottom: .2rem;
        }
    }
    @media(min-width: 530px){
        column-count: 2;
    }
    @media(min-width: 768px){
        column-count: 3;
    }
    @media(min-width: 1024px){
        column-count: 4;
    }
}
`;