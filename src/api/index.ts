export const asyncGetProducts = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      ok: true,
      products: [
        { id: 1, title: 'Honor 1232', price: 3000 },
        { id: 2, title: 'Iphone 6', price: 300 },
        { id: 3, title: 'Samsung A3', price: 150 },
        { id: 4, title: 'Iphone 7', price: 550 },
      ],
    })
  }, 200);
});
