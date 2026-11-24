import type { Cryptocurrency } from '../types/crypto';
import CryptoCard from './CryptoCard';

interface CryptoListProps {
  cryptos: Cryptocurrency[];
  selectedIds: string[];
  onToggle: (id: string) => void;
}

function CryptoList({ cryptos, selectedIds, onToggle }: CryptoListProps) {
  return (
    <section aria-label="Listado de criptomonedas">
      <div className="crypto-grid">
        {cryptos.map((crypto) => (
          <CryptoCard
            key={crypto.id}
            crypto={crypto}
            selected={selectedIds.includes(crypto.id)}
            onToggle={onToggle}
          />
        ))}
      </div>
    </section>
  );
}

export default CryptoList;