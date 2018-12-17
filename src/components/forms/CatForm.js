import React, { Component } from 'react';
import ImagePicker from 'components/image-picker/ImagePicker';
import './Forms.scss';

const imageList = [
  { imageSrc: require('assets/pictures/cat1.jpg'), kindOfPet: 'котик' },
  { imageSrc: require('assets/pictures/cat2.jpg'), kindOfPet: 'котик' },
  { imageSrc: require('assets/pictures/cat3.jpg'), kindOfPet: 'котик' },
  { imageSrc: require('assets/pictures/dog4.jpg'), kindOfPet: 'собачка' }
]

class CatForm extends Component {
    state={ selectedImage: '' }

    handleImageClick = (imageSrc, kindOfPet) => {
        this.setState({
            selectedImage: imageSrc,
            kindOfPet
        });

        if(kindOfPet === 'котик') {
            this.props.action(imageSrc);
            this.setState({ isCat: true});
        } else {
            this.setState({ isCat: false});
        }
    }

    render() {
        const { selectedImage, isCat, kindOfPet } = this.state;

        return (
            <form>
                <h2>4. Выберите любимого котика</h2>
                <ImagePicker 
                    imageSrcList={imageList}
                    selectedImage={selectedImage} 
                    onClick={this.handleImageClick}
                />
                {
                    !isCat && selectedImage !== '' &&
                    <span className='error'>Это {kindOfPet}! А нужен котик! Выберите котика.</span>
                }
            </form>
        );
    }
}


export default CatForm;