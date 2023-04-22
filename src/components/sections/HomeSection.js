import styles from './Home.module.css'
import selfnic from '../../img/selfienic.jpg'
import LinkButton from '../layout/LinkButton';
import Projects from './ProjectsSection';
import Abilities from './AbilitiesSection';

function Home(){
    return (
        <section>
            <div className={styles.home}>
                <ul className={styles.list}>
                    <li><h1>Nicollas <span>Grilo</span></h1></li>
                    <li><LinkButton to="/sobremim" text="Sobre mim"/></li>
                </ul>
                <img src={selfnic} alt='Nicollas' />
            </div>
            <Projects />
            <Abilities />
        </section>
    )
}
export default Home;