import React from 'react';
import { Link } from 'react-router-dom';

export default function SearchNameButton() {
  return (
    <Link to="/searchname" className="btn-style btn-outline-dark btn">
      search by name
    </Link>
  );
}
