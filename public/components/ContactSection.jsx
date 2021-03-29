import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faGooglePlusSquare, faPinterestSquare } from '@fortawesome/free-brands-svg-icons';

import { SectionContact, ContactTitle, ContactSubtitle, ContactForm, ContactIconBlock } from './StyledComponents/ContactSectionStyle';

function ContactSection() {

    return (
        <SectionContact id="support">
            <ContactTitle>Keep in touch with us</ContactTitle>
            <ContactSubtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.</ContactSubtitle>

            <ContactForm>
                <input type="email" name="email" placeholder="Enter your email to update"/>
                <button type="submit">Submit</button>
            </ContactForm>

            <ContactIconBlock>
                <i>
                    <FontAwesomeIcon icon={faFacebookSquare}/> 
                </i>
                <i>
                    <FontAwesomeIcon icon={faTwitterSquare}/> 
                </i>
                <i>
                    <FontAwesomeIcon icon={faGooglePlusSquare}/> 
                </i>
                <i>
                    <FontAwesomeIcon icon={faPinterestSquare}/> 
                </i>
            </ContactIconBlock>

        
        </SectionContact>
       
    )
}

export default ContactSection;

