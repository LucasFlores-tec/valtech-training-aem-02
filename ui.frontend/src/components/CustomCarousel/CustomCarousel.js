import React, { Component } from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
require ('./CustomCarousel.css');

export default class CustomCarousel extends Component {

    get title() {
        return <h3 class="cmp-title__text">{this.props.title}</h3>
    }

    get assets() {
        return (
            <div class="cmp-assets__">
                {this.props.assets.map((asset, index) => (
                    <div class="cmp-assets__data" key={index}>
                        <div>
                            <a href={asset.linkURL}>
                                <img class="cmp-assets__data--img" src={asset.fileReference} alt={asset.description} />
                            </a>
                        </div>
                        <div>
                            <p class="cmp-assets__data--desc">{asset.description}</p>
                        </div>
                    </div>
                ))}
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