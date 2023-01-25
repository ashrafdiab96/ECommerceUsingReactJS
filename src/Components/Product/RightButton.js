import React from 'react'
import prev from '../../assets/images/prev.png';

const RightButton = (onClick, onDisable) => {
    return (
        <img
            src={prev}
            alt='Right arrow'
            width='35px'
            height='35px'
            onClick={onClick}
            // onDisable={onDisable}
            style={{ float: 'right', marginTop: '220px', cursor: 'pointer' }}
        />
    );
}

export default RightButton;
