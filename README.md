# spacebar-destroyer

little online game using socket.io where players battle eachother with the amount of spacebar hits they make

## TODO

- fix missing username (from other users) in userlist 1
- attach handler to reconnect button 3
- remove game instance when owner quits 1
- remove user from game when browser window is refreshed or quitted
- remove game instance when navigating back on NewGameWindow 1
- add duration to newGameWindow 3
- reset state on reconnect 1
- create failsafe send method on server (when nodes do not exist) 1

- implement highscoreList 1
  - show 10 best highscores 1
  - include back button 1

- implement pauseScreen (listen on escape) 3
  - include quit button and resume button 3
  - include restart button for owner 3

- implement gameOverScreen 1
  - rank users by average speed 1
  - include quit button 1
    - remove game instance when owner quits 1
    - remove users when others quit 1
  - include restart button for owner 3
    - reset game state and launch new game 3

- implement gameWindow 1
  - implement game logic 1
  - client-side and server-side 1

- implement User 1
  - translate score to user object height 1
  - show user name under bar 1
  - show average speed 1

- implement InfoPanel 2
  - show timeElapsed and time remaining 2
  - support with bar? 2