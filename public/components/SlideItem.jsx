import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faAndroid, faWindows } from '@fortawesome/free-brands-svg-icons'

import { SlideContainer, TextBlock, ImgBlock, LogosList} from './StyledComponents/SliderStyle';

function SlideItem({slideTitle, slideSubtitle, slideText, slideImg}) {

    return (
        <SlideContainer>
            <TextBlock>
                <h2>{slideTitle}</h2>
                <h3>{slideSubtitle}</h3>
                <p>{slideText}</p>

                <LogosList>
                    <i><FontAwesomeIcon icon={faApple}/></i>
                    <i><FontAwesomeIcon icon={faAndroid}/></i>
                    <i><FontAwesomeIcon icon={faWindows}/></i>
                </LogosList>
                
            </TextBlock>

            <ImgBlock>
                <img src={slideImg} alt="imagem de um tablet com o logo da tinyone na tela"/>
            </ImgBlock>

        </SlideContainer>
    
    )
}

export default SlideItem;

