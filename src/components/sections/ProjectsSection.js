import styles from './ProjectsSection.module.css'

function Projects () {
    return (
        <section className={styles.home}>
            <h1>Projetos</h1>
            <ul className={styles.list}>
                <li className={styles.p1}>
                    <h2>Projeto 1</h2>
                    <p>O voo se encontra com a plataforma neste jogo de movimento sem fim</p>
                </li>
                <li className={styles.p2}>
                    <h2>Projeto 2</h2>
                    <p>Ação e aventura se encontram com gráficos fofos e história divertida</p>
                </li>
                <li className={styles.p3}>
                    <h2>Projeto 3</h2>
                    <p>Misture cores por horas de entretenimento</p>
                </li>
            </ul>
        </section>
    )
}
export default Projects