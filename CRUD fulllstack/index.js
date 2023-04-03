const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

mongoose.set("strictQuery", false);

app.use(bodyParser.json());
app.use(cors());

const uri = "mongodb+srv://raju123:s2piTSg7BOTkRCKZ@cluster0.k469k9v.mongodb.net/crudData?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB Atlas");
}).catch((err) => {
  console.log("Error connecting to MongoDB Atlas", err);
});

const mySchema = new mongoose.Schema({
  title: String,
  number: String,
  email: String,
});

const MyModel = mongoose.model("crudCollection", mySchema);

app.get("/crudCollection", (req, res) => {
  MyModel.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
});

app.post("/crudCollection", (req, res) => {
  const newItem = new MyModel(req.body);

  newItem.save((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(newItem);
    }
  });
});

app.put("/crudCollection/:id", (req, res) => {
  MyModel.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
});

app.delete("/crudCollection/:id", (req, res) => {
  MyModel.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({ message: "Item deleted" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
