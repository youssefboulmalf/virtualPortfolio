import React, {useState} from 'react';
import css from './SkillsSection.module.css';
import { skills } from '../../SkillsData/SkillsData';
import Skill from '../Skill/Skill';
import { AiFillCaretDown } from 'react-icons/ai'

const SkillsSection = (props) => {

    const [languageOpen, setLanguageOpen] = useState(false);
    const [libraryOpen, setLibraryOpen] = useState(false);
    const [otherOpen, setOtherOpen] = useState(false);

    const languageStyle = languageOpen ? css.skillsContainerOpen : css.skillsContainerClosed
    const libraryStyle = libraryOpen ? css.skillsContainerOpen : css.skillsContainerClosed
    const otherStyle = otherOpen ? css.skillsContainerOpen : css.skillsContainerClosed

    return (
        <div className={css.skillsSection}>
            <div className={css.skillsTitleText}>
                <p>Skills</p>
            </div>
            <div className={css.skills}>
                <button onClick={()=> setLanguageOpen(!languageOpen)} className={css.skillsTitle}><p>language</p><AiFillCaretDown /></button>
                <div className={languageStyle}>
                    {skills.filter(f => f.skillType == "language").map((child,index) =>
                        <div key={`${child.skillName + index}`} className={css.skill}>
                            <Skill
                                skillName={child.skillName}
                                skillLevel={child.skillLevel}
                            />
                        </div>
                    )}
                </div>
                <button onClick={()=> setLibraryOpen(!libraryOpen)} className={css.skillsTitle}><p>Libraries</p><AiFillCaretDown /></button>
                <div className={libraryStyle}>
                    {skills.filter(f => f.skillType == "library").map((child,index) =>
                        <div key={`${child.skillName + index}`} className={css.skill}>
                            <Skill
                                skillName={child.skillName}
                                skillLevel={child.skillLevel}
                            />
                        </div>
                    )}
                </div>
                <button onClick={()=> setOtherOpen(!otherOpen)} className={css.skillsTitle}><p>Other</p><AiFillCaretDown /></button>
                <div className={otherStyle}>
                    {skills.filter(f => f.skillType == "other").map((child,index) =>
                        <div key={`${child.skillName + index}`} className={css.skill}>
                            <Skill
                                skillName={child.skillName}
                                skillLevel={child.skillLevel}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default SkillsSection