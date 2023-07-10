import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton';
import Projects from './ProjectsSection';
import Abilities from './AbilitiesSection';

function Home(){
    function button(){
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth'
          });
    };

    return (
        <section>
            <div className={styles.home}>
                <ul className={styles.list}>
                    <li className={styles.l_1}>
                        <p className={styles.p}>Olá, eu sou o <span className={styles.name}>Nicollas</span>
                        <span className={styles.func}>Front-end</span><span className={styles.func_2}>Developer</span></p>
                    </li>
                    <li><p className={styles.p_2}>Tenho 18 anos e estou na área da programação há 3 anos<br/>Atualmente cursando Sistemas de informação e 
                    atuando <br/> em um projeto de desenvolvimento de sites usando Reactjs e Typescript. </p></li>
                    <li><button className={styles.btn} onClick={button}>Saiba mais</button></li>
                </ul>
            </div>
            <Projects />
            <Abilities />
        </section>
    )
}
export default Home;