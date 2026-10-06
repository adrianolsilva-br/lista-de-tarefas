import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('next/cache', () => ({
    revalidatePath: jest.fn(),
}));

import Home, { lista } from './page';

describe('Home', () => {
    beforeEach(() => {
        lista.length = 0;
    });

    it('deve renderizar as tarefas', async () => {
        lista.push(
            { id: 1, nome: 'Tarefa 1' },
            { id: 2, nome: 'Tarefa 2' }
        );

        const page = await Home();

        render(page);

        expect(screen.getByText('Tarefa 1')).toBeInTheDocument();
        expect(screen.getByText('Tarefa 2')).toBeInTheDocument();

        expect(
            screen.queryByText('A lista está vazia.')
        ).not.toBeInTheDocument();
    });
});
