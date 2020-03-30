# Progressive Web Apps @cmda-minor-web · 2019-2020

Link:  
https://maxweijers.herokuapp.com/randomize


<!-- Add a link to your live demo in Github Pages 🌐-->
## Description
This app shows you random star wars characters with info about them. It show the name, gender, birthday and mass of those characters. 

## Features
You can get 6 random Star Wars characters and click to see some more info about them. There's also a randomize button to show new characters.

## API
This app used the Star wars API.
https://swapi.co/

You can ask for certain character from such a link: 
https://swapi.co/api/people/1/
This is what the returned objects look like:

​​birth_year: "41.9BBY"  
​​​created: "2014-12-10T16:20:44.310000Z"  
​​​edited: "2014-12-20T21:17:50.327000Z"  
​​eye_color: "blue"  
​films: Array(3) [ "https://swapi.co/api/films/5/", "https://swapi.co/api/films/4/", "https://swapi.co/api/films/6/" ]  
gender: "male"  
hair_color: "blond"  
height: "188"  
homeworld: "https://swapi.co/api/planets/1/"  
mass: "84"  
name: "Anakin Skywalker"  
skin_color: "fair"  
species: Array [ "https://swapi.co/api/species/1/" ]  
starships: Array(3) [ "https://swapi.co/api/starships/59/", "https://swapi.co/api/starships/65/", "https://swapi.co/api/starships/39/" ]  
url: "https://swapi.co/api/people/11/"  
vehicles: Array [ "https://swapi.co/api/vehicles/44/", "https://swapi.co/api/vehicles/46/" ]

## Performance enhancements

The website has basic funionality without javascript:  
![alt_text](https://github.com/mordock/progressive-web-apps-1920/blob/master/course/schoolstuff/javascript_block001.png)  
![alt_text](https://github.com/mordock/progressive-web-apps-1920/blob/master/course/schoolstuff/javascript_block002.png)  
![alt_text](https://github.com/mordock/progressive-web-apps-1920/blob/master/course/schoolstuff/javascript_block003.png)  

A service worker has been implemented and a few files are being cached:
![alt_text](https://github.com/mordock/progressive-web-apps-1920/blob/master/course/schoolstuff/serviceworker001.png)  
![alt_text](https://github.com/mordock/progressive-web-apps-1920/blob/master/course/schoolstuff/serviceworker002.png)  

A few optimizations have been make to improve the critical render path, the student understands the terms:  
First view: This is about the time until the first meaningful paint, so when the user can read your page.  
Repeat view: This is about reducing bytes and caching.  
Perceived performance: This is how fast the user thinks the site loads, not how fast it actually loads.  
Runtime performance:  This is the performance when your site is running, not loading, this could be smoothness of transitions or animations.  
Time to interaction: This is about the time before a page is interative and the javascript is loaded.  
Time to first byte: This is about the responce time of the server.  

## optimizations made

## 1. Server side rendering
By using server side rendering and using ejs templates I'm able to almost immediately show a result to the user. This helps with the Load responsiveness.  
![alt_text](https://github.com/mordock/progressive-web-apps-1920/blob/master/course/schoolstuff/Server001.png)
![alt_text](https://github.com/mordock/progressive-web-apps-1920/blob/master/course/schoolstuff/Server002.png)

## 2. Minifying  
Using an online CSS minifier I was able to trying my css files from 689 bytes to 335 bytes. My css file is quite small so thers not much of an actual difference, but it's an improvement of roughly 50%, if you have a css of several kilobytes this would have been a good improvement.
![alt_text](https://github.com/mordock/progressive-web-apps-1920/blob/master/course/schoolstuff/minify002.png)
![alt_text](https://github.com/mordock/progressive-web-apps-1920/blob/master/course/schoolstuff/minify001.png)

## 3. Compression  
I used the compression library which works together with express to compress my files for a quicker loading time. You can see for example that the manifest got compresses from 1.3 kb to about 700 bytes.
![alt_text](https://github.com/mordock/progressive-web-apps-1920/blob/master/course/schoolstuff/compress001.png)
![alt_text](https://github.com/mordock/progressive-web-apps-1920/blob/master/course/schoolstuff/compress002.png)

## 4. Service worker  
A service worker has been implemented to improve the repeat view for users. Files like the css and the manifest don't need to be reloaded. 
![alt_text](https://github.com/mordock/progressive-web-apps-1920/blob/master/course/schoolstuff/service001.png)


<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
