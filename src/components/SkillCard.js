import React from 'react'

const SkillCard = ({skill:{icon,iconSize,title,about}}) => {
    return (
        <div className="col-lg-6">
            <div className="skill-card">
                {/* <img src={icon} alt="icon" className="skill-card__icon" /> */}
                <span style={{color:"#2193b0"}}>
                    {React.createElement(icon,{
                        size:iconSize
                    })}
                </span>
                <div className="skill-card-body">
                    <h6 className="skill-card__title">{title}</h6>
                    <p className="skill-card__content">{about}</p>
                </div>
            </div>
        </div>
    )
}

export default SkillCard
