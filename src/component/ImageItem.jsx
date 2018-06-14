import React from 'react';

export default class ImageItem extends React.Component{
  afterRender = image => {
    // console.log(image);
  }
  render(){
    // console.log(this.props);
    return <img ref={this.afterRender} src={"/image_data/" + this.props.url} alt="url wrong!" />;
  }
}