const Express           = require('express');
const AuthRoutes        = require('./routes/auth_routes');
const Mongoose          = require('mongoose');
const Keys              = require('./config/keys');
const App               = Express();
const PORT              = process.env.PORT || 5000;
const CookieSession     = require('cookie-session');
const Passport          = require('passport');
                          require('./models/users')
                          require('./services/passport');

                          

Mongoose.connect(Keys.mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then((res) => {
    console.log(`Emaily listening on Port ${PORT}`);
}).catch((err) => {
    console.log("Connection to mongo failed - Error stack /n",err);
    throw err;
});


// Middlewares 
App.use(
  CookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [Keys.cookieKey]
  })
)

App.use(Passport.initialize());
App.use(Passport.session());

AuthRoutes(App);
App.listen(PORT);