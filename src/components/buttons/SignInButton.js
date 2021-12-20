import React from 'react';
import { signInUser } from '../../api/auth';

export default function SignInButton() {
  return (
    <button type="button" className="sign-btn btn-outline-light btn" onClick={signInUser}>
      <i className="fas fa-sign-in-alt" />
      SIGNIN
    </button>
  );
}
