import { useEffect, useState } from 'react';

// O seu hook customizado que recebe o total vindo do Server Component
export function useContadorDeTarefas(total: number | Promise<number>) {
    const [totalTarefas, setTotalTarefas] = useState<number>(0);

    useEffect(() => {
        Promise.resolve(total)
            .then((numero) => {
                setTotalTarefas(numero);
            })
            .catch((erro) => console.error("Erro ao sincronizar o total:", erro));
            
    }, [total]);

    return totalTarefas;
}
