# Getting Lights Out Up and Running

* Clone the repository to your local machine

  ```git clone https://github.com/garrettodom97/lights-out.git```
  
* Navigate to the project directory

  ```cd lights-out```
  
* Start the server

  ```npm start```
  
* Navigate to ```localhost:3000``` in a browser of your choice

* Enjoy Lights Out!

# Next Steps

There are quite a few things I would liked to have done with this project if I had more time and were working to build something more for production. I'll detail some of those ideas here:

* Make it pretty

    Given more time, I would find an existing React component library and use it to make prettier buttons, text, modals, etc.

* Add tests

    Another simple thing to improve the app would be some basic unit tests, largely focuing around the behavior of clicking tiles and how other tiles respond.
    
* Make game start in a winnable state

    I learned the hard way that every randomly generated Lights Out board is not guaranteed to be solvable. I'd like to make sure the board starts in a solvable state,       which I believe involves some inverse matrix operations.

* Add a leaderboard

    I think it would be cool to include a very simple backend that kept track of how many moves it takes to get from a fresh board to a solve, and display the top ten     best scores (fewest moves).
