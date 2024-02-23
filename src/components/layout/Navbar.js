import styles from './Navbar.module.css'
import { HashLink } from 'react-router-hash-link'
import { useState , useRef } from 'react'
import { Divide as Hamburger } from 'hamburger-react'

function Navbar() {
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
    };

    const [isOpen, setIsOpen] = useState(false);

    return (
            <nav className={styles.navbar}>
                <div className={styles.list_logo}>
                    <a className={styles.item}>Portfólio Dev</a>
                    <div className={styles.navBurguer} onClick={handleToggle}><Hamburger color='#ffff' toggled={isOpen} size='40' rounded toggle={setIsOpen} /></div>
                    <div className={isActive ? styles.list : styles.active}>
                        <div>
                            <span className={styles.item}><HashLink to="#home">Home</HashLink></span>
                        </div>
                        <div>
                            <span className={styles.item}><HashLink to="#projects">Projects</HashLink></span>
                        </div>
                        <div>
                            <span className={styles.item}><HashLink to="#contact">Contact</HashLink></span>
                        </div>
                        <div>
                            <span className={styles.item}><HashLink to="#footer">Social Media</HashLink></span>
                        </div>                 
                    </div>
                </div>
            </nav>
    )
}
export default Navbar