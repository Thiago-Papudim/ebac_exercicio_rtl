import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';

describe('Teste para o componente', () => {
    it('Deve renderizar corretamente', () => {
        render(<Post />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários', () => {
        render(<Post />);

        const textareaElement = screen.getByRole('textbox');
        const submitButton = screen.getByText('Comentar');

        fireEvent.change(textareaElement, { target: { value: 'Comentário 1' } });
        fireEvent.click(submitButton);

        fireEvent.change(textareaElement, { target: { value: 'Comentário 2' } });
        fireEvent.click(submitButton);

        expect(screen.getByText('Comentário 1')).toBeInTheDocument();
        expect(screen.getByText('Comentário 2')).toBeInTheDocument();
    });
});