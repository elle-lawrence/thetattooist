import React from 'react';
import { Link } from 'react-router-dom';

export default function ShowAllButton() {
  return (
    <Link to="/artists" className="btn-style btn-outline-dark btn">
      show all
    </Link>
  );
}
