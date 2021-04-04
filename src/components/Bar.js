import React from 'react'

const Bar = ({value:{icon,iconSize,name/*level*/}}) => {
    // const bar_width=`${level}%`;

    return (
        <div className="bar">
            {/* <div className="bar__wrapper" style={{
                width:bar_width
            }}> */}
            <div className="bar__wrapper">
                <span className="bar__name">
                    {/* <img src={icon} alt="icon" className="bar__icon mr-2" /> */}
                    <span className="mr-2">
                        {React.createElement(icon,{
                            size:iconSize
                        })}
                    </span>
                    {name}
                </span>
            </div>
        </div>
    )
}

export default Bar
