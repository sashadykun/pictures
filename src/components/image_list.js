import './image_list.css';
import React from 'react';
import ImageCard from './image_card';

const ImageList = (props) => {
    const images = props.images.map( (image) => {
        return <ImageCard key={image.id}  image={image}/>
    })
    return <div className="image-list">{images}</div>
}

export default ImageList;