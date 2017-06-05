#SECURACCOUNT (securaccount.com)

[https://pre-deploy-securaccount.herokuapp.com](https://pre-deploy-securaccount.herokuapp.com)

The pre-deployment on Heroku now loads
Briant's index.html page (splash) and then
links into the mock-up "Login or Signup" page
created by Wheatley, mainly for testing but we'll
use it as a model for the other pages.

-- Complete the thematically unified background page
   by combining the mock up with the themed visual content
   (we can then use handlebars to change that one page
    into our other screens).

-- code a working authorization/authentication sequence;
   working meaning that the server runs without throwing errors
   and the login information input by the user in the login fields
   is serialized into a POST request that gets a token
   basically a modification of the
   [https://www.npmjs.com/package/jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
   activity from May 30th.