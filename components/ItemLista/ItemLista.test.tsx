import { render, screen } from '@testing-library/react';
import ItemLista from './ItemLista';
import '@testing-library/jest-dom';

describe('ItemLista', () => {
    const dados = {
        id: 1,
        nome: 'Estudar React',
    };

    it('deve mostrar o nome da tarefa', () => {
        render(
            <ItemLista
                dados={dados}
                deletar={jest.fn()}
            />
        );

        expect(screen.getByText('Estudar React')).toBeInTheDocument();
    });

    it('deve possuir o id da tarefa no input hidden', () => {
        render(
            <ItemLista
                dados={dados}
                deletar={jest.fn()}
            />
        );

        const input = screen.getByDisplayValue('1');

        expect(input).toHaveAttribute('type', 'hidden');
        expect(input).toHaveAttribute('name', 'idTarefa');
    });

    it('deve possuir um botão de deletar', () => {
        render(
            <ItemLista
                dados={dados}
                deletar={jest.fn()}
            />
        );

        const button = screen.getByRole('button', {
            name: 'Deletar',
        });

        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('type', 'submit');
    });
});
