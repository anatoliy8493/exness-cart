const reHydrateStore = () => {
  if (window.localStorage.getItem('store')) {
    return JSON.parse(window.localStorage.getItem('store') || '');
  }
}

export default reHydrateStore;
