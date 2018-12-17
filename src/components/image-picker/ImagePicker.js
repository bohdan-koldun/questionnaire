import React, { Component } from 'react';
import './ImagePicker.scss';

class ImagePicker extends Component {
    render() {
        const { imageSrcList } = this.props;
        return (
            <div className='image-picker'>
           {
               imageSrcList.map( image => {
                   const src = require(image.src);
                   return <img src={src} alt={image.kindOfPet} />
               }
               )
           }
            </div>
        );
    }
}

export default ImagePicker;