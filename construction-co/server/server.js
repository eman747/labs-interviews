const express = require("express");
const cors = require('cors');

const companies = require("./companies.json");

const PORT = process.env.PORT ?? 8080;
const HOST = process.env.HOST ?? '0.0.0.0';

const app = express();
app.use(cors());

app.get("/api/companies", (req, res) => {
  const query = req.query.search;

  if (query) {
    const response = companies.filter((company) =>
      company.name.toLowerCase().includes(query)
    );
    res.json(response);
  } else {
    res.json(companies);
  }
});

app.listen(PORT, HOST, () => {
  console.info(`Server is listening on ${PORT}`);
});
