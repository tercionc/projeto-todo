const mongoose = require("mongoose");

const user = "admin";
const pass = "123";
const database = "TODO";
const serverName = "cluster0.kaphq.mongodb.net";

module.exports = {
    init: () => {
      mongoose
        .connect(
          `mongodb+srv://${user}:${pass}@${serverName}/${database}?retryWrites=true&w=majority`,
          {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }
        )
        .then((res) => console.log(`Connection Succesful ${res}`))
        .catch((err) => console.log(`Error in DB connection ${err}`));
    },
  };