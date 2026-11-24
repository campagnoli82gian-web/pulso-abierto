// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import StatusMessage from '../components/StatusMessage';

describe('StatusMessage', () => {
  it('muestra el mensaje de carga', () => {
    render(
      <StatusMessage
        status="loading"
        error=""
        onRetry={() => {}}
      />
    );

    expect(screen.getByRole('status')).toHaveTextContent(
      'Consultando precios...'
    );
  });

  it('muestra el error y permite reintentar', () => {
    const onRetry = vi.fn();

    render(
      <StatusMessage
        status="error"
        error="Revisá tu conexión."
        onRetry={onRetry}
      />
    );

    expect(screen.getByRole('alert')).toHaveTextContent(
      'Revisá tu conexión.'
    );

    fireEvent.click(
      screen.getByRole('button', { name: 'Reintentar consulta' })
    );

    expect(onRetry).toHaveBeenCalledTimes(1);
  });
});
