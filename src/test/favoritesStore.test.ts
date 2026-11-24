// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { useFavoritesStore } from '../store/favoritesStore';


describe('Favorites Store', () => {
  beforeEach(() => {
    useFavoritesStore.setState({ favoriteIds: [] });
  });

  it('agrega una criptomoneda a favoritos', () => {
    useFavoritesStore.getState().toggleFavorite('bitcoin');

    expect(useFavoritesStore.getState().favoriteIds).toContain('bitcoin');
  });

  it('quita una criptomoneda de favoritos', () => {
    useFavoritesStore.setState({ favoriteIds: ['bitcoin'] });

    useFavoritesStore.getState().toggleFavorite('bitcoin');

    expect(useFavoritesStore.getState().favoriteIds).not.toContain('bitcoin');
  });
});