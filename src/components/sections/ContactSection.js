import styles from './ContactSection.module.css'
import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { useRef } from 'react';


function Contact() {
    return (
        <section id="contact" className={styles.home}>
            <h1>Contact</h1>
            <div className={styles.homeCards}>
                <div className={styles.phraseContact}>
                    <p className={styles.pPhrase}><span className={styles.decorationP}>Hi!</span> Nice to meet you! Let's talk and <span className={styles.decorationP}>develop some projects</span> together?</p>
                </div>
                <div className={styles.linksContact}>
                    <div className={styles.linksContainer}>
                        <div className={styles.wppContainer}><FaWhatsapp/></div>
                        <div>
                            <p className={styles.contactTitle}>Whatsapp</p>
                            <a className={styles.contactLink} target='_blank' href='https://api.whatsapp.com/send?phone=+5511989283358&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%2C%20gostaria%20de%20%20conhecer%20melhor%20seus%20servi%C3%A7os'>Talk Now</a>
                        </div>
                    </div>
                    <div className={styles.linksContainer}>
                        <div className={styles.emailContainer}><FaEnvelope/></div>
                        <div>
                            <p className={styles.contactTitle}>E-mail</p>
                            <a className={styles.contactLink} target='_blank' href='mailto:nicollas.vianamoura@gmail.com.br'>Send me an email</a>
                        </div>
                    </div>
                    <div className={styles.linksContainer}>
                        <div className={styles.linkedinContainer}><FaLinkedin/></div>
                        <div>
                            <p className={styles.contactTitle}>Linkedin</p>
                            <a className={styles.contactLink} href='https://www.linkedin.com/in/nicollas-viana/' target='_blank'>Go to my linkedin now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact