import React, { Component } from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
require ('./CustomCarousel.css');

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
        let assetWidth;

        switch (numAssets) {
            case 1: assetWidth = 'calc(100% - 10px)'; break;
            case 2: assetWidth = 'calc(50% - 10px)'; break;
            default: assetWidth = 'calc(33.33% - 10px)'; break;
        }

        return (
            <div>
                <div class="cmp-assets__">
                    {visibleAssets.map((asset, index) => (
                        <div class="cmp-assets__data" style={{ '--asset-width': assetWidth }} key={index}>
                            <div>
                                <a href={asset.linkURL} target="_blank">
                                    <img class="cmp-assets__data--img" src={asset.fileReference} alt={asset.alt} />
                                </a>
                            </div>
                            <div>
                                <p class="cmp-assets__data--desc">{asset.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {showCarousel && (
                    <div class="carousel-controls">
                        <button onClick={this.handlePrev}></button>
                        <button onClick={this.handleNext}></button>
                    </div>
                )}
            </div>
        )
    }

    render() {
        return (
            <div>
                <div class="cmp-title">{this.title}</div>
                <div class="cmp-assets">{this.assets}</div>
            </div>
        )
    }
};

MapTo('aem-training/components/custom-carousel')(CustomCarousel);