"use client"

import styles from './itemLista.module.css';

type Item = {
    dados: {
        id: number;
        nome: string;
    }
    deletar: (formData: FormData) => Promise<void>;
}

const ItemLista = ({ deletar, dados }:Item) => {
    return(<>
        <li className={styles.list}>
            <div className={styles.item}>
                <span>{ dados.nome }</span>
                <form action={ deletar }>
                    <input type="hidden" name="idTarefa" value={dados.id} />
                    <button type="submit">Deletar</button>
                </form>
            </div>
        </li>
    </>)
}

export default ItemLista;