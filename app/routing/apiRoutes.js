var friendsData = require("../data/friendsData");

module.exports = function(app) {
    app.get("/api/friends", function(req,res){
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res){
        console.log("dude");
        console.log(friendsData);
        friendsData.push(req.body);
        console.log(friendsData);
    });
};