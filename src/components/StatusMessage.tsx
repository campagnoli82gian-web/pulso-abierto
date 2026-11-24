import type { RequestStatus } from '../types/crypto';

interface StatusMessageProps {
  status: RequestStatus;
  error: string;
  onRetry: () => void;
}

function StatusMessage({ status, error, onRetry }: StatusMessageProps) {
  if (status === 'initial') {
    return <p>Preparando consulta...</p>;
  }

  if (status === 'loading') {
    return <p role="status">Consultando precios...</p>;
  }

  if (status === 'empty') {
    return <p>No se encontraron criptomonedas.</p>;
  }

  if (status === 'error') {
    return (
      <div role="alert">
        <p>No pudimos completar la consulta. {error}</p>
        <button type="button" onClick={onRetry}>
          Reintentar consulta
        </button>
      </div>
    );
  }

  return <p role="status">Consulta realizada correctamente.</p>;
}

export default StatusMessage;