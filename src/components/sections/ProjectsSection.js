import styles from './ProjectsSection.module.css'
import { FaGithub } from 'react-icons/fa';

function Projects () {
    return (
        <section className={styles.home} id='projects'>
            <h1>Projects</h1>
            <div className={styles.projectsWrap}>
                <div className={styles.blackJack}>
                    <p>BlackJack</p>
                    <div className={styles.languageLayout}>Language used: Java</div>
                    <div><a className={styles.githubLink} target='_blank' href='https://github.com/NicollasGrilo/blackjack-java'><FaGithub/>GitHub Code</a></div>
                </div>
                <div className={styles.calculateMass}>
                    <p>Calculate Mass</p>
                    <div className={styles.languageLayout}>Language used: Java, HTML, CSS, JavaScript</div>
                    <div><a className={styles.githubLink} target='_blank' href='https://github.com/NicollasGrilo/calculate-mass'><FaGithub/>GitHub Code</a></div>
                </div>
                <div className={styles.botAutomation}>
                    <p>Bot Automation</p>
                    <div className={styles.languageLayout}>Language used: Python</div>
                    <div><a className={styles.githubLink} target='_blank' href='github.com/NicollasGrilo'><FaGithub/>GitHub Code</a></div>
                </div>
                <div className={styles.alexaArtesanal}>
                    <p>Alexa Artesanal</p>
                    <div className={styles.languageLayout}>Language used: HTML, CSS, JavaScript</div>
                    <div><a className={styles.githubLink} target='_blank' href='https://github.com/NicollasGrilo/alexa-artesanal'><FaGithub/>GitHub Code</a></div>
                </div>
            </div>
        </section>
    )
}
export default Projects