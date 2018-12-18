import React, { Component } from 'react';
import ImagePicker from 'components/image-picker/ImagePicker';
import './Forms.scss';

const imageList = [
  { imageSrc: require('assets/pictures/cat1.jpg'), kindOfPet: 'котик' },
  { imageSrc: require('assets/pictures/dog1.jpg'), kindOfPet: 'собачка' },
  { imageSrc: require('assets/pictures/cat2.jpg'), kindOfPet: 'котик' },
  { imageSrc: require('assets/pictures/hamster1.jpg'), kindOfPet: 'хомячок' },
  { imageSrc: require('assets/pictures/cat3.jpg'), kindOfPet: 'котик' },
  { imageSrc: require('assets/pictures/cat4.jpg'), kindOfPet: 'котик' },
  { imageSrc: require('assets/pictures/raccoon1.jpg'), kindOfPet: 'енот' },
  { imageSrc: require('assets/pictures/dog2.jpg'), kindOfPet: 'собачка' },
]

class CatForm extends Component {
    constructor(props) {
        super(props);
        const { catImage } = this.props;
        this.state = { selectedImage: catImage };
    }

    handleImageClick = (imageSrc, kindOfPet) => {
        this.setState({
            selectedImage: imageSrc,
            kindOfPet
        });

        const { action, addIsValidatedForm } = this.props;

        if(kindOfPet === 'котик') {
            action(imageSrc);
            addIsValidatedForm({4: true});
            this.setState({ isCat: true});
        } else {
            this.setState({ isCat: false});
            addIsValidatedForm({4: false});
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
                    isCat === false && selectedImage !== '' &&
                    <p className='error cat-form-error'>Это {kindOfPet}! А нужен котик! Выберите котика.</p>
                }
            </form>
        );
    }
}


export default CatForm;