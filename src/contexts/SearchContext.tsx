import { ReactNode, createContext, useState } from 'react';

export const SearchContext = createContext<{
  search: string;
  setSearch: (s: string) => void;
}>({
  search: '',
  setSearch: () => {},
});

export function SearchProvider({ children }: { children: ReactNode }) {
  const [search, setSearch] = useState('');

  return <SearchContext.Provider value={{ search, setSearch }}> {children}</SearchContext.Provider>;
}
