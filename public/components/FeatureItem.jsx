import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLemon, faFolder, faEnvelope, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faCode, faTabletAlt } from '@fortawesome/free-solid-svg-icons';

import { FeatureCard, CardIconBlock, CardTextBlock } from './StyledComponents/FeaturesStyle';


function FeatureItem({title, icon, text}) {

    return (
        <FeatureCard>
            <CardIconBlock>
                <i>
                    {
                        icon === 'faTabletAlt' &&
                            <FontAwesomeIcon icon={faTabletAlt}/>  
                    }
                    {
                        icon === 'faLemon' &&
                            <FontAwesomeIcon icon={faLemon}/>  
                    }
                    {
                        icon === 'faFolder' &&
                            <FontAwesomeIcon icon={faFolder}/>  
                    }
                    {
                        icon === 'faCode' &&
                            <FontAwesomeIcon icon={faCode}/>  
                    }
                    {
                        icon === 'faEnvelope' &&
                            <FontAwesomeIcon icon={faEnvelope}/>  
                    }
                    {
                        icon === 'faBookmark' &&
                            <FontAwesomeIcon icon={faBookmark}/>  
                    }
                </i>
            </CardIconBlock>
            
            <CardTextBlock>
                <h4>{title}</h4>
                <p>{text}</p>
            </CardTextBlock>
        </FeatureCard>
    )
}

export default FeatureItem;

