const reHydrateStore = () => {
  const storeFromStorage = window.localStorage.getItem('store');

  if (storeFromStorage) {
    return JSON.parse(storeFromStorage || '');
  }
}

export default reHydrateStore;
