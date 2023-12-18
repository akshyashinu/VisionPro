import React from 'react';


const IconWrapper = ({time,text,icon}) => {
    return (
        <div style={{
            animationDelay: `${time}s`,
        }}>
            {icon}
            <p>{text}</p>
        </div>
    );
};
export default IconWrapper;