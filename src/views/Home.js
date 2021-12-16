import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1>the tattooist</h1>
      <Link className="linkStyling" to="/artists">
        Search
      </Link>
    </>
  );
}
