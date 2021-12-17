import React from 'react';
import SearchGenderButton from './SearchGenderButton';
import SearchNameButton from './SearchNameButton';
import ShowAllButton from './ShowAllButton';

export default function SearchButtonGroup() {
  return (
    <div>
      <ShowAllButton />
      <SearchNameButton />
      <SearchGenderButton />
    </div>
  );
}
