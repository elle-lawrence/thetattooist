import React from 'react';
import { signInUser } from '../../api/auth';

export default function SignInButton() {
  return (
    <button type="button" className="btn-outline-light btn" onClick={signInUser}>
      <i className="fas fa-sign-in-alt" />
      SIGNIN
    </button>
  );
}
