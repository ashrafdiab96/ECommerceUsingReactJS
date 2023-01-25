import React from 'react'
import next from '../../assets/images/next.png';

const LeftButton = (onClick, onDisable) => {
    return (
        <img
            src={next}
            alt='Left arrow'
            width='35px'
            height='35px'
            onClick={onClick}
            // onDisable={onDisable}
            style={{ float: 'left', marginTop: '220px', cursor: 'pointer' }}
        />
    );
}

export default LeftButton;
