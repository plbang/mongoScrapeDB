const request = require("request");
const cheerio = require("cheerio");

module.exports = function(router) {
  // Route for homepage
  router.get("/", function(req, res) {
    res.render("index");
  });

  // Route for saved articles
  router.get("/article", function(req, res) {
    res.render("article");
  });
  
  request("https://www.techeblog.com/", function(err, res, body) {
    const $ = cheerio.load(body);
    const articles = [];
  });
};

{
  /* <div class="posts-wrap">
  <article class="post-main">
    <header class="post-header cf">
      <h2 class="post-title-alt">
        <a href="https://www.techeblog.com/2020-toyota-supra-detroit-auto-show/">
          2020 Toyota Supra Leaked Ahead of North American International Auto
          Show in Detroit
        </a>
      </h2>
    </header>
    <div class="post-content description cf entry-content">
      <p>Summary</p> 
    </div>
  </article>
</div> */
}
