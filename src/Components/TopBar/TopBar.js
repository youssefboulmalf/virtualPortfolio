import react, {useState, useEffect} from 'react'
import css from './TopBar.module.css'
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import Scroll, { Link } from 'react-scroll'
import { HiMenu } from 'react-icons/hi'
import { AiOutlineCloseCircle } from 'react-icons/ai'


function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }, []);
      return windowSize;
    }


const TopBar = (props) => {

    const windowSize = useWindowSize();
    const [menuOpen, setMenuOpen] = useState(false);

    const sideMenu = menuOpen ? css.sideMenuOpen : css.sideMenuClosed;


    const desktopNav = (
        <div className={css.topBar}>
            <nav className={css.navButtons}>
                <Link
                    className={css.navButton}
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}>Projects</Link>
                <Link
                    className={css.navButton}
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}>About</Link>
                <Link
                    className={css.navButton}
                    to="skills"
                    spy={true}
                    smooth={true}
                    duration={500}>Skills</Link>
            </nav>
            <div className={css.socialButtons}>
                <a className={css.socialButton} href='https://github.com/youssefboulmalf'><BsGithub /></a>
                <a className={css.socialButton} href='https://www.linkedin.com/in/youssef-boulmalf-42372b193/'><BsLinkedin /></a>
                <a className={css.socialButton} href='https://www.instagram.com/youssefboulmalf/'><BsInstagram /></a>
            </div>
        </div>
    );

    const mobileNavBar = (
        <div className={css.mobileNav}>
            <button className={css.menuButton} onClick={()=> setMenuOpen(!menuOpen)}><HiMenu/></button>
            <div className={sideMenu}>
            <button className={css.closeButton} onClick={()=> setMenuOpen(false)}><AiOutlineCloseCircle/></button>
            <nav className={css.mobileNav}>
                <Link
                    className={css.navButtonMobile}
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}>Projects</Link>
                <Link
                    className={css.navButtonMobile}
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}>About</Link>
                <Link
                    className={css.navButtonMobile}
                    to="skills"
                    spy={true}
                    smooth={true}
                    duration={500}>Skills</Link>
            </nav>
            <div className={css.socialButtonsMobile}>
                <a className={css.socialButtonMobile} href='https://github.com/youssefboulmalf'><BsGithub /></a>
                <a className={css.socialButtonMobile} href='https://www.linkedin.com/in/youssef-boulmalf-42372b193/'><BsLinkedin /></a>
                <a className={css.socialButtonMobile} href='https://www.instagram.com/youssefboulmalf/'><BsInstagram /></a>
            </div>
            </div>
        </div>
    )

    const navigation = windowSize.width < 800 ? mobileNavBar : desktopNav;

    return (
        <div>
        {navigation}
        </div>
    )
}
export default TopBar
