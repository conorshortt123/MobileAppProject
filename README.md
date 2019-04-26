"# MobileAppProject - User Guide - Conor Shortt #" 

INSTRUCTIONS:
- Tap 'proceed' to navigate from the Welcome page to the Home page.
- Home page has 3 buttons, 'Register', 'Login', 'Logout', and 'Clear Storage'. User can register and then log in using their details to     display username on top left on page and high score on top right. User can also log out to hide high score and username. Clear storage     to get rid of anything saved in local storage (username, password, high score).
- Game page displays username on top left and current cash on top 	right (cash starts at 500). The user can adjust a slider to set the       amount they wish to bet, or user can tap the badge to enter bet manually. The user then hits the "+" button located at the right hand side of the page. This is a Floating Action Button   and allows the user to choose a number from 1-6 to guess what side the dice will land on. The user then shakes the phone and it will       generate a dice face, if the user guesses correctly their total cash is increased by their bet amount, if they guess incorrectly they     lose half of their bet amount. The phone also vibrates upon being shook. If total cash exceeds high score then total cash is set to high   score in local storage and displayed on the home page.
- Users page retrieves json data from a user generator api, parses it and displays it to the screen. Information such as first name, last   name, registration date, and thumbnail pic is displayed.

COMMIT INFORMATION:

- 	Commit 1: Registration section of the app finished, user can now log in/register and with the use of two way data binding,
	display the username at the top of the app. Username and password are saved using the local storage plugin.
-	Commit 2: Installed the "shake" plugin which will be later used to roll the dice. For now it simply alerts "shake!" to the phone screen
	when the accelerometer exceeds the default sensitivity of 40.
-	Commit 3: Started working on Game page. Added a slider to select the amount of cash to bet. User starts with a max of 500.
	Used a FAB (Floating Action Button) for the user to guess the number of which the dice will land on. Also added a default image and
	currently are working on sizes etc.
-	Commit 4: Shake plugin now generates a random number between 1 and 6 which displays the subsequent dice image. 
	User now gains the amount they bet into their total cash.
	User loses half of their bet if they guess incorrectly.
	Game ends and navctrl pushes back to Welcome page if total cash goes below 5.
-	Commit 5: Some tweaks to home page, such as storing high score and displaying it upon login.
	Game page UI improved slightly with some color additions and margins. Alert when choice is selected.
	Added "Users" page. Which utilizes HttpClient and requests from the url https://randomuser.me/api/?results=30. This is a simple api that
	generates random users. User picture, registration date, first and last name , address , and post code which I modified to resemble     facebook likes.
-	Commit 6: Added vibration plugin, phone now vibration when dice is rolled/shook.
-	Commit 7: Badge that displays the user's bet amount now contains a button that when pressed triggers an AlertController which pops up on screen
	and allows the user to enter a manual bet instead of using the slider. User page now contains a LoadingController which triggers when first
	entering the User page. This is to allow the http get request to load before the user does anything.
-	Commit 8: Added comments to all .ts files and some html comments to the main html components. Also cleaned up code by putting code from
	main code into seperate functions, making it easier to read.