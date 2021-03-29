import React from 'react';
import {
  CarouselProvider,
  DotGroup,
  Slide,
  Slider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import useWindowSize from '../helper/useWindowSize';

import SlideItem from './SlideItem';

import { SectionSlider } from './StyledComponents/SliderStyle';

function SliderSection() {

    const slideHeight = useWindowSize();

    return (
    <SectionSlider>
        <CarouselProvider
            visibleSlides={1}
            totalSlides={3}
            step={1}
            naturalSlideWidth={900}
            naturalSlideHeight={slideHeight}
        >
            <Slider>
                <Slide index={0}>
                    <SlideItem
                    slideTitle={'Inspire your inspiration'}
                    slideSubtitle={'Simple to use for your app, products showcase and your inspiration'}
                    slideText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit'}
                    slideImg={'../assets/img/tablet.png'}/>
                </Slide>
                <Slide index={1}>
                    <SlideItem
                    slideTitle={'Inspire your inspiration'}
                    slideSubtitle={'Simple to use for your app, products showcase and your inspiration'}
                    slideText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit'}
                    slideImg={'../assets/img/tablet.png'}
                    />
                </Slide>
                <Slide index={2}>
                    <SlideItem
                    slideTitle={'Inspire your inspiration'}
                    slideSubtitle={'Simple to use for your app, products showcase and your inspiration'}
                    slideText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit'}
                    slideImg={'../assets/img/tablet.png'}
                    />
                </Slide>
            </Slider>

            <DotGroup className="dots"/>

        </CarouselProvider>
    </SectionSlider>
    )
}

export default SliderSection;

