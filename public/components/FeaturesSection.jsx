import { SectionFeatured, TitleBlock, FeaturedTitle, FeaturedSubtitle, CardsBlock } from './StyledComponents/FeaturesStyle';

import FeatureItem from './FeatureItem';


function FeaturesSection() {

    const featuredItems = [
        {
            title: 'Fully Responsive',
            icon: 'faTabletAlt',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
        },
        {
            title: 'Fully Layered PSD',
            icon: 'faLemon',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
        },
        {
            title: 'Font Awesome Icons',
            icon: 'faFolder',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
        },
        {
            title: 'HTML3 & CSS3',
            icon: 'faCode',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
        },
        {
            title: 'Email Template',
            icon: 'faEnvelope',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
        },
        {
            title: 'Free to download',
            icon: 'faBookmark',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
        },
    ];

    return (
        <SectionFeatured id="features">
            <TitleBlock>
                <FeaturedTitle>Tinyone features</FeaturedTitle>
                <FeaturedSubtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.</FeaturedSubtitle>
            </TitleBlock>
            <CardsBlock>
                {featuredItems.map((item, index) => (

                <FeatureItem
                    key={index}
                    title={item.title}
                    icon={item.icon}
                    text={item.text}
                />
                ))}

            </CardsBlock>
        </SectionFeatured>
    )
}

export default FeaturesSection;

