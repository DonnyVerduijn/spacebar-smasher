# spacebar-destroyer

little online game using socket.io where players battle eachother with the amount of spacebar hits they make

## TODO

- attach handler to reconnect button 3

- implement availableUsersList
  - sort users by most recently created
  - only show users that are NOT inside a game
  - show name and fight button
  - back and refresh button

- LobbyWindow implementation
  - remove joined at attribute
  - show username and user color attribute
  - users can select their own color
  - users cannot use the same color at once
  - lobbyWindow leave/exit button is always exit
  - startbutton only enabled after all users have chosen their color

- implement highscoreList 1
  - show 10 best highscores 1
  - include back button 1

- implement gameOverScreen 1
  - rank users by key presses
  - include quit button 1
    - remove game instance 1
    - remove users 1
    - redirect to main
  - include restart button 3
    - reset game state and navigate to lobby 3

- implement gameWindow 1
  - implement game logic 1
  - client-side and server-side 1

- implement User 1
  - translate score to userir life's the 1
  - show user name under bar 1
  - show average speed 1

- implement InfoPanel 2
  - show timeElapsed 2