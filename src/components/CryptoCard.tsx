import type { Cryptocurrency } from '../types/crypto';
import { Link } from 'react-router-dom';

interface CryptoCardProps {
  crypto: Cryptocurrency;
  selected: boolean;
  onToggle: (id: string) => void;
}

function CryptoCard({ crypto, selected, onToggle }: CryptoCardProps) {
  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'USD',
  }).format(crypto.price);

  return (
    <article className="crypto-card">
      <div className="crypto-card-info">
        <h2>{crypto.name}</h2>
        <span>{crypto.symbol}</span>
      </div>

      <p className="crypto-price">{formattedPrice}</p>

      <Link to={`/criptomonedas/${crypto.id}`}>
        Ver detalles
      </Link>

      <button
        type="button"
        onClick={() => onToggle(crypto.id)}
        aria-pressed={selected}
      >
        {selected ? 'Quitar selección' : 'Seleccionar'}
      </button>
    </article>
  );
}

export default CryptoCard;