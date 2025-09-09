import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../services/tmdb';
import '../styles/Home/index.css';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError('Erro ao carregar detalhes do filme.');
      }
      setLoading(false);
    };
    fetchDetails();
  }, [id]);

  if (loading) return <div className="home-loading">Carregando detalhes...</div>;
  if (error) return <div className="home-error">{error}</div>;
  if (!movie) return null;

  return (
    <div className="home-container">
      <button className="login-btn" style={{ width: 120, marginBottom: 24 }} onClick={() => navigate(-1)}>
        Voltar
      </button>
      <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
        <img
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w400${movie.poster_path}` : ''}
          alt={movie.title}
          className="home-movie-poster"
          style={{ maxWidth: 300 }}
        />
        <div style={{ flex: 1, minWidth: 250 }}>
          <h2 className="home-title">{movie.title}</h2>
          <div><b>Ano:</b> {movie.release_date?.slice(0, 4)}</div>
          <div><b>Gêneros:</b> {movie.genres?.map(g => g.name).join(', ')}</div>
          <div style={{ margin: '16px 0' }}><b>Sinopse:</b><br />{movie.overview || 'Sem sinopse.'}</div>
          <div><b>Avaliação:</b> {movie.vote_average} / 10</div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
