import React from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (localstorageKey, data) => (TodoBase) => {
  const saveData = (localstorageKey, data) => save(localstorageKey, data);
  const savedData = (localstorageKey) => load(localstorageKey);

  return () => <TodoBase savedData={savedData} saveData={saveData}/>
};

export default withLocalstorage;
