import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../services/tmdb';
// import '../index.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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

  if (loading) return <div style={{ textAlign: 'center', marginTop: 40 }}>Carregando filmes...</div>;
  if (error) return <div style={{ color: 'red', textAlign: 'center', marginTop: 40 }}>{error}</div>;

  return (
    <div style={{ maxWidth: 1100, margin: '40px auto' }}>
      <h2>Filmes Populares</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
        {movies.map(movie => (
          <div key={movie.id} style={{ width: 180, textAlign: 'center' }}>
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : ''}
              alt={movie.title}
              style={{ width: '100%', borderRadius: 8, marginBottom: 8 }}
            />
            <div style={{ fontWeight: 'bold', marginBottom: 4 }}>{movie.title}</div>
            <div style={{ fontSize: 14, color: '#888' }}>{movie.release_date?.slice(0, 4)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
