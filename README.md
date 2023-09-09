# Project Express-Excursion
Express Excursions is a platform where users can share information about various travel destinations, enabling others to explore and plan their upcoming adventures.  

## Descripton
The user has the option to navigate to the 'Destinations' tab, where they can browse posts from other users organized by continent. When a specific destination is selected, its page displays a description, location, date of visit, authorship, and an accompanying image. Editing or deleting the destination can be done directly from this page. Moreover, users can contribute by adding a new destination to the site by clicking the 'Add Destination' button on the destinations page. This action redirects the user to a form page where they can input all relevant information, and the post will be categorized by the selected continent upon submission.

# Getiing Started

### Dependedncies
    Front-End:
        -react
        -bootstrap
        -sequelize
        -react datepicker

    Back-end:
        -cors
        -dotenv
        -express
        -pg
        -sequelize
        -react datepicker

### Installing
    Fork and clone from https://github.com/marvintalavera/documentation-AT.git

### Executing
    Local operation on separate servers:
        Front end:
            -cd front-end 
            -npm i
            -set up env file
            -npm start

        Back end:
            -cd back-end
            -npm i
            -set up env file
            -nodemon 

        Run from build file on back-end:
            -cd back-end
            -npm i
            -NODE_ENV=production PORT=8000 node index.js

## Contributors
    This was started as a group project for the Milestone 2 project for the UNLV Software Development Bootcamp group #3.


## API (http://localhost:5000/)
    | Method | Path                                 | Purpose                                   |
    | ------ | ------------------------------------ | ----------------------------------------- |
    | GET    | /                                    | Home page                                 |
    | GET    | /destinations                        | Find all destinations                     |
    | GET    | /destinations/:name                  | Find one destination place                |
    | POST   | /destinations                        | Create new destination                    |
    | PUT    | /destinations/:name                  | Update a  destination                     |
    | DELETE | /destinations/:name                  | Delete a  destination                     |
    | GET    | /continents/:continent_name          | Find all destinations for that continent  |
 

## API (http://localhost:3000/)
    | Path                | Component            | Purpose                                             |
    | ------------------- | ---------------------| --------------------------------------------------- |
    | /                   | 'Home.js'            | Home page                                           |
    | /continents         | 'Contients.js'       | Make a list of contients                            |
    | /about              | 'About.js'           | About page                                          |
    | /continents/:name   | 'Destinations.js'    | Create a list of destinations filtered by continent |
    | /destinations/:name | 'Destination.js'     | Details for a specific destination                  | 
    | /newdestination     | 'NewDestination.js'  | Creates a new destination form                      |
    | /edit/:name         | 'Edit.js'            | Edits a new destination form                        |
 
## Change log