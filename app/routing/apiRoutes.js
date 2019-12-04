var friendsData = require("../data/friendsData");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        friendsData.push(req.body);
        console.log(friendsData);
        // var newLen = friendsData.length - 1;
        var newPerson = friendsData[friendsData.length - 1];
        var bestScore = 99999;
        var bestFriend;
        // var newPersonTotal;
        // for (d = 0; d < newPerson.scores.length; d++) {
        //     newPersonTotal += newPerson.scores[d];
        // }
        for (i = 0; i < friendsData.length - 1; i++) {
            if (friendsData[i].name != newPerson.name) {
                var thisFriendScore = 0;
                // var scoreSum;
                for (a = 0; a < friendsData[i].scores.length; a++) {
                    var b = parseInt(newPerson.scores[a]);
                    // var b = parseInt(newPersonTotal);
                    // scoreSum += friendsData[i].scores[a];
                    var c = parseInt(friendsData[i].scores[a]);
                    // var c = parseInt(scoreSum);
                    thisFriendScore += Math.abs(b - c);
                    // console.log(b);
                    // console.log(c);
                    console.log(thisFriendScore);
                    console.log(a.toString());
                }
                if (bestScore > thisFriendScore) {
                    bestScore = thisFriendScore;
                    bestFriend = friendsData[i];
                    console.log(bestFriend);
                };
                // else{ 
                //     console.log("no match");
                // };
                console.log(bestScore);
            };
        };
        console.log(bestFriend);
        res.json(bestFriend);
        res.status(200).end();

    });
};