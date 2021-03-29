import { Footer, ContactBlock, LinksBlock  } from './StyledComponents/PageFooterStyle';

function PageFooter() {


    return (
       
        <Footer>
            <ContactBlock>
                <p>
                    HALOVIETNAM LTD<br/>
                    66, Dang Van ngu, Dong Da<br/>
                    Hanoi, Vietnam
                </p>
                <a href="mailto:contact@halovietnam.com">contact@halovietnam.com</a>
                <a href="84435149182">+844 35149182</a>
            </ContactBlock>
            <LinksBlock>
                <ul>
                    <li>Examples</li>
                    <li>Shop</li>
                    <li>License</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Privacy Terms</li>
                    <li>Download</li>
                    <li>Support</li>
                    <li>Documents</li>
                    <li>Media</li>
                    <li>Blog</li>
                    <li>Forums</li>
                </ul>
            </LinksBlock>
        </Footer>
       
    )
}

export default PageFooter;

