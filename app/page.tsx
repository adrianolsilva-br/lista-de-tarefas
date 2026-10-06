import NovaTarefa from '@/components/NovaTarefa/NovaTarefa';
import styles from './page.module.css';
import ItemLista from '@/components/ItemLista/ItemLista';
import { revalidatePath } from 'next/cache';

/*let lista = [
  {id: 1, nome: "Tarefa 1"},
  {id: 2, nome: "Tarefa 2"},
  {id: 3, nome: "Tarefa 3"}
]*/

export let lista: { id: number; nome: string }[] = [];

export default async function Home() {
  const quant = lista.length

  async function deletarTarefa(formData: FormData) {
    'use server'
    const idParaDeletar = Number(formData.get("idTarefa"));

    console.log(idParaDeletar)
    
    lista = lista.filter(item => item.id !== idParaDeletar);
    
    revalidatePath('/');
  }

  async function criarTarefa(formData: FormData) {
        "use server"

        const texto = String(formData.get("taskname"));

        if (!texto || texto.trim() === "") return;

        lista.push({
            id: Date.now(),
            nome: texto
        });

        revalidatePath('/');
    }

  return (<>
    <div className={ styles.container }>
      <NovaTarefa criar={ criarTarefa } total={ quant } />
      <ul>
        { lista.map((item) => (
          <ItemLista key={ item.id } dados={ item } deletar={ deletarTarefa } />
        ))}
      </ul>
      { quant < 1 &&
        <div className={ styles.empty }>A lista está vazia.</div>
      }
    </div>
  </>);
}