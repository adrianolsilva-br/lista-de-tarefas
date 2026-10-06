"use client"

import { useContadorDeTarefas } from '@/hooks/useContadorDeTarefas';
import styles from './novaTarefa.module.css';

type NovaTarefaProps = {
    criar: (formData: FormData) => Promise<void>;
    total: number;
}

const NovaTarefa = ({ criar, total }: NovaTarefaProps) => {
    const numTarefas = useContadorDeTarefas(total)

    return(<>
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Tarefas</h1>
                <p>{ numTarefas }</p>
            </div>

            <div>
                <form className={styles.form} action={ criar }>
                    <input type="text" name="taskname" required />
                    <button type="submit">+</button>
                </form>
            </div>

            <div className={styles.line}></div>
        </div>
    </>)
}

export default NovaTarefa;