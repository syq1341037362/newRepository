const star = require("./static/star.json");

module.exports = {
    devServer: {
        port: 8080,
        before(app) {
            app.get("/star", (req, res, next) => {
                res.json(star);
            });
        }
    }
};