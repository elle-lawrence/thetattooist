import React from 'react';
import { VscAccount } from 'react-icons/vsc';
import { signInUser } from '../../api/auth';

export default function SignInButton() {
  return (
    <button type="button" className="sign-btn btn-outline-light btn" onClick={signInUser}>
      <VscAccount />
    </button>
  );
}
