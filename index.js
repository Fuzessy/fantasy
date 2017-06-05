const Main = require('./main');
const port = process.env.PORT || 3456;

Main.create().listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
