import React, { Component } from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';

export default class CustomCarousel extends Component {

    get title() {
        return <h3>{this.props.title}</h3>
    }

    get assets() {
        return (
            <div>
                {this.props.assets.map((asset, index) => (
                    <div key={index}>
                        <a href={asset.linkURL}>
                            <img src={asset.fileReference} alt={asset.description} />
                        </a>
                        <p>{asset.description}</p>
                    </div>
                ))}
            </div>
        )
    }

    render() {
        return (
            <div>
                <div>{this.title}</div>
                <div>{this.assets}</div>
            </div>
        )
    }
};

MapTo('aem-training/components/custom-carousel')(CustomCarousel);