import styled from 'styled-components'

import { h2Size, h2Weight, h3Size, h3Weight, textSize, textWeight } from './variable';

export const SectionFeatured = styled.section`
padding-top: 3rem;
padding-bottom: 5rem;
`;

export const TitleBlock = styled.div`
text-align: center;
margin-bottom: 3rem;
@media(min-width: 768px){
    width: 70%;
    margin-left: auto;
    margin-right: auto;
}
`;

export const FeaturedTitle = styled.h2`
    font-size: ${h2Size};
    font-weight: ${h2Weight};
`;

export const FeaturedSubtitle = styled.h3`
font-size: ${h3Size};
font-weight: ${h3Weight};
`;

export const CardsBlock = styled.div`
display: grid;
grid-row-gap: 2rem;
@media(min-width: 530px){
    grid-template-columns: 49% 49%;
    grid-column-gap: 2%;
    grid-row-gap: 4rem;
}
@media(min-width: 992px){
    grid-template-columns: 32.6% 32.6% 32.6%;
}
`;

export const FeatureCard = styled.div`
display: grid;
max-width: 350px;
justify-self: center;
text-align: center;
@media(min-width: 530px){
    grid-template-columns: auto auto;
    grid-column-gap: 1rem;
    text-align: left;
}
`;

export const CardIconBlock = styled.div`
i svg{
    width: 1.5rem;
}    
`;

export const CardTextBlock = styled.div`
h4{
    font-size: 1rem;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
}
p{
    font-size: ${textSize};
    font-weight: ${textWeight};
    margin-top: 0.5rem;
    margin-bottom: 0;
}
`;