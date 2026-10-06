import { renderHook, waitFor } from '@testing-library/react';
import { useContadorDeTarefas } from './useContadorDeTarefas';

describe('useContadorDeTarefas', () => {
    it('deve retornar o total de tarefas', async () => {
        const { result } = renderHook(() =>
            useContadorDeTarefas(5)
        );

        await waitFor(() => {
            expect(result.current).toBe(5);
        });
    });

    it('deve aceitar um total como Promise', async () => {
        const total = Promise.resolve(10);

        const { result } = renderHook(() =>
            useContadorDeTarefas(total)
        );

        await waitFor(() => {
            expect(result.current).toBe(10);
        });
    });

    it('deve atualizar quando o total mudar', async () => {
        const { result, rerender } = renderHook(
            ({ total }) => useContadorDeTarefas(total),
            {
                initialProps: { total: 5 },
            }
        );

        await waitFor(() => {
            expect(result.current).toBe(5);
        });

        rerender({ total: 8 });

        await waitFor(() => {
            expect(result.current).toBe(8);
        });
    });
});
