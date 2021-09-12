const Passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google', 
        Passport.authenticate('google', {
            scope: ['profile', 'email']
        }),
    );

    app.get('/auth/google/callback', 
        Passport.authenticate('google')
    )
    app.get('/', (req, res) => {
        res.send({"response": "success"});
    })
    app.get('/api/currentUser', (req, res) => {
        res.send(req.user);
    })
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    })
}
