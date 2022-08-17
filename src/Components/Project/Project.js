import css from './Projects.module.css'
import Image from 'next/image';

const breaklineDescription= (description)=> {
    const newDescription = description.split('\n').map((str, index) => <p key={index}>{str}</p>);
    return newDescription;
  }

const Project = (props) => {
    const { projectImage, projectDescription, projectLink, projectName, projectLanguages } = props;
    const link = projectLink ? projectLink : null;
    const name = projectName ? projectName.toUpperCase() : null
    const languages = projectLanguages ? projectLanguages : null
    const description = projectDescription ? breaklineDescription(projectDescription) : "No description avalible"
    const image = projectImage ? require(`../../img/${projectImage}`) : null;

    function breaklineDescription(description) {
        const newText = description.split('\n').map((str,index) => <p key={index}>{str}</p>);
        return newText;
      }



    return (
        <div className={css.project}>
            <a href={link} className={css.link}>
                <div className={css.projectImage}>
                <Image layout='fixed' alt={"project image"} width={255} height={255} objectFit='contain' placeholder='blur' src={image}/>
                </div>
                <div className={css.projectDescription}>
                    <div className={css.projectTitle}>
                        <p>{name}</p>
                    </div>
                    <div className={css.description}>
                        {description}
                    </div>
                    <div className={css.languages}>
                        {languages.map((language, index) =>
                            <div key={`${language}`+`${index}`} className={css.language}>
                                {language}
                            </div>
                        )}
                    </div>
                </div>
            </a>
        </div >
    )
}
export default Project