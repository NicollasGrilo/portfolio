import styles from './AbilitiesSection.module.css'
import devfoto from '../../img/devfoto.jpg'

function Abilities() {
    return (
        <section className={styles.home}>
            <h1>Habilidades</h1>
            <div className={styles.home2}>
                <img src={devfoto} alt='Programador' />
                <ul className={styles.list}>
                    <li className={styles.h1}>
                        <h2>Exemplo 1</h2>
                        <p>As publicações de notícias oferecem uma ótima maneira de informar os clientes sobre novos produtos e serviços, eventos, prêmios e muito mais.</p>
                    </li>
                    <li className={styles.h2}>
                        <h2>Exemplo 2</h2>
                        <p>As publicações de notícias oferecem uma ótima maneira de informar os clientes sobre novos produtos e serviços, eventos, prêmios e muito mais.</p>
                    </li>
                    <li className={styles.h3}>
                        <h2>Exemplo 3</h2>
                        <p>As publicações de notícias oferecem uma ótima maneira de informar os clientes sobre novos produtos e serviços, eventos, prêmios e muito mais.</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default Abilities