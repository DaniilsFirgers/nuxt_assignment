export default defineEventHandler(async () =>
  JSON.stringify([
    { id: 1, title: "buy some milk", isFav: false },
    { id: 2, title: "buy some lemons", isFav: true },
  ])
);
