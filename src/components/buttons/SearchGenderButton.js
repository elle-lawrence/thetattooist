import React from 'react';
import { Link } from 'react-router-dom';

export default function SearchGenderButton() {
  return (
    <Link to="/searchgender" className="btn-style btn-outline-dark btn">
      search by gender
    </Link>
  );
}
