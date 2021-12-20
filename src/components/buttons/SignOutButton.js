import React from 'react';
import { VscSignOut } from 'react-icons/vsc';
import { signOutUser } from '../../api/auth';

export default function SignOutButton() {
  return (
    <button
      type="button"
      className="sign-btn btn btn-outline-light"
      onClick={signOutUser}
    >
      <VscSignOut />
    </button>
  );
}
