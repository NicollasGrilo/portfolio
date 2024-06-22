import { MdComputer } from 'react-icons/md'
import { FaFacebook, FaInstagram, FaLinkedin, FaFilePdf } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'



function Footer() {
    return (
        <footer className={styles.footer} id='footer'>
            <ul className={styles.list}>
                <li><MdComputer/></li>
                <li className={styles.item}><p>Portfólio Dev</p></li>
            </ul>
            <ul className={styles.links}>
               <li>
                    <h3 className={styles.h3}>E-mail</h3>
                    <p>nicollas.vianamoura@gmail.com</p>
                </li> 
                <li>
                    <h3 className={styles.h3}>Telefone</h3>
                    <p>(11)98928-3358</p>
                </li>
                <li>
                    <h3 className={styles.h3}>GitHub</h3>
                    <Link to="https://github.com/NicollasGrilo">https://github.com/NicollasGrilo</Link>
                </li>
            </ul>
            <ul className={styles.social_list}>
                <li className={styles.link}><a href='https://facebook.com/NicollasGrilo'><FaFacebook /></a></li>
                <li className={styles.link}><a href='https://instagram.com/ngrilooo'><FaInstagram /></a></li>
                <li className={styles.link}><a href='https://linkedin.com/in/nicollas-viana'><FaLinkedin /></a></li>
                <li className={styles.link}><a href='https://drive.google.com/file/d/1Lteh2SCY1YEL19x5bbmOin9E3dmDvQWf/view?usp=drive_link'><FaFilePdf /></a></li>
            </ul>
        </footer>
    )
}
export default Footer