authRouter
-Post /singup
-Post /login
-Post /logout

profileRouter
-Get /profile/view
-Patch /profile/edit
-Patch /profile/password

connectionRequestRouter
-Post /request/send/interested/:userId
-Post /request/send/ignored/:userId

-Post /request/send/accepted/:userId
-Post /request/send/rejected/:userId

UserRouter
-Get /connections
-Get /request/recived
Get /feed -Getget you the profiles of other users on platform

status:ignore,interested.accepted,rejected

-Get /
