import React from 'react';
import { Link } from 'react-router-dom';

export default function SearchNameButton() {
  return (
    <Link to="/searchname" className="btn-outline-dark btn">
      Search by Name
    </Link>
  );
}
