# RideMyWay
Ride-My-Way App is a carpooling application that provides drivers with the ability to create ride offers and passengers to join available ride offers.


  ### Pivotal Tracker
    * Project is currently being built with the Project Management Tool, Pivotal Tracker. You can find the template at [https://www.pivotaltracker.com/n/projects/2177993](https://www.pivotaltracker.com/n/projects/2177993)



  ### Server
    * [NodeJS](https://nodejs.org/) - Javascript Runtime engine (Chrome V8)
    * [ExpressJs](https://expressjs.com/) - JS Web Application framework


  ### Continuous Integration
    * Travis CI & Codeclimate for test automation
    * Coveralls for test coverage report
    * Hounds CI for linting report

  ### Test-Driven Development
    * [Mocha](https://mochajs.org/) & [Chai](http://chaijs.com/) for api route testing  

  ### Linter
    * [ESLint](https://eslint.org/) - Linter Tool

  ### Transpiler
    * Babel




## Installation.
  * Install [Nodejs](https://nodejs.org/en/download/)  
  * Clone this repo ``` git clone https://github.com/rafmme/RideMyWay.git ```
  * Run ```npm install``` to install the required dependencies
  * Run ```npm test``` to fireup the tests
  * Navigate to http://localhost:3000/ or http://localhost:5000/ if .env file isn't provided


## Available Task Runners
  ### Production
    * start → required for starting the server  

  ### Development
    * lint → runs the linter on .js files    


## Available APIs
- API routes for users to sign in and sign up to the application
  * POST : ```/api/v1/auth/signup```  (username, fullname, password, email, address, phone number, role, profile image)
  * POST : ```/api/v1/auth/login``` (email/username, password)  
  
- An API route to fetch all ride offers 
  * GET : ```/api/v1/rides```

- An API route to fetch a single ride offer
  * GET : ```/api/v1//rides/<rideId>```

- An API route to create a ride offer
  * POST : ```/api/v1//rides```

- An API route to make a request to join a ride 
  * POST : ```/api/v1/rides/<rideId>/requests```


## License
[MIT License](https://github.com/rafmme/RideMyWay/blob/master/LICENSE)