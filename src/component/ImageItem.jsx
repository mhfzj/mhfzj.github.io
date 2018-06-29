import React from 'react';
// import EXIF from 'exif-js';
// import {Cropper} from 'react-image-cropper';
import './ImageItem.less';
// import ExifOrientationImg from 'react-exif-orientation-img';
export default class ImageItem extends React.Component{
  componentDidMount(){
    console.log(this.image, this.image.clientWidth);
  }
  afterRender = image => {
    // console.log(image);
    this.image = image;
  //   EXIF.getData(image, (data) => {
  //     // var make = EXIF.getTag(this, "Make");
  //     // var model = EXIF.getTag(this, "Model");
  //     // var makeAndModel = document.getElementById("makeAndModel");
  //     // makeAndModel.innerHTML = `${make} ${model}`;
  //     console.log(data);
  // });
    // console.log(image, image.width, image.target);
    // console.log(image.offsetWidth);
  }
  render(){
    // console.log(this.props);
    // return <Cropper ref={this.afterRender} allowNewSelection={false} src={"/image_data/" + this.props.url} alt="url wrong!" />;
    return <img class="image" ref={this.afterRender} src={"/image_data/" + this.props.url} alt="url wrong!" />
  }
}