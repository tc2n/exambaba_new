import React from 'react';

const ImageView = (props) => {
    return <div className="imageview"><img src={props.match.params.url} alt="url" className="imageview_image"/></div>
}

export default ImageView;