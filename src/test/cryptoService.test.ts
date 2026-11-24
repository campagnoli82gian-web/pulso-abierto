
// @vitest-environment jsdom

import { describe, it, expect, vi, afterEach } from 'vitest';
import { getCryptocurrencies } from '../services/cryptoService';

describe('Crypto Service', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('obtiene correctamente las criptomonedas', async () => {
    const fetchMock = vi.fn();

    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({
        bitcoin: { usd: 90000 },
        ethereum: { usd: 3000 },
        solana: { usd: 150 },
      }),
    });

    vi.stubGlobal('fetch', fetchMock);

    const result = await getCryptocurrencies();

    expect(result).toHaveLength(3);
    expect(result[0].name).toBe('Bitcoin');
    expect(result[0].price).toBe(90000);
  });

  it('genera un error cuando falla la respuesta HTTP', async () => {
    const fetchMock = vi.fn();

    fetchMock.mockResolvedValue({
      ok: false,
      status: 429,
    });

    vi.stubGlobal('fetch', fetchMock);

    await expect(getCryptocurrencies()).rejects.toThrow('Error HTTP: 429');
  });
});
