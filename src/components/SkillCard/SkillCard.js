import { Paper } from '@mui/material'
import React from 'react'

const SkillCard = (props) => {
    return (
        <Paper elevation={22} sx={{
            width: 'fit-content',
            padding: '4px 15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        }}>
            {
                props.icon && (
                    <span style={{ marginRight: '5px' }}>{props.icon}</span>
                )
            }
            {props.skillName}
        </Paper>
        // <div className="col-lg-6">
        //     <div className="skill-card">
        //         {/* <img src={icon} alt="icon" className="skill-card__icon" /> */}
        //         <span style={{ color: "#2193b0" }}>
        // {React.createElement(icon, {
        //     size: iconSize
        // })}
        //         </span>
        //         <div className="skill-card-body">
        //             <h6 className="skill-card__title">{title}</h6>
        //             <p className="skill-card__content">{about}</p>
        //         </div>
        //     </div>
        // </div>
    )
}

export default SkillCard
