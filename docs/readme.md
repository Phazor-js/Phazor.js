# BoomHost API | Phazor.js 
# What is phazor.JS?
Phazor.JS is an boomhost framework that provides functions similiar to jquery.<br>
It is not based on jquery, all code is writtten by PlurrYT.<br>
<br>
# How does it work?
You can find the documentation [here](/docs) and the news [here](/news)

# Is it paid?
No. Phazor.JS is like boomhost a free-to-use framework with no payment ever needed to access any feature. However, donations are optional.<br>

# How can i use it?
### Warning: This framework behaves differently on mobile and PC. Please note this while making your apps/games as this may cause huge rendering problems.
Load Phazor.js Installer without any downloads:<br>
```HTML
<script id="phazorJS" src="http://api.boomhost.ml/pjs.js"></script>
```
There is versions of Phazor.JS (STABLE):<br>
STABLE V2: 
```HTML
<script id="phazorJS" src="http://api.boomhost.ml/pjs.js"></script>
```
<br>

## The ultimate how-to-use tutorial
### Global properties
 1. `pjs("selector")` -> Returns a parsed PhazorElement.
 2. `pjs.parseElement(dom_element)` -> Returns a single parsed PhazorElement.
 3. `pjs.parse(dom_elements)` -> Returns an array of parsed PhazorElements, Or returns a single one if there is only one.
 4. `pjs.alert("text")` -> Shows a native alert.
 5. `pjs.prompt("text")` -> Prompts the user for an input, Then returns the user input.
 6. `pjs.get("https://url/", function() { [callback] })` -> Performs an HTTP GET request and returns the value using a callback.
 7. `pjs.post("https://url/", {"post": "data"}, function() { [callback] })` -> Performs an HTTP POSZT request with the given data and returns the value using a callback.
 8. `pjs.refresh()` -> Reloads the page.
 9. `pjs.open("https://url/")` -> Opens a new window with the given URL.
 10. `pjs.replace("https://url/")` -> Replaces the current window with the given URL.
 11. `pjs.random(min, max)` -> Returns a random number between two given numbers.
 13. `pjs.confirm("text")` -> Returns a random number between two given numbers.
 14. `pjs.setcookie("cookieone = value", "cookie expires in days (1)", "cookie path (/)")` -> Set cookie.
 15. `pjs.getcookie("cookie")` -> Returns a cookie value.
 16. `pjs.allcookies()` -> Returns all cookies (CODED). (CookieName=coded value)
 17. `pjs.version()` -> Returns Phazor.JS Version. (v1)
 18. `pjs.info()` -> Returns info about phazor. (Owner and phazor.js website.)
 19. `pjs.noscript("text")` -> Create noscript element with text (if dont support scripts in browser (not js))
 20. `pjs.favicon("url")` -> Change favicon to entered URL.
 21. `pjs.favicontext("text")` -> Change favicon to text (u can enter emoji!).
 22. `pjs.clog("text")` -> Like console log but just easy version.
 23. `pjs.cwarn("text")` -> Like console warn but just easy version.
 24. `pjs.cerror("text")` -> Like console error but just easy version.
 25. `pjs.terror("text")` -> Like throw new Error but just easy version.

### PhazorElement properties
1. `Element.dom` -> Returns the DOM element of the PhazorElement.
2. `Element.click(function() { [callback] })` -> Runs the inputted function if the element is clicked.
3. `Element.html("<some>html here</some>")` -> Rewrites the innerHTML of the PhazorElement.
4. `Element.setcss("some: css;")` -> Rewrites the style attribute of the PhazorElement.
5. `Element.getcss("some")` -> Returns the CSS value of the given attribute name.
6. `Element.css("some", "css")` -> Modifies the style attribute of the PhazorElement, Keeping the old attributes.
7. `Element.setX(number)` -> Sets the value of the X axis of the PhazorElement based on viewport width.
8. `Element.setY(number)` -> Sets the value of the Y axis of the PhazorElement based on viewport width.
9. `Element.moveX(number)` -> Modifies the value of the X axis of the PhazorElement based on viewport width.
10. `Element.moveY(number)` -> Modifies the value of the Y axis of the PhazorElement based on viewport width.
11. `Element.fixW(number)` -> Sets the width of the PhazorElement based on viewport width.
12. `Element.fixH(number)` -> Sets the height of the PhazorElement based on viewport width.
13. `Element.fixW(number)` -> Modifies the width of the PhazorElement based on viewport width.
14. `Element.fixH(number)` -> Modifies the height of the PhazorElement based on viewport width.
15. `Element.set(x, y)` -> Sets the value of the X and Y axis of the PhazorElement based on viewport width.
16. `Element.move(x, y)` -> Modifies the value of the X and Y axis of the PhazorElement based on viewport width.
17. `Element.fix(w, h)` -> Sets the width and height of the PhazorElement based on viewport width.
18. `Element.fixS(w, h)` -> Modifies the width and height of the PhazorElement based on viewport width.
19. `Element.add(PhazorElement)` -> Adds a PhazorElement to the current PhazorElement.
20. `Element.src("url")` -> Adds or changes src.
21. `Element.href("url")` -> Adds or changes href.

# Enjoy!
