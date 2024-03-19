# Aireline backend using express js and node.


## Project Setup:


1. Clone the repo on your local system.
2. run command `npm install` to install packages and requirements.
3. Than you have to create config.json file inside the `/src/config/` There you have to put the mysql db configuration.

ie:-
`{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}`

Here you have to put your sql server username and password with host.

4. Now outside the src folder create .env file there put PORT = `Desired port number | 8080`.

