module.exports = function(router) {
    // Route for homepage
    router.get('/', function(req, res) {
        res.render('index');
    });

    // Route for saved articles
    router.get('/article', function(req, res) {
        res.render('article');
    });
}