import styles from './AbilitiesSection.module.css'

function Abilities() {
    return (
        <section>
            <h1 className={styles.abilities_h1}>Habilidades</h1>
            <div className={styles.home}>
                <ul className={styles.list}>
                    <li className={styles.a1}>
                        <h2>Hab 1</h2>
                        <p>Organização</p>
                    </li>
                    <li className={styles.a2}>
                        <h2>Hab 2</h2>
                        <p>Bom ouvinte</p>
                    </li>
                    <li className={styles.a3}>
                        <h2>Hab 3</h2>
                        <p>Sempre pesquisando</p>
                    </li>
                    <li className={styles.a4}>
                        <h2>Hab 4</h2>
                        <p>Trabalho em equipe</p>
                    </li>
                    <li className={styles.a5}>
                        <h2>Hab 5</h2>
                        <p>Disciplinado</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default Abilities