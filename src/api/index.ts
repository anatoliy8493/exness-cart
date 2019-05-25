export const asyncGetProducts = () => Promise.resolve().then(() => ({
  ok: true,
  products: [
    { id: 1, title: 'Honor 1232', price: 3000, quantity: 2342432 },
    { id: 2, title: 'Iphone 6', price: 300, quantity: 1000 },
    { id: 3, title: 'Samsung A3', price: 150, quantity: 30000 },
    { id: 4, title: 'Iphone 7', price: 550, quantity: 200 },
  ],
}));
