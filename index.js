const Express = require('express');
const Passport = require('./services/passport');
const AuthRoutes = require('./routes/auth_routes')

const app = Express();

AuthRoutes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);

console.log(`Emaily Running on Port: ${PORT}`);