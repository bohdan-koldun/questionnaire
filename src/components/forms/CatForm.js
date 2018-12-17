import React, { Component } from 'react';
import ImagePicker from '../image-picker/ImagePicker';
import './Forms.scss';
import sss from '../../assets/pictures/cat1.jpg'

const imageList = [
  //{ src: '../../assets/pictures/cat1.jpg', kindOfPet: 'Котик' }
]

class CatForm extends Component {
    render() {
        return (
            <form>
                <h2>4. Выберите любимого котика</h2>
                <ImagePicker imageSrcList={imageList} />
            </form>
        );
    }
}


export default CatForm;