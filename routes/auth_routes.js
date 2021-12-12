const Passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google', 
        Passport.authenticate('google', {
            scope: ['profile', 'email']
        }),
    );

    app.get('/auth/google/callback', 
        Passport.authenticate('google'),
        (req, res) => {
            res.redirect('/surveys');
        }
    )
    app.get('/', (req, res) => {
        res.send({"response": "success"});
    })
    app.get('/api/currentUser', (req, res) => {
        res.send(req.user);
    })
    app.get('/api/logout', (req, res) => {
        req.logout();
        // TODO: Logout can also be implemented as the ajax request to BE from FE,
        // so that whole page does not refresh at the client side, as this loading the 
        // whole page fetchs the whole HTML too, which can be optimized
        res.redirect('/');
    })
}
