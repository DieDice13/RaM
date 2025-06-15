import axios from 'axios';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback
} from 'react';

const API_URL = 'https://rickandmortyapi.com/api/character/';

export function DataProvider({ children }) {
  const [activePage, setActivePage] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [info, setInfo] = useState({});
  const [apiURL, setApiURL] = useState(API_URL);
  const [allSpecies, setAllSpecies] = useState([]);

  // Получаем все уникальные species при инициализации
  useEffect(() => {
    async function fetchAllSpecies() {
      let page = 1;
      let speciesSet = new Set();
      let hasNext = true;

      while (hasNext) {
        const { data } = await axios.get(`${API_URL}?page=${page}`);
        data.results.forEach((char) => {
          if (char.species) speciesSet.add(char.species);
        });
        if (data.info.next) {
          page += 1;
        } else {
          hasNext = false;
        }
      }
      setAllSpecies(Array.from(speciesSet).sort());
    }
    fetchAllSpecies();
  }, []);

  // --- Фильтры ---
  const [filters, setFilters] = useState({
    status: '',
    gender: '',
    species: '',
    name: '',
    type: ''
  });

  // Формируем URL с учётом фильтров и страницы
  useEffect(() => {
    let url = API_URL + '?page=' + (activePage + 1);
    Object.entries(filters).forEach(([key, value]) => {
      if (value) url += `&${key}=${encodeURIComponent(value)}`;
    });
    setApiURL(url);
  }, [filters, activePage]);

  const fetchData = useCallback(async (url) => {
    setIsFetching(true);
    setIsError(false);

    axios
      .get(url)
      .then(({ data }) => {
        setIsFetching(false);
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((e) => {
        setIsFetching(false);
        setIsError(true);
        console.error(e);
      });
  }, []);

  useEffect(() => {
    fetchData(apiURL);
  }, [apiURL, fetchData]);

  useEffect(() => {
    // Если после фильтрации страниц стало меньше, чем текущий activePage — сбрасываем на первую страницу
    if (info && info.pages && activePage > info.pages - 1) {
      setActivePage(0);
    }
  }, [info, activePage]);

  const dataValue = useMemo(
    () => ({
      activePage,
      setActivePage,
      apiURL,
      setApiURL,
      characters,
      fetchData,
      isFetching,
      isError,
      info,
      filters,
      setFilters,
      allSpecies
    }),
    [
      activePage,
      apiURL,
      characters,
      isFetching,
      isError,
      info,
      fetchData,
      filters,
      allSpecies
    ]
  );

  return (
    <DataContext.Provider value={dataValue}>{children}</DataContext.Provider>
  );
}

const DataContext = createContext({});

export const useData = () => useContext(DataContext);
