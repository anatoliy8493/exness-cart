export const asyncGetProducts = () => Promise.resolve().then(() => ({
  ok: true,
  products: [
    { id: 1, title: 'Iphone 6', price: 300, quantity: 1 },
    { id: 2, title: 'Iphone 7', price: 550, quantity: 2 },
    { id: 3, title: 'Samsung A3', price: 150, quantity: 3 },
  ],
}))
