import styles from './Home.module.css'
import Projects from './ProjectsSection';
import Contact from './ContactSection';
import { FaGithub } from 'react-icons/fa';
import { useRef } from 'react';
import Container from '../layout/Container';

function Home(){
    function button(){
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth'
          });
    };

    function GitButton(){
        window.location.href = "https://github.com/NicollasGrilo";
    }



    return (
        <section>
            <div className={styles.home} id='home'>
                <div className={styles.selfieProfile}>
                    <div className={styles.balao2}>
                        <p className={styles.balloonText}>Olá, meu nome é <span className={styles.name}>Nicollas!</span></p>
                    </div>
                    <img src={"https://avatars.githubusercontent.com/u/78501477?v=4"}></img>
                </div> 
                <div className={styles.description}>
                    <div>
                        <p className={styles.p_frase}>Desenvolvedor e <span className={styles.p_span1}>apaixonado</span> pela <span className={styles.p_span2}>Programação.</span></p>
                    </div>
                    <div>
                        <p className={styles.selfieText}>Comecei os estudos com programação em 2018 aprendendo HTML, CSS e JavaScript, tudo por interesse próprio e também se inspirando no meu pai, desenvolvedor há bastante 
                        tempo. Desde lá, tive altos e baixos com a programação, porém ao terminar os estudos, em 2021, fui em busca de me desenvolver na área, começando a faculdade, 
                        e desde então me dedicando e aprimorando meus conhecimentos, com o intuito de me tornar um grande desenvolvedor. Tenho experiência em programação web, atuando em 
                        uma startup de desenvolvimento de websites, landing pages, e-commerce apenas por 5 meses. Hoje busco expandir minhas habilidades e meu conhecimento me atualizando
                        com as novidades no campo de T.I.</p>
                    </div>
                    <div className={styles.buttons_div}>
                        <button className={styles.btn} onClick={button}>Portfólio source code</button>
                        <button className={styles.btn2} onClick={GitButton}><FaGithub/></button>
                    </div>
                </div>               
            </div>
            <Projects />
            <Contact />
        </section>
    )
}
export default Home;