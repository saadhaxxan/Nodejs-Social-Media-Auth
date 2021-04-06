const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/socialauth", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Success");
  })
  .catch((err) => {
    console.log(err.message);
  });
