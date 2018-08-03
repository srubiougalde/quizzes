# Quizzes (Countdown Timer & Coin Flip)

## Set up the environment
1. Install `git`. Instruction can be found here: `https://git-scm.com/`.
2. Install `nodejs`. Download recommended version from `https://nodejs.org/` and install it.
    * Please note: nodejs version should be at least 6.6.0 or later `> node -v`.
3. Checkout project from git repository: `> git clone https://github.com/srubiougalde/quizzes.git`.

_______________________

## Countdown Timer
### Requirements
The countdown should update every second.
    You may use any JS framework, or no framework at all
    Please write CSS without a framework
### Implementation details
- Used Angular framework, to create the project I used Angular CLI `https://cli.angular.io/` so I could focus on the quizz solution and take advange of a fully set up of the project
- For demo purposes I set the target time to 24hrs, that is a property of my app component so one improvement will be either let the user set the value from the UI or initialize it from passing a param to the constructor
- Used view-port in the styles instead of pixels so elements are responsive
- Counter uses recursion, waiting one second between call, and the condition that stops it is when the target time was reached. In case you want to restart the counter the page has to be reloaded by this also can be improved by adding a restart button in the UI
## Serve the application
1. Go to the project directory.
    * `> cd countdown` for countdown timer
2. Run `> npm install` for installing all new dependencies from the project.
3. Run `> ng serve --open`. This command launches the server, watches your files, and rebuilds the app as you make changes to those files. Using the --open (or just -o) option will automatically open your browser on `http://localhost:4200/`.

_______________________

## Coin Flip
### Requirements
You must implement a randomNumber(n) function that generates a random number greater than or equal to 0, and less than input n.
- n must be greater than 0
- n must be less than 1,000,000
- Your only source of randomness must be the provided flip() function
- You cannot use Math.random in your implementation
- You can use Google to figure out how to do this
```
function flip() {
  return Math.random() >= 0.5;
}
```
```
function randomNumber(n) {
  /*
    Your implementation, using the flip() function
  */
  
  // Returns a number between [0, n)
}
```
### Implementation details
- Created a basic page to test my randomNumber function
- Since the requirement of this quizz was to provide the randomNumber funtion I used bootstrap to create the UI taking advantage of the components that are provided
## Serve the application
1. Go to the project directory.
    * `> cd coinflip` for countdown timer
2. Run `> index.html` will automatically open your browser with a random number preloaded.

