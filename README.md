# Website Optimization Project

### Created By Brandon Smith

### Description
This project was created to be used for the completetion of the Udacity Front End Nano Degree Program.
This app hopes to achieve a google page speed score of 90+ for index.html as well as 60FPS and less then .5ms pizza resizing on views/pizza.html.

### Installation
1. Clone or download the respository from.
2. Run ```python -m http.server 8080``` to start up a local webserver and run the application.
3. Using Ngrok optain a live IP to test the google page speed score. You may download ngrok [here](https://ngrok.com/)

### Optimizations Made

#### Index.html 

* Optimized Images
* Minimized HTML
* Minifed Javascript
* Minified CSS
* Inlined CSS
* Only call print.css when needed
* Eliminated render block Javascript
* Changed Javascript load order
* Removed google web font loading

#### Pizza.html

* Moved items to a global variable
* Changed most ```querySelect``` and ```querySelectAll```'s to either ```getElementById``` or ```getElementByClassName```.
* Refactored the ```determineDx()``` function to ```changePizzaSizes()```
* Moved several variables outside of for loops to increase optimization
