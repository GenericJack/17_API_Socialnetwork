const express = require('express');
const mongoose = require('mongoose');
const moment = require('moment');

const app = express();
const PORT = process.env.PORT || 3001;

// Set up middleware and routes here

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});