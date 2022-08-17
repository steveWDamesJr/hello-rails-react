![](https://img.shields.io/badge/Microverse-blueviolet)

# Hello-Rails-React

This app connects RAILS with REACT to display a random greeting in our browser. 

Enjoy your Greeting!

## Built With

- Ruby: version 3.02
- Ruby on Rails
- Terminal
- IRB
- Rubocop (linters)
- PostgreSQL
- REACT
- REDUX
- Thunk

## Milestones

- [x] Milestone 1: Create a new Rails app called 'hello-rails-react'
- [x] Milestone 2: Initialize the project with Git 
- [x] Milestone 3: Install needed node dependencies 
- [x] Milestone 4: Create a babel.config.js in the root folder of the project
- [x] Milestone 5: Update webpack.config.js to include the babel loader 
- [x] Milestone 6: PostgreSQL database is set up
- [x] Milestone 7: Create a table for storing messages and create 5 different greetings
- [x] Milestone 8: Create an API endpoint that selects a random greeting from the table
        - Create controller with an action and Rails route
- [x] Milestone 9: Create a static view that is the root of the app
- [x] Milestone 10: Create the App component with react-router and render it in static view
- [x] Milestone 11: Create the Greeting component that displays a greeting
- [x] Milestone 12: Create a store, an action, and a reducer that connects to the API endpoint to get the random greeting
- [x] Milestone 13: Display the random greeting in the Greeting component
- [x] Milestone 14: Debug linter errors


## Getting Started

To get a local copy up and running follow these simple example steps.


## Pre-requisites
Make sure you have Ruby and Rails installed on your computer. If not, you can follow this [tutorial](https://guides.rubyonrails.org/getting_started.html#creating-a-new-rails-project) to install them.

If you don't have PostgreSQL installed, you can follow this [tutorial](https://www.postgresql.org/download/) to install it.

If you don't have yarn installed, you can follow this [tutorial](https://classic.yarnpkg.com/en/docs/install/#debian-stable) to install it.
  
## Usage
In your terminal, navigate to your current directory and run this code

`git clone git@github.com:steveWDamesJr/hello-rails-react.git`

Then run:

`cd hello-rails-react`

Open the project in your favorite code editor. `code .` for VS Code.

  - Use the command `bundle install` or just simply `bundle` to install all project dependencies.
  - Run `yarn install` to install all the JavaScript dependencies.
  - Run `yarn build:css` to build the CSS files.
  - Run `rails db:create db:migrate` to create the database and run migrations.
  - You might need to supply a username and password for your PostgreSQL database if you run into an error with the previous step.
  - Simply navigate to `config/database.yml` and add your username and password to the `username` and `password` fields.
  - Type in the terminal `rails s` to start the server then click on `http://127.0.0.1:3000`
  - Enjoy your Budget App!
  
Start terminal, webpack, and Tailwind transpilers:

`./bin/dev`

Copy and paste in the browser or click `http://127.0.0.1:3000` in the terminal output, and enjoy as your app opens in the web browser 


## Run Linters:

### To run rubocop we use:

`rubocop`

### To autocorrect offenses with rubocop we use:

`rubocop --auto-correct-all` or
`rubocop -A`

### Run linter for styling

`npx stylelint "**/*.{css,scss}"`

### To autocorrect offenses with stylelint we use

`npx stylelint "**/*.{css,scss}" --fix`


## Testing

   Within the projects working directory run test using the following command:
  `bin/rails test test` and the name of the `.rb` directory you want to test, in the terminal.


## Author

👤 **STEVE W DAMES JR**

- GitHub: [@githubhandle](https://github.com/steveWDamesJr)
- Twitter: [@twitterhandle](https://twitter.com/Steve88312331)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/steve-w-dames-jr/)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/steveWDamesJr/hello-rails-react/issues).


## Show your support

Give a ⭐️ if you like this project!


## Acknowledgments

- Hat tip to anyone whose code was used


## 📝 License

This project is [MIT](./MIT.md) licensed.
