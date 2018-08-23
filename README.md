## Neighbourhood app

This is an application that displays 12 restaurants from a neghborhood from Bucharest.
It contains information about:
- address
- open hours
- cuisine
- rating
- price category

## Installation

In order to run the application follow the instructions bellow:

- clone this project on your local machine
- from the console, cd into the directory
- run `npm install` in order to install dependencies
- run `npm i react-google-map` in order to install the google maps api
- run `npm i react-media`
- run `npm i escape-string-regexp`
- now to run the application type `npm start` from the console. Your default browser should open and display the contents. If you want to run it from another browser, type `https://localhost:3000` in the address bar in order to open it.

## Dependecies

This application was made using GoogleMaps and Foursquare APIs in React JS Framework. The free account from Foursquare only gives 500 queries/day meaning after some time testing the application, the information from the API will be replaced by placeholders (for images) or generic text (for rating, category, price) but will still be able to read some important information like name, address, open hours.

Hope you enjoy it!
