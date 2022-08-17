import React from 'react'
import css from './Skill.module.css'

const Skill = (props) => {
    const { skillName, skillLevel } = props;

    const innerBar = {
        height: `${skillLevel}%`,
    }
    return (
        <div className={css.skill}>
            <div className={css.levels}>
                <div className={css.level}>Expert</div>
                <div className={css.level}>Skilled</div>
                <div className={css.level}>Good</div>
            </div>
            <div className={css.skillBar}>
                <div className={css.bar}>
                    <div className={css.innerBar} style={innerBar}>
                    </div>
                </div>
                <div className={css.skillName}>
                    <p>{skillName}</p>
                </div>
            </div>
        </div>
    )
}
export default Skill