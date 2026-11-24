
import type { Cryptocurrency } from '../types/crypto';

interface CoinGeckoResponse {
  bitcoin?: { usd?: number };
  ethereum?: { usd?: number };
  solana?: { usd?: number };
}

const API_URL =
  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd';

export async function getCryptocurrencies(): Promise<Cryptocurrency[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }

  const data: CoinGeckoResponse = await response.json();

  const coins = [
    { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC' },
    { id: 'ethereum', name: 'Ethereum', symbol: 'ETH' },
    { id: 'solana', name: 'Solana', symbol: 'SOL' },
  ] as const;

  return coins.flatMap((coin) => {
    const price = data[coin.id]?.usd;

    if (typeof price !== 'number' || !Number.isFinite(price)) {
      return [];
    }

    return [{
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      price,
    }];
  });
}
