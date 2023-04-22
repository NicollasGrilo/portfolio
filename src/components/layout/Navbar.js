import { Gi3DGlasses } from 'react-icons/gi'
import styles from './Navbar.module.css'
import Container from "./Container"

function Navbar() {
    return (
            <nav className={styles.navbar}>
                <Container>
                    <ul className={styles.list}>
                        <li>
                            <Gi3DGlasses />
                        </li>
                        <li className={styles.item}>
                            <p>Portfólio Dev</p>
                        </li>
                    </ul>
                </Container>
            </nav>
    )
}
export default Navbar