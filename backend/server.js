const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://dhruvprajapati:12345678910@cluster0.yagaaku.mongodb.net/user_information?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected");
}).catch(err => console.log(err));

const formSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

const Form = mongoose.model('Form', formSchema);

app.post('/api/form', async (req, res) => {
  const formData = req.body;

  try {
    const createdForm = await Form.create(formData);
    console.log("Data saved to database");
    res.status(200).send("Data saved successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error saving to database");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
