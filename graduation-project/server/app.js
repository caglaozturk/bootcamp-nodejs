const express = require('express');
const cors = require('cors');
const config = require('./config');
const loaders = require('./loaders');
const path = require("path");
const { ProjectRoutes, UserRoutes, ProductRoutes, CategoryRoutes } = require('./routes');
const app = express();

config();
loaders();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static(__dirname + '/public'));

// Routes
app.use('/product', ProductRoutes);
app.use('/category', CategoryRoutes);

// Settings
app.set('port', process.env.APP_PORT || 3000);

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
