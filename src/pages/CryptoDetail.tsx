
import { Link, useParams } from 'react-router-dom';
import { useFavoritesStore } from '../store/favoritesStore';

const cryptoDetails: Record<string, { name: string; symbol: string; description: string }> = {
  bitcoin: {
    name: 'Bitcoin',
    symbol: 'BTC',
    description: 'Bitcoin es una criptomoneda descentralizada que permite realizar transferencias digitales sin intermediarios.',
  },
  ethereum: {
    name: 'Ethereum',
    symbol: 'ETH',
    description: 'Ethereum es una plataforma descentralizada que permite crear contratos inteligentes y aplicaciones.',
  },
  solana: {
    name: 'Solana',
    symbol: 'SOL',
    description: 'Solana es una blockchain diseñada para realizar operaciones rápidas y de bajo costo.',
  },
};

function CryptoDetail() {
  const { id } = useParams();

  const favoriteIds = useFavoritesStore(
    (state) => state.favoriteIds
  );

  const toggleFavorite = useFavoritesStore(
    (state) => state.toggleFavorite
  );

  const crypto = id ? cryptoDetails[id] : undefined;

  if (!crypto || !id) {
    return (
      <main className="container">
        <h1>Criptomoneda no encontrada</h1>
        <Link to="/">Volver al inicio</Link>
      </main>
    );
  }

  const isFavorite = favoriteIds.includes(id);

  return (
    <main className="container">
      <h1>{crypto.name}</h1>
      <p>Símbolo: {crypto.symbol}</p>
      <p>{crypto.description}</p>

      <button
        type="button"
        onClick={() => toggleFavorite(id)}
        aria-pressed={isFavorite}
      >
        {isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      </button>

      <p>
        {isFavorite
          ? 'Esta criptomoneda está en tus favoritos.'
          : 'Esta criptomoneda no está en tus favoritos.'}
      </p>

      <Link to="/">Volver al listado</Link>
    </main>
  );
}

export default CryptoDetail;
