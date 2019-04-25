"# MobileAppProject - Conor Shortt #" 

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
	generates random users. User picture, registration date, first and last name , address , and post code which I modified to resemble facebook likes.