# clast
Friend Finder

This app gives the user a survey asking various questions about topics that are assumed they like and a gradient answer providing how much they agree with the assumtion. These values - along with the name and a link to a photo of themselves - are stored in an object and posted to the friendsData.js for storage. This database also has a number of sample potential friends for initial use. Once the new person is posted to the database, an ajax call is made to make a comparison on each person against the new person returning the best match (smallest difference number) in a modal.

The logic of the math is that the program will loop through each friend in the database and for each potential friend there is a nested loop that will check individual scores against the baseline, the newest object in the array, added the absolute values of all the differences to a new score. If that score is lower than the previous score (start of 9999) that value will be the new bench mark and continue on through the initial loop. The best friend vairable is scoped outside both routes so it can be seen by both and is sent for the get request.

Once the survey.html recieves the json of the best friend match a function is called to toggle the modal which then has the contents appened by the mathing name and photo. I used css at the bottom to resize the image to the size of the modal. This function also clears the modal first in case the user changes answers and tries again.

For some reason the emptying of the choices and name and photo link does not work, it is unclear why at this time.

