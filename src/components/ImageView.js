import React from 'react';

const ImageView = (props) => {
    const str=`/exambaba/images/${props.match.params.url}`;
    return <div className="imageview"><img src={str} alt="url" className="imageview_image"/></div>
}

export default ImageView;