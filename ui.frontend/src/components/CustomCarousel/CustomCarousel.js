import React, { Component } from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
require ('./CustomCarousel.css');

const CustomCarouselConfig = {
    emptyLabel: 'Custom Carousel',

    isEmpty: function(props) {
        return !props || !props.title || props.assets.length === 0;
    }
};

export default class CustomCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
          currentIndex: 0,
        };
    }

    handleNext = () => {
        const { assets } = this.props;
        const numAssets = assets.filter(asset => asset.display === "true").length;
        const { currentIndex } = this.state;
        if (currentIndex < numAssets - 3) {
          this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
          }));
        }
    };

    handlePrev = () => {
        const { currentIndex } = this.state;
        if (currentIndex > 0) {
          this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
          }));
        }
    };

    get title() {
        return <h3 class="cmp-title__text">{this.props.title}</h3>
    }

    get assets() {
        const { assets } = this.props;
        const { currentIndex } = this.state;
        const assetsToDisplay = assets.filter(asset => asset.display === "true");
        const visibleAssets = assetsToDisplay.slice(currentIndex, currentIndex + 3);
        const numAssets = assetsToDisplay.length;
        const showCarousel = numAssets > 3;
        let justifyContent;
        let spaceBetweenAssets;

        switch (numAssets) {
            case 1:
                justifyContent = 'center';
                spaceBetweenAssets = '5px';
                break;
            case 2:
                justifyContent = 'center';
                spaceBetweenAssets = '10px';
                break;
            default:
                justifyContent = 'space-between';
                spaceBetweenAssets = '5px';
                break;
        }

        return (
            <div class="assets">
                {showCarousel && (
                    <div class="carousel-controls-prev">
                        <button onClick={this.handlePrev}></button>
                    </div>
                )}
                    <div class="cmp-assets__" style={{ '--justify-content': justifyContent }}>
                        {visibleAssets.map((asset, index) => (
                            <div class="cmp-assets__data" style={{ '--space-assets': spaceBetweenAssets }} key={index}>
                                <div>
                                    <a href={asset.linkURL} target="_blank">
                                        <img class="cmp-assets__data--img"
                                        src={asset.fileReference}
                                        alt={asset.alt} />
                                    </a>
                                </div>
                                <div>
                                    <p class="cmp-assets__data--desc">{asset.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                {showCarousel && (
                    <div class="carousel-controls-next">
                        <button onClick={this.handleNext}></button>
                    </div>
                )}
            </div>
        )
    }

    render() {

        if(CustomCarouselConfig.isEmpty(this.props)) {
            return null;
        }

        return (
            <div>
                <div class="cmp-title">{this.title}</div>
                <div class="cmp-assets">{this.assets}</div>
            </div>
        )
    }
};

MapTo('aem-training/components/custom-carousel')(CustomCarousel, CustomCarouselConfig);