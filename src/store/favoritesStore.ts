import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface FavoritesStore {
  favoriteIds: string[];
  toggleFavorite: (id: string) => void;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set) => ({
      favoriteIds: [],

      toggleFavorite: (id) =>
        set((state) => ({
          favoriteIds: state.favoriteIds.includes(id)
            ? state.favoriteIds.filter((item) => item !== id)
            : [...state.favoriteIds, id],
        })),
    }),
    {
      name: 'pulso-abierto-favorites',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        favoriteIds: state.favoriteIds,
      }),
    }
  )
);