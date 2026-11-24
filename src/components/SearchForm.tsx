
import { useState } from 'react';
import { z } from 'zod';

const searchSchema = z.object({
  search: z.string().trim().min(2, 'Ingresá al menos 2 caracteres.'),
  category: z.enum(['all', 'selected']),
});

interface SearchFormProps {
  onSearch: (search: string, category: string) => void;
}

function SearchForm({ onSearch }: SearchFormProps) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [errors, setErrors] = useState<{
    search?: string;
    category?: string;
  }>({});

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const result = searchSchema.safeParse({ search, category });

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;

      setErrors({
        search: fieldErrors.search?.[0],
        category: fieldErrors.category?.[0],
      });

      return;
    }

    setErrors({});
    onSearch(result.data.search, result.data.category);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Buscar criptomoneda</label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        aria-invalid={Boolean(errors.search)}
        aria-describedby={errors.search ? 'search-error' : undefined}
      />

      {errors.search && (
        <p id="search-error">{errors.search}</p>
      )}

      <label htmlFor="category">Filtrar resultados</label>
      <select
        id="category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="all">Todas las criptomonedas</option>
        <option value="selected">Solo seleccionadas</option>
      </select>

      {errors.category && <p>{errors.category}</p>}

      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchForm;
