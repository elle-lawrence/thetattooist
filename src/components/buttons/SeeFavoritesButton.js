import React from 'react';
import { Link } from 'react-router-dom';

export default function SeeFavoritesButton() {
  return (
    <Link to="/favorites" className="btn-style btn-outline-dark btn">
      favorites
    </Link>
  );
}
