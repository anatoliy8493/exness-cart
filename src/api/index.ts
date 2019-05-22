export const asyncGetProducts = () => {
  return new Promise((resolve) => {
    resolve();
  }).then(() => ({
    ok: true,
    products: [
      { id: 0, title: 'Iphone 6', price: 300, quantity: 10 },
      { id: 1, title: 'Iphone 7', price: 550, quantity: 13 },
      { id: 2, title: 'Samsung A3', price: 150, quantity: 2 },
    ],
  }))
};
