export const asyncGetProducts = () => {
  return new Promise((resolve) => {
    resolve();
  }).then(() => ({
    ok: true,
    products: [
      { id: 0, title: 'Iphone 6', price: 300, quantity: 10 },
      { id: 1, title: 'Iphone 7', price: 550, quantity: 10 },
    ],
  }))
};
