
<p align="center"><img width=75% src="https://raw.githubusercontent.com/trunkslamchest/mod3_project/dev-win64-0.2/frontend/spacebar_smasher_logo.png"></p>

<p align="center">
  <img align="center" src="https://img.shields.io/badge/CSS-3.0-1572B6">
  <img align="center" src="https://img.shields.io/badge/HTML-5.2-E34F26">
  <img align="center" src="https://img.shields.io/badge/Javascript-1.8.5-F7DF1E">
  <img align="center" src="https://img.shields.io/badge/Postgresql-12.1-336791">
  <img align="center" src="https://img.shields.io/badge/Ruby-2.6.5-CC342D">
  <img align="center" src="https://img.shields.io/badge/Ruby%20On%20Rails-6.0.2.1-cc0600">
</p>  

<p align="center">
  <a href="https://github.com/trunkslamchest/mod3_project/tree/frontend-0.1"><img align="center" src="https://img.shields.io/badge/Latest%20Frontend%20Repository-0.1-000000"></a>
  <a href="https://github.com/trunkslamchest/mod3_project/tree/backend-0.1"><img align="center" src="https://img.shields.io/badge/Latest%20Backend%20Repository-0.1-000000"></a>
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
- [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [First Start](#first-start)
- [Summary Of Files](#summary-of-files)
  - [Internal File Structure](#internal-file-structure)
- [Credits](#credits)

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
  - Refactor the application to utilize Node.js & React.js over vanilla Javascript & Ruby on Rails
  - Deployment
  
&nbsp;

<a href="https://github.com/trunkslamchest/mod3_project/blob/master/README.md#contents"><img src="https://img.shields.io/badge/^-Back%20To%20Top-000000"></a>

&nbsp;

# Installation
  ### Prerequisites
  Spacebar Smasher is built using Javascript, Ruby, Ruby on Rails & PostgresQL. Make sure you have the latest versions of the three following components installed before cloning this repo. You can find their official installation guides below:
  - [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
  - [Ruby On Rails](https://guides.rubyonrails.org/v5.0/getting_started.html)
  - [PostgresQL](https://www.postgresqltutorial.com/)

&nbsp;

  - Clone the most recent branch from The Backend Repository
    - If you are running on Windows, add the line `gem 'wdm', '>= 0.1.0'` to Gemfile before running `bundle install`. If you are running on macOS, remove the line `gem 'wdm', '>= 0.1.0'` from Gemfile before running `bundle install`

  - Run `rvm use Ruby-2.6.5` to make sure you are using the correct version of Ruby
  - Run `bundle install` to install all gems/dependancies required for Spacebar Smasher
  - Run `rails db:create` to create a local PostgresQL database
  - Run `rails db:migrate` to create the tables/columns required for proper Spacebar Smasher functionality
  - Run `rails db:seed` to populate the columns with rows of "real" data

&nbsp;

  ### First Start
   If you have not received any errors/resolve any errors you have encountered during Prerequisite Installation, you are ready to start Spacebar Smasher for the first time.

  First:
  - Run `rails s -p 3001` to start the backend server on port 3001.

  The server must run on 3001 as all the fetch requests on the frontend point to port 3001. If you can not or do not want to run the backend server on port 3001, you will need to update all frontend fetch requests accordingly. 

  Second:
  - Open 'index.html' with your Chrome or Firefox

  You can access the Backend portion of Spacebar Smasher by visiting: `http://localhost:3001`

  Thats it! Have fun breaking/fixing/doing whatever you want with Spacebar Smasher. The world is your oyster!

&nbsp;

  **If you have recieved any errors during this process, feel free to contact me so I can help you and update this readme accordingly**

&nbsp;

<a href="https://github.com/trunkslamchest/mod3_project/blob/master/README.md#contents"><img src="https://img.shields.io/badge/^-Back%20To%20Top-000000"></a>

&nbsp;

# Summary Of Files
  ### Internal File Structure
  - [Frontend](https://github.com/trunkslamchest/mod3_project/tree/dev-win64-0.2/frontend): All files used for Gameplay Loop & Functionality
  - [Backend](https://github.com/trunkslamchest/mod3_project/tree/dev-win64-0.2/backend): All files used for player/scoreboard statistics
    - [app](https://github.com/trunkslamchest/mod3_project/tree/dev-win64-0.2/backend/app): Primary location for API configuration
      - [controllers](https://github.com/trunkslamchest/mod3_project/tree/dev-win64-0.2/backend/app/controllers): Render/REST methods
      - [models](https://github.com/trunkslamchest/mod3_project/tree/dev-win64-0.2/backend/app/models): Active Record Associations methods
      - [serializers](https://github.com/trunkslamchest/mod3_project/tree/dev-win64-0.2/backend/app/serializers): Filters for API
  - [bin](https://github.com/trunkslamchest/mod3_project/tree/dev-win64-0.2/backend/bin): Environment configuration files
  - [config](https://github.com/trunkslamchest/mod3_project/tree/dev-win64-0.2/backend/config): Start/Backend configuration files
  - [db](https://github.com/trunkslamchest/mod3_project/tree/dev-win64-0.2/backend/db): Database Configuration files
  - [Gemfile](https://github.com/trunkslamchest/mod3_project/blob/dev-win64-0.2/backend/Gemfile): Prerequistes & Dependencies

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

<a href="https://github.com/trunkslamchest/mod5_project_backend/blob/master/README.md#contents"><img src="https://img.shields.io/badge/^-Back%20To%20Top-000000"></a>

&nbsp;
