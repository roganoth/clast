# clast
Friend Finder

This app gives the user a survey asking various questions about topics that are assumed they like and a gradient answer providing how much they agree with the assumtion. These values - along with the name and a link to a photo of themselves - are stored in an object and posted to the friendsData.js for storage. This database also has a number of sample potential friends for initial use. Once the new person is posted to the database, an ajax call is made to make a comparison on each person against the new person returning the best match (smallest difference number) in a modal.

The logic of the math is that the program will loop through each friend in the database and for each loop through the nested scores array and subtracting all the absolute values to find the overall difference in scores. This is then added to an empty variable and compared against a max number and if it is lower will become the new baseline and continue on for the loop.

The problem I am facing is that the program stops responding to the browser after the post. After trying a number of console logs at different breakpoints it appears that the information is being stored correctly, pushed correctly, and logged in the terminal but never making it to the browser console. And because that is where the program is stalling nothing after is working. I am unsure what is causing this or how to move forward.