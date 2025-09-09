
import React, { useEffect, useState } from 'react';
import { getPopularMovies, searchMovies } from '../services/tmdb';
import { useNavigate } from 'react-router-dom';
import '../styles/Home/index.css';

const Home = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await getPopularMovies();
        setMovies(data.results);
      } catch (err) {
        setError('Erro ao carregar filmes.');
      }
      setLoading(false);
    };
    fetchMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    setSearching(true);
    setError('');
    setLoading(true);
    try {
      const data = await searchMovies(search);
      setMovies(data.results);
    } catch (err) {
      setError('Erro ao buscar filmes.');
    }
    setLoading(false);
    setSearching(false);
  };

  const handleClear = async () => {
    setSearch('');
    setLoading(true);
    setError('');
    try {
      const data = await getPopularMovies();
      setMovies(data.results);
    } catch (err) {
      setError('Erro ao carregar filmes.');
    }
    setLoading(false);
  };

  if (loading) return <div className="home-loading">Carregando filmes...</div>;
  if (error) return <div className="home-error">{error}</div>;

  return (
    <div className="home-container">
      <h2 className="home-title">Catálogo de Filmes</h2>
      <form onSubmit={handleSearch} className="home-search-form">
        <input
          type="text"
          placeholder="Buscar filme por nome..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="login-input"
        />
        <button className="login-btn" type="submit" disabled={searching || !search.trim()}>
          Buscar
        </button>
        {search && (
          <button type="button" className="login-btn" style={{ background: '#888' }} onClick={handleClear}>
            Limpar
          </button>
        )}
      </form>
      <div className="home-movies-list">
        {movies.map(movie => (
          <div
            key={movie.id}
            className="home-movie-card"
            onClick={() => navigate(`/movie/${movie.id}`)}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : ''}
              alt={movie.title}
              className="home-movie-poster"
            />
            <div className="home-movie-title">{movie.title}</div>
            <div className="home-movie-year">{movie.release_date?.slice(0, 4)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
