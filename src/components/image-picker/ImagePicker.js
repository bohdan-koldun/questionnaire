import React, { Component } from 'react';
import './ImagePicker.scss';

class ImagePicker extends Component {
    render() {
        const { imageSrcList, selectedImage, onClick } = this.props;
        return (
            <div className='image-picker'>
            {
               imageSrcList.map( (image, index) => {
                   const { imageSrc, kindOfPet} = image;
                   return <img
                     src={imageSrc} 
                     alt={kindOfPet} 
                     key={imageSrc}
                     className={imageSrc === selectedImage ? 'active' : ''}
                     onClick={() => onClick(imageSrc, kindOfPet)}
                   />
               })
            }
            </div>
        );
    }
}

export default ImagePicker;