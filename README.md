
<p align="center"><img width=75% src="https://raw.githubusercontent.com/trunkslamchest/mod3_project/frontend-0.1/src/assets/spacebar_smasher_logo.png"></p>

<p align="center">
  <img align="center" src="https://img.shields.io/badge/CSS-3.0-1572B6">
  <img align="center" src="https://img.shields.io/badge/HTML-5.2-E34F26">
  <img align="center" src="https://img.shields.io/badge/Javascript-1.8.5-F7DF1E">
  <img align="center" src="https://img.shields.io/badge/Postgresql-12.1-336791">
  <img align="center" src="https://img.shields.io/badge/React.JS-16.12.0-61DAFB">
  <img align="center" src="https://img.shields.io/badge/Ruby-2.6.5-CC342D">
  <img align="center" src="https://img.shields.io/badge/Ruby%20On%20Rails-6.0.2.1-cc0600">
</p>  

<p align="center">
  <a href="https://github.com/trunkslamchest/mod3_project/tree/frontend-0.31"><img align="center" src="https://img.shields.io/badge/Latest%20Frontend%20Repository-0.31-000000"></a>
  <a href="https://github.com/trunkslamchest/mod3_project/tree/backend-0.3"><img align="center" src="https://img.shields.io/badge/Latest%20Backend%20Repository-0.3-000000"></a>
</p> 

<p align="center">
  <img align="center" src="https://img.shields.io/badge/Status-Work%20In%20Progress-000000">
</p>  

# Contents
- [Introduction](#introduction)
  - [Description](#description)
  - [Key Features](#key-features)
  - [Goals](#goals)
  - [Challenges](#challenges)
- [Demo](#demo)
- [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [First Start](#first-start)
- [Summary Of Files](#summary-of-files)
  - [Internal File Structure](#internal-file-structure)
- [Credits](#credits)
- [Contact](#contact)

&nbsp;

# Introduction
  ### Description
Spacebar Smasher is an interactive game where a player tries to press the spacebar as many times as possible in 30 seconds, after which they can submit their score and name to a leaderboard, which is then persisted throughout the application.
  
  ### Key Features
  - Competitive gameplay designed to encourage competition
  - Single Page Single Interaction Application
  - Easy to Play, Difficult to Master
  - Logging of player scores
  - Power Meter that fluctuates based on repetitions per keypress
  - Fun for the whole family
  
  ### Goals
  The two main goals of the project is to develop a Single Page Single Interaction Application, as well as to test my abilites to create as much engagement from a user with as little interaction as possible.
  
  ### Challenges
  - Develop the majority of the application within 10 days
  - Work together with a single team member to make sure all deliverables were met and no overlaps in workflow occured
  - Create a positive user feedback through a creative uses of condtional rendering and event listeners that encouraged repetitive engagement
  - Design then redesign all CSS elements and animations to non-intrusively appeal to different userbases and demographics
  - Refactor the application to utilize React.js instead of vanilla Javascript
  - Refactor the application to utilize Node.js instead of Ruby on Rails (TBA)
  - Deployment
  
&nbsp;

<a href="https://github.com/trunkslamchest/mod3_project/blob/master/README.md#contents"><img src="https://img.shields.io/badge/^-Back%20To%20Top-000000"></a>

&nbsp;

# Demo

<p align="center">
  <a href="https://www.youtube.com/watch?v=h2Pfk5HSqjY" target="_blank">
    <img align="center" src="https://img.youtube.com/vi/h2Pfk5HSqjY/0.jpg">
  </a>
</p>

&nbsp;

<a href="https://github.com/trunkslamchest/mod5_project_backend/blob/master/README.md#contents"><img src="https://img.shields.io/badge/^-Back%20To%20Top-000000"></a>

&nbsp;

# Installation
  ### Prerequisites
  Spacebar Smasher is built using React, Ruby, Ruby on Rails & PostgresQL. Make sure you have the latest versions of the four following components installed before cloning this repo. You can find their official installation guides below:
  - [React](https://reactjs.org/docs/getting-started.html)
  - [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
  - [Ruby On Rails](https://guides.rubyonrails.org/v5.0/getting_started.html)
  - [PostgresQL](https://www.postgresqltutorial.com/)

&nbsp;

  ### Frontend
  - Clone the most recent branch from [The Frontend Repository](https://github.com/trunkslamchest/mod3_project/tree/frontend-0.31)
  - Run `npm install` in your bash-enabled terminal to make sure all dependancies are installed

  ### Backend
  - Clone the most recent branch from [The Backend Repository](https://github.com/trunkslamchest/mod3_project/tree/backend-0.3/)
    - If you are running on Windows, add `gem 'wdm', '>= 0.1.0'` to Gemfile before running `bundle install`
    - If you are running on macOS, remove `gem 'wdm', '>= 0.1.0'` from Gemfile before running `bundle install`
  - Run `bundle install` to install all gems/dependancies required for Spacebar Smasher
  - Run `rails db:create ` to create a local PostgresQL database
  - Run `rails db:migrate` to create the tables/columns required for proper Spacebar Smasher functionality
  - Run `rails db:seed` to populate the columns with rows of "real" data
  - Create a file called `.env` in the backend directory (/root/backend/) and add `HMAC_SECRET = "<insert secret string here>"` and `MOD3_PROJECT_REVAMP_BACKEND_DATABASE_PASSWORD = "<insert password used during PostgresQL installation>"` to the file

&nbsp;

  ### First Start
   If you have not received any errors/resolve any errors you have encountered during Prerequisite Installation, you are ready to start Spacebar Smasher for the first time.

  First:
  - Run `rails s -p 3001` to start the backend server on port 3001.
    - You can access the Backend portion of Spacebar Smasher by visiting: `http://localhost:3001`
 
  Second:
  - Run `npm start` **in a separate bash terminal window** to start the frontend server on port 3000
    - You can now access Frontend portion of Spacebar Smasher by visiting: `http://localhost:3000` 
 

  Thats it! Have fun breaking/fixing/doing whatever you want with Spacebar Smasher. The world is your oyster!

&nbsp;

  **If you have recieved any errors during this process, feel free to contact me so I can help you and update this readme accordingly**

&nbsp;

<a href="https://github.com/trunkslamchest/mod3_project/blob/master/README.md#contents"><img src="https://img.shields.io/badge/^-Back%20To%20Top-000000"></a>

&nbsp;

# Summary Of Files
  ### Internal File Structure
  - [Frontend](https://github.com/trunkslamchest/mod3_project/tree/frontend-0.31): All files used for Gameplay Loop & Functionality
    - [public](https://github.com/trunkslamchest/mod3_project/tree/frontend-0.31/public): Various Assets for General Purposes
    - [src](https://github.com/trunkslamchest/mod3_project/tree/frontend-0.31/src): Root Frontend
      - [admin](https://github.com/trunkslamchest/mod3_project/tree/frontend-0.31/src/admin): Administrative Panel
       - [db_edit](https://github.com/trunkslamchest/mod3_project/tree/frontend-0.31/src/admin/db_edit): In Browser Database Editor
       - [rtv](https://github.com/trunkslamchest/mod3_project/tree/frontend-0.31/src/admin/rtv): Real Time Traffic Viewer
      - [assets](https://github.com/trunkslamchest/mod3_project/tree/frontend-0.31/src/assets): Art Assets
      - [css](https://github.com/trunkslamchest/mod3_project/tree/frontend-0.31/src/css): CSS stylesheets
      - [game](https://github.com/trunkslamchest/mod3_project/tree/frontend-0.31/src/game): Core Gameplay Loop
      - [index](https://github.com/trunkslamchest/mod3_project/tree/frontend-0.31/src/index): Index Page Functionality
      - [user](https://github.com/trunkslamchest/mod3_project/tree/frontend-0.31/src/user): User Specific Actions
    - [package.json](https://github.com/trunkslamchest/mod3_project/blob/frontend-0.31/package.json): Modules & Dependencies
  - [Backend](https://github.com/trunkslamchest/mod3_project/tree/backend-0.3): All files used for player/scoreboard functionality
    - [app](https://github.com/trunkslamchest/mod3_project/tree/backend-0.3/app): Primary location for API configuration
      - [controllers](https://github.com/trunkslamchest/mod3_project/tree/backend-0.3/app/controllers): Render/REST methods
      - [models](https://github.com/trunkslamchest/mod3_project/tree/backend-0.3/app/models): Active Record Associations methods
      - [serializers](https://github.com/trunkslamchest/mod3_project/tree/backend-0.3/app/serializers): Filters for API
  - [bin](https://github.com/trunkslamchest/mod3_project/tree/backend-0.3/bin): Environment configuration files
  - [config](https://github.com/trunkslamchest/mod3_project/tree/backend-0.3/config): Start/Backend configuration files
  - [db](https://github.com/trunkslamchest/mod3_project/tree/backend-0.3/db): Database Configuration files
  - [Gemfile](https://github.com/trunkslamchest/mod3_project/tree/backend-0.3/Gemfile): Prerequistes & Dependencies

&nbsp;

<a href="https://github.com/trunkslamchest/mod3_project/blob/master/README.md#contents"><img src="https://img.shields.io/badge/^-Back%20To%20Top-000000"></a>

&nbsp;

# Credits

  - [Jamal Farah](https://github.com/moulayja): Co-creator & Contributor
  - [The Flatiron School](https://flatironschool.com/)
  - [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
  - [Fast JSON API](https://github.com/Netflix/fast_jsonapi)
  - [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
  - [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - [PostgresQL](https://www.postgresql.org/)
  - [Ruby](https://www.ruby-lang.org/en/)
  - [Ruby On Rails](https://rubyonrails.org/)

&nbsp;

# Contact
  - austin.smith.dev@gmail.com
  - <a href="https://www.linkedin.com/in/austin-smith-dev/">LinkedIn</a>
  - <a href="https://medium.com/@trunk9slamchest">Medium</a>

&nbsp;
