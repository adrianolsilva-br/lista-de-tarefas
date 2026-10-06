import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NovaTarefa from './NovaTarefa';
import '@testing-library/jest-dom';

describe('NovaTarefa', () => {
    it('deve validar o input', () => {
        render(<NovaTarefa criar={jest.fn()} total={0} />);

        expect(screen.getByRole('textbox')).toBeRequired();
    });

    it('deve possuir um botão de submissão', () => {
        render(<NovaTarefa criar={jest.fn()} total={0} />);

        expect(
            screen.getByRole('button', { name: '+' })
        ).toHaveAttribute('type', 'submit');
    });

    it('deve permitir preencher o input', async () => {
        const user = userEvent.setup();

        render(<NovaTarefa criar={jest.fn()} total={0} />);

        const input = screen.getByRole('textbox');

        await user.type(input, 'Minha nova tarefa');

        expect(input).toHaveValue('Minha nova tarefa');
    });
});
