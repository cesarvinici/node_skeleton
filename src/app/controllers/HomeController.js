/**
 * This is your home controller, 
 * in here you can define all methods that will be called in your routes.js
 * 
 * You can define more Controllers just by creating new controlers 
 * in this folder and calling on routes.js * 
 */
class HomeController{

    async home(req, res) {
        return res.json('Worked!');
    }


}

module.exports = new HomeController();