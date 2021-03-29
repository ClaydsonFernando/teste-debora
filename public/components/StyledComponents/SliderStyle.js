import styled from 'styled-components'

import { yellow, black, h2Size, h2Weight, h3Size, h3Weight, textSize, textWeight } from './variable';

export const SectionSlider = styled.section`
    background: ${yellow};
    padding-top: 1rem;
    padding-bottom: 1rem;
`;


export const SlideContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    @media(min-width: 992px){
        grid-template-columns: 50% 50%;
        grid-gap: 5%;
    }
`;

export const TextBlock = styled.div`
    align-self: center;
    text-align: center;
    width: 70%;
    margin: auto;
    color: ${black};
    h2{
        font-size: ${h2Size};
        font-weight: ${h2Weight};
    }
    h3{
        font-size: ${h3Size};
        font-weight: ${h3Weight};
    }
    p{
        font-size: ${textSize};
        font-weight: ${textWeight};
    }
    @media(min-width: 992px){
        text-align: left;
        margin: 0;
    }
`;

export const ImgBlock = styled.div`
    align-self: center;
    text-align: center;
    height: 100%;
    overflow: hidden;
    padding-top: 2rem;
    padding-bottom: 2rem;
    img{
        max-height: 100%;
        object-fit: contain;
    }
`;

export const LogosList = styled.div`
    display: inline;
    i svg{
        height: 1.5rem;
        margin: .6rem;
    }
`;