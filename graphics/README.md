##### Connor French
##### CSC 471
##### Spring 2018
**____________**
## Final Project
This is the README for my Final Project in CSC 471 Spring 2018. I chose to create an homage to classic Mario platformers with the knowledge I gained during the class.
___
### Structs
Below are the structs that were utilized throughout the program.

    typedef struct platform {
	    vec3 p;
	    bool onScreen;
    }Platform;
The `Platform` struct is used to store data necessary for keeping track of and drawing the platforms in the game. `p` stores the left-most point of the platform and `onScreen` stores whether or not the platform would be currently on screen if it were drawn.

    typedef struct enemy {
	    vec3 position;
	    int platform;
	    bool alive;
	    int direction;
	    float speed;
    }Enemy;
The `Enemy` struct is used to store data necessary for drawing and updating each of the enemies in the game. `position` stores the position of the enemy, `platform` stores which `Platform` the enemy resides on, `alive` stores the value of whether or not the enemy has been killed by the player, `direction` stores which way the enemy is currently facing, and `speed` stores the ground speed of the enemy.

    typedef struct powerup {
	    vec3 position;
	    int platform;
	    bool used;
	    int direction;
	    float speed;
    }PowerUp;
The `PowerUp` struct is used to store data necessary for drawing and updating each of the powerups in the game. `position` stores the position of the powerup, `platform` stores which `Platform` the powerup resides on, `used` stores the value of whether or not the powerup has been used by the player, `direction` stores which way the powerup is currently facing, and `speed` stores the ground speed of the powerup.

    typedef struct coin {
	    vec3 position;
	    int platform;
	    bool grabbed;
    }Coin;
The `Coin` struct is used to store data necessary for drawing and updating each of the coins in the game. `position` stores the position of each coin, 'platform' stores which `Platform` the coin is on, and `grabbed` stores whether or not the coin has been grabbed by the player.

---
### Variables
Below are the variables used to store important information for the program as well as make it a bit more readable.

##### Environment Variables
`WINDOW_HEIGHT` : specifies the height of the graphic window
`WINDOW_WIDTH` : specifies the width of the graphic window

##### Game Variables
`SCORE` : keeps track of the score of the game
`NEW_GAME` : if set, begins a new game
`GAME_END` : if set, player has finished the game
`PLATFORM_NUM` : the number of `Platforms` in the level
`ENEMY_NUM` : the number of `Enemies` in the level
`POWERUP_NUM` : the number of `PowerUps` in the level
`COIN_NUM` : the number of `Coins` in the level
`COIN_STRING_NUM` : the number of `Coins` to be drawn in a line
`X_OFFSET` : the offset from the edge of the starting `Platform` where the player will be placed initially
`Y_OFFSET` : the y-direction offset that will be used to place the camera
`START_POSITION` : the starting position of the player
`CAMERA_START_POSITION` : the starting position of the camera
`CONTROLS_ENABLED` : used to check whether or not the player is currently allowed to move
`DEAD` : stores whether or not the player is currently dead
`PAUSE` : stores whether or not the pause button is pressed
`INVULNERABLE` : stores whether or not the player has just been hit by an `Enemy`
`INVULNERABLE_CLOCK`, `INVULNERABLE_LIMIT`, `INVULNERABLE_TICK` : used to create the animation that plays after the player gets hit at increased size
`RESIZING` : checks whether the player is currently in a state of resizing (either from being hit at large or grabbing a `PowerUp` at small)
`SKYBOX_TEXTURE`, `GROUND_TEXTURE`, `ENEMY_TEXTURE`, `PLAYER_TEXTURE`, `COIN_TEXTURE` : used for storing the textures for the skybox, the `Platforms`, the `Enemies`, the player, and the `Coins`
`START_TIME` : used to begin the in-game timer
`END_TIME` : used to end the in-game timer
`TIMER` : used to store how many seconds have elapsed between `START_TIME` and `END_TIME`
`LAST_TIMER` : stores the elapsed time in the event of the game being paused
`TIME` : used to show the time to the player;
`HIGH_SCORE` : stores the high score for the currently generated level

##### Position Variables
`PLAYER` : stores the position of the player at all times
`CAMERA` : stores the position of the camera at all times
`PLAYER_HEIGHT` : stores the height of the player for collision purposes
`CAMERA_SPEED` : sets the speed of the camera for when it adjusts on each `Platform`
`CAMERA_OFFSET` : sets the boundaries for the camera

##### Platform Variables
`PLATFORMS` : stores an array of `PLATFORM_NUM` `Platforms`
`PLATFORM_GAPS` : stores an array of `PLATFORM_NUM - 1` `floats` that determine the distance between each platform
`PLATFORM_HEIGHT` : sets the height for each `Platform`
`PLATFORM_WIDTH` : sets the width for each `Platform`
`PLATFORM_GAP` : sets the default width for gaps between `Platforms`
`HEIGHT_VARIATION` : stores the maximum height difference between two adjacent `Platforms`
`PREV_PLAT` : stores the value of the `Platform` before the one the player is currently on
`CURRENT_PLAT` : stores the value of the `Platform` the player is currently on
`NEXT_PLAT` : stores the value of the `Platform` the player will be on next

##### Enemy Variables
`ENEMIES` : stores an array of `ENEMY_NUM` `Enemies`
`ENEMY_INIT` : stores an array of `ENEMY_NUM` `Enemies` identical to `ENEMIES` for reinitialization purposes
`ENEMY_INITIAL_SPEED` : stores the initial base speed for `Enemies`
`ENEMY_SPEED` : stores the speed for each `Enemy`
`ENEMY_HITBOX_WIDTH` : stores the hitbox width for `Enemies`
`ENEMY_HITBOX_HEIGHT` : stores the hitbox height for `Enemies`
`ENEMY_HITBOX_X_OFFSET` : stores the x-offset for the `Enemy` hitbox
`ENEMY_HITBOX_Y_OFFSET` : stores the y-offset for the `Enemy` hitbox
`ENEMY_SCALE` : stores the scale for each `Enemy`

##### Powerup Variables
`POWERUPS` : stores an array of `POWERUP_NUM` `PowerUps`
`POWERUP_INIT` : stores an array of `POWERUP_NUM` `PowerUps` identical to `POWERUPS` for initialization purposes
`POWERUP_HITBOX_WIDTH` : stores the hitbox width for `PowerUps`
`POWERUP_HITBOX_HEIGHT` : stores the hitbox height for `PowerUps`
`POWERUP_HITBOX_X_OFFSET` : stores the x-offset for the `PowerUp` hitbox
`POWERUP_HITBOX_Y_OFFSET` : stores the y-offset for the `PowerUp` hitbox
`POWERUP_SCALE` : stores the scale for each `PowerUp`

##### Coin Variables
`COINS` : stores an array of `COIN_NUM * COIN_STRING_NUM` `Coins`
`COIN_HITBOX_WIDTH` : stores the hitbox width for `Coins`
`COIN_HITBOX_HEIGHT` : stores the hitbox height for 'Coins'
`COIN_HITBOX_X_OFFSET` : stores the x-offset for the `Coin` hitbox
`COIN_HITBOX_Y_OFFSET` : stores the y-offset for the `Coin` hitbox

##### Player Status Variables
`WALK_SPEED` : stores the value for speed if the player is walking
`RUN_SPEED` : stores the value for speed if the player is running
`SPEED` : stores the player's current speed
`DIRECTION` : stores which way the player is currently facing
`LEFT` : stores whether or not the player is going left
`RIGHT` : stores whether or not the player is going right
`JUMP` : stores whether or not the player has jumped
`BOUNCE` : stores whether or not the player has just jumped off of an `Enemy`
`GROUNDED` : stores whether or not the player is currently on the ground
`RUNNING` : stores whether or not the player is currently running
`SIZE_SMALL` : stores the value for scaling the player when they are not powered-up
`SIZE_LARGE` : stores the value for scaling the player when they are powered-up
`PLAYER_SIZE` : stores the current value of the player's size
`SIZE_COEFFICIENT` : stores the value for scaling up the player's hitbox when powered-up
`POWERED` : stores whether or not the player has powered-up
`BOUNCING` : stores whether or not the player is in the process of jumping off of `Enemies`
`FALLING` : stores whether or not the player is in the air without jumping

##### Animation Variables
`TURN_SPEED` : stores the speed that the player turns around
`ARM_SWITCH` : stores whether or not the arms and legs of the player have reached their maximum rotations
`ARM_ANGLE` : stores the current angle of the player's right arm
`LEFT_ARM_ANGLE` : stores the current angle of the player's left arm
`LEG_ANGLE` : stores the current angle of the player's legs
`ARM_SPEED` : stores the speed that the arms and legs of the player rotate

##### Mathematical Constants
`PI` : used in rotation calculations
`GRAVITY` : the constant used for gravity calculations
`JUMP_STRENGTH` : the constant used for determining how high the player can jump
`ENEMY_KILL_JUMP` : the constant used for determining how high the player jumps off of an `Enemy` without holding a jump button
`ENEMY_BOUNCE` : the constant used for determining how high the player jumps off of an `Enemy` while holding a jump button
`JUMP_SPEED` : stores the value for the speed of the player's jump
`DEATH_OFFSET` : stores how far the player can drop below a `Platform` before it can no longer land on the `Platform`
`SKYBOX_SIZE` : sets the size of the skybox for the scene
`HORIZON_ADJUST` : sets the increment for adjusting the camera when the player lands on a new `Platform`
`DEATH_Z` : sets how far forward the player flies when the player dies
`DEATH_ROTATE` : used to rotate the player upon their death in the animation
`DEATH_MARGIN` : stores how far the player can fall before the death animation is played
`ENEMY_POINTS` : sets the base value of points the player gets if it kills an `Enemy`
`POWERUP_POINTS` : sets the value of points the player gets if it contacts a `PowerUp`
`COIN_POINTS` : sets the value of points the player gets if it contacts a `Coin`
`MULTIPLIER` : stores the multiplier for bouncing off of multiple `Enemies` in a row
`TIME_BONUS` : stores the base value of bonus points the player gets per extra second remaining
`ENEMY_BONUS` : sets the value of bonus points the player gets if they complete the level and kill all `Enemies`
`COIN_BONUS` : sets the value of bonus points the player gets if they complete the level and grab all `Coins`
`TIME_MAX` : sets the maximum time value to be used for bonus time points

##### Gamepad Variables
`GAMEPAD` : creates an instance of a `Gamepad`, a standard class used with XInput controllers 
`WAS_CONNECTED` : used to store if the `Gamepad` was connected previously
`JUMP_BUTTON` : checks if the jump button on the controller is pressed
`X_DEADZONE` : sets the deadzone for the `Gamepad's` control stick
`PAUSE_BUTTON` : checks if the pause button on the controller is pressed

---
### Functions
Below is a complete list of the functions in this program, barring the standard ones that came with the `Gamepad` class from XInput.

##### `getArmAngle()`
This function uses `ARM_ANGLE`, `LEFT_ARM_ANGLE`, and `LEG_ANGLE` to animate the arms and legs of the player while running. The arms and legs also pose if the player is currently jumping.

##### `checkJump()`
This function uses 'JUMP' to check whether or not the player has jumped, and also sets `GROUNDED`, `JUMP_SPEED`, and other variables to run most of the functionality involving `GRAVITY` calculations and vertical positioning.

##### `checkMoving()`
This function uses `SPEED`, `RUN_SPEED`, `WALK_SPEED`, `LEFT`, and `RIGHT` to move the player horizontally and set the variables responsible for movement.

##### `checkTurn()`
This function uses `LEFT`, `RIGHT`, `DIRECTION`, and `TURN_SPEED` to determine how the player should be rotated and which direction it is facing and whether or not the player's turning animation needs to be played.

##### `generatePlatforms()`
This function uses `PLATFORMS`, `PLATFORM_NUM`, and `PLATFORM_GAPS` to instantiate the `Platforms` into the `PLATFORMS` array with a gap of `PLATFORM_GAP` between them and a random difference in height between `0` and `HEIGHT_VARIATION`.

##### `getCurrentPlat()`
This function gets the current platform that the player is on and stores it into `CURRENT_PLAT`. If the previous and next platforms exist, they are stored into `PREV_PLAT` and `NEXT_PLAT`, respectively. If the player is above a gap, then `CURRENT_PLAT` is set to `-1`.

##### `checkPlatOnScreen()`
This function is utilized to help optimize the program and prevent slowdowns from attempting to draw too many things at once. It takes advantage of the `onScreen` attribute of the `Platforms` to determine which `Platforms` should actually be visible on the screen.

##### `adjustCamera()`
This function takes advantage of the `CAMERA_OFFSET` and the `CAMERA_SPEED` to determine how the camera should adjust vertically to match the player's position and ensure that the level is properly displayed on screen.

##### `checkReset()`
This function checks to see whether or not a `NEW_GAME` has been initiated and, if it has, resets all necessary variables to their initial values.

##### `checkFall()`
This function checks if the player is currently `FALLING` and ensures that it does not hang in the air for any reason by double-checking that the `GRAVITY` is still taking effect on the player.

##### `generateEnemies()`
This function generates the `Enemies` at the beginning of the game and gives each of them a random `position` on a random `platform` with a random `speed` based off of `ENEMY_SPEED` and a random `direction` and sets all of their `alive` attributes to `true`.

##### `reloadEnemies()`
This function reloads all of the `Enemies` in `ENEMIES` by copying them over from the `ENEMY_INIT` array that was created at the beginning of the game.

##### `generatePowerUps()`
This function generates the `PowerUps` at the beginning of the game and gives each of them a random `position` on a random `platform` with a `speed` of `0` and a random `direction` and sets all of their `used` attributes to `false`.

##### `reloadPowerUps()`
This function reloads all of the `PowerUps` in `POWERUPS` by copying them over from the `POWERUP_INIT` array that was created at the beginning of the game.

##### `generateCoins()`
This function generates the `Coins` at the beginning of the game and gives each of them a random `position` above a random `platform` and sets all of their `grabbed` attributes to `false`.

##### `reloadCoins()`
this function reloads all of the `Coins` in `COINS` by resetting all of their `grabbed` attributes to `false`.

##### `enemyMove()`
This function checks the `direction` of each `Enemy` in `ENEMIES` and updates their `position` by adding the prooduct of their `direction` and their `speed`.

##### `checkHit()`
This function runs through each `Enemy` in `ENEMIES` and checks if the player occupies the same x-position as an `Enemy`. If it does, then it checks if the player's y-position is sufficiently above the `Enemy's` y-position. If it is, then the player is credited as jumping on the `Enemy` and it checks if the player has bounced off another `Enemy` and adds to the `SCORE` accordingly and `alive` is set to `false`. If it is not above the `Enemy`, then it checks if the player is powered-up. If it is, then the resizing animation is played and the player gets smaller. If not, then `DEAD` is set to true and the death animation is played.

##### `checkPowerUpHit()`
This function checks if the player occupies the same x-position as any `PowerUp` in `POWERUPS`. If it does, then it checks `PLAYER_SIZE` to see if the player needs to be resized and adds `POWERUP_POINTS` to the `SCORE` and sets `used` to `true`.

##### `checkCoinHit()`
This function checks if the player occupies the same general x and y-positions as any 'Coin' in 'COINS'. If it does, then `COIN_POINTS` is added to `SCORE` and `grabbed` is set to `true` for the `Coin`.

##### `continueFalling()`
This function checks if the player has stalled in the air for any reason. This was an infrequent problem with one other function, but it is simply solved by decreasing the player's y-position by `JUMP_SPEED` and decreasing `JUMP_SPEED` by `GRAVITY`.

##### `checkResize()`
This function runs the routine that resizes the player in the event of grabbing a `PowerUp` or getting hit by an `Enemy`.

##### `checkDead()`
This function runs the death animation of the player if `DEAD` is set to `true`.

##### `getCurrentInformation()`
This function currently displays the current relevant game information to the console window, including the number of `Platforms` remaining, the current `SCORE`, and the `TIME`.

##### `checkHighScore()`
This function runs on completion of the game and checks to see if the player has achieved a high score, which would then be stored in `HIGH_SCORE`.

##### `checkEndGame()`
This function checks if the game has finished and then displays the `SCORE` and all of the bonuses earned, as well as a breakdown of all of the points earned in the game.

##### `keyCallback(GLFWwindow *window, int key, int scancode, int action, int mods)`
This function is used to take keyboard input from the user. If any of the directional buttons or their letter equivalents are pressed, then the corresponding variable is set (`LEFT`, `RIGHT`, `JUMP`). If the `SPACE` key is hit as well, `JUMP` is set, and `RUNNING` is set by holding either of the `SHIFT` keys. `PAUSE` is set if the `P` key is hit, and a `NEW_GAME` is initiated if the `N` key is hit.

##### `mouseCallback(GLFWwindow *window, int button, int action, int mods)`
This function is largely unused in this program. It is a holdover from the Lab 6 code provided by Professor Eckhardt that this project was originally based on.

##### `resizeCallback(GLFWwindow *window, int width, int height)`
This function resizes the window to the appropriate size.

##### `init(const std::string& resourceDirectory)`
This function initializes the programs used to draw each of the elements of the program. It creates the programs `player`, `enemy`, `powerup`, `coin`, `ground`, and `skybox`.

##### `initGeom(const std::string& resourceDirectory)`
This function initializes each of the geometric shapes used in the program - the `cube`, `sphere`, and `cylinder`. It also loads the textures for each of the programs and runs `generatePlatforms()`, `generateEnemies()`, `generatePowerUps()`, and `generateCoins()` to generate all of the objects in the scene.

##### `render()`
This function does the majority of the work in the program. It runs `checkDead()`, then draws the skybox, the ground `Platforms`, the `Enemies`, the `PowerUps`, the `Coins`, and the player using various hierarchical modeling techniques. Then, it runs `checkReset()`, `getCurrentPlat()`, `checkPlatOnScreen()`, `checkTurn()`, `checkMoving()`, `checkJump()`, `getArmAngle()`, `adjustCamera()`, `checkFall()`, `checkPowerUpHit()`, `checkCoinHit()`, `checkResize()`, `enemyMove()`, `checkHit()`, `continueFalling()`, `getCurrentInformation()`, and `checkEndGame()`.

##### `controllerEvents(WindowManager *windowManager)`
This function behaves similarly to the `keyCallback` function except that it takes in all of its input from the XInput controller that has been connected.

##### `main(int argc, char *argv[])`
This function runs the main brunt of the program, running the `render` function and all of the input functions as well.
