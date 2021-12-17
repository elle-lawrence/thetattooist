import React from 'react';
import { Link } from 'react-router-dom';

export default function SearchGenderButton() {
  return (
    <Link to="/searchgender" className="btn-outline-dark btn">
      Search by Gender
    </Link>
  );
}
