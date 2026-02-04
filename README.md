# Project Title
Summer Chores
# Description
The project contains two JavaScript files where I practiced how to handle asynchronous operations with 
* Callbacks as arguments
* Chains of Promises with then() and catch()

Someone needs to complete the next list of summer chores. There is a strict routine to complete each activity:

1.	Mowing the yard.
2.	Weed eating the edges of the house and fence line.
3.	Trimming the hedges.
4.	Collect fallen wood for summer night fires.
5.	Water the garden.

Since there are a lot of chores to do, the person naturally gets tired from completing their tasks. If he/she gets too tired, he/she may fall asleep before completing all their chores. So, I implemented a variable that generates a random number, which represents the energy, and then each chore reduces a part of it. If the person has enough energy to complete the task, they will complete them successfully. Otherwise, if there is not enough energy, the person will fall asleep after the last task they completed.
# Usage
Once the project was cloned, you need to open the terminal and type:
* The command node callbackVersion.js to run the callbackVersion.js file and find out if the person completed all their tasks.
* The command node PromiseVersion.js to run the PromiseVersion.js file and find out if the person completed all their tasks.