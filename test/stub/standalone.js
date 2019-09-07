const app = require('./index');

function startExpressApp(port) {
  return new Promise((resolve, reject) => {
    const server = app.listen(port, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(server);
      }
    });
  });
}

startExpressApp(process.env.PORT || 8080)
  .then(() => {
    console.log(`stub available at http://localhost:${process.env.PORT || 8080}`)
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

