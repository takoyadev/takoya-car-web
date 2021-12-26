const process = require("process");
const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log(`App is running on port ${ PORT }`);
})
