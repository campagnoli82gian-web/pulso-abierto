
import { useCallback, useEffect, useMemo, useState } from 'react';
import CryptoList from '../components/CryptoList';
import SearchForm from '../components/SearchForm';
import StatusMessage from '../components/StatusMessage';
import { getCryptocurrencies } from '../services/cryptoService';
import { useFavoritesStore } from '../store/favoritesStore';
import type { Cryptocurrency, RequestStatus } from '../types/crypto';

function Home() {
  const [cryptos, setCryptos] = useState<Cryptocurrency[]>([]);
  const [status, setStatus] = useState<RequestStatus>('initial');
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const favoriteIds = useFavoritesStore(
    (state) => state.favoriteIds
  );

  const toggleFavorite = useFavoritesStore(
    (state) => state.toggleFavorite
  );

  const loadCryptos = useCallback(async () => {
    setStatus('loading');
    setError('');

    try {
      const data = await getCryptocurrencies();
      setCryptos(data);
      setStatus(data.length > 0 ? 'success' : 'empty');
    } catch {
      setError('Revisá tu conexión e intentá nuevamente.');
      setStatus('error');
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      void loadCryptos();
    }, 0);

    return () => clearTimeout(timer);
  }, [loadCryptos]);

  function handleSearch(term: string, selectedCategory: string) {
    setSearch(term.toLowerCase());
    setCategory(selectedCategory);
  }

  const filteredCryptos = useMemo(() => {
    return cryptos.filter((crypto) => {
      const matchesSearch =
        crypto.name.toLowerCase().includes(search) ||
        crypto.symbol.toLowerCase().includes(search);

      const matchesCategory =
        category === 'all' || favoriteIds.includes(crypto.id);

      return matchesSearch && matchesCategory;
    });
  }, [cryptos, search, category, favoriteIds]);

  return (
    <main className="container">
      <h1>Pulso Abierto</h1>
      <p>Consultá los precios actuales de las principales criptomonedas.</p>

      <SearchForm onSearch={handleSearch} />

      <StatusMessage
        status={status}
        error={error}
        onRetry={loadCryptos}
      />

      {status === 'success' && (
        <>
          <p>Criptomonedas encontradas: {filteredCryptos.length}</p>
          <p>Favoritos: {favoriteIds.length}</p>

          {filteredCryptos.length > 0 ? (
            <CryptoList
              cryptos={filteredCryptos}
              selectedIds={favoriteIds}
              onToggle={toggleFavorite}
            />
          ) : (
            <p>No hay resultados para esa búsqueda.</p>
          )}
        </>
      )}
    </main>
  );
}

export default Home;
