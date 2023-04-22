import styles from './Sobremim.module.css'
import { Link } from 'react-router-dom'

function Sobremim() {
    return (
    <div className={styles.sb}>
    <h1>Sobre Mim</h1>
    <Link to="/">Voltar</Link>
    </div>
    )
}
export default Sobremim;