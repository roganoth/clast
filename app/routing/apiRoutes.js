var friendsData = require("../data/friendsData");

module.exports = function (app) {
    var bestFriend;
    app.get("/api/friends", function (req, res) {
        res.json(bestFriend);
    });

    app.post("/api/friends", function (req, res) {
        friendsData.push(req.body);
        console.log(friendsData);
        var newPerson = friendsData[friendsData.length - 1];
        var bestScore = 99999;
        for (i = 0; i < friendsData.length - 1; i++) {
            if (friendsData[i].name != newPerson.name) {
                var thisFriendScore = 0;
                for (a = 0; a < friendsData[i].scores.length; a++) {
                    var b = parseInt(newPerson.scores[a]);
                    var c = parseInt(friendsData[i].scores[a]);
                    thisFriendScore += Math.abs(b - c);
                    console.log(thisFriendScore);
                    console.log(a.toString());
                }
                if (bestScore > thisFriendScore) {
                    bestScore = thisFriendScore;
                    bestFriend = friendsData[i];
                    console.log(bestFriend);
                };
                console.log(bestScore);
            };
        };
        console.log(bestFriend);
        res.json(bestFriend);
        res.status(200).end();
    });
};