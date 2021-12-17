import React from 'react';
import SearchGenderButton from '../components/buttons/SearchGenderButton';
import SearchNameButton from '../components/buttons/SearchNameButton';
import ShowAllButton from '../components/buttons/ShowAllButton';

export default function Home() {
  return (
    <>
      <h1>the tattooist</h1>
      <SearchNameButton />
      <SearchGenderButton />
      <ShowAllButton />
    </>
  );
}
