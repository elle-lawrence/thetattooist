import React from 'react';
import { Link } from 'react-router-dom';

export default function ShowAllButton() {
  return (
    <Link to="/artists" className="btn-outline-dark btn">
      Show All
    </Link>
  );
}
