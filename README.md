Clock Widget README

![Clock Screenshot](./img/Screenshot%20.jpg)<br>
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-blue)

# Try Demo
You can try by clicking [HERE](https://narekhar666.github.io/Clock/).

This is a simple clock widget implemented in JavaScript, HTML, and CSS. The code provided here creates a digital clock with hour, minute, and second hands. It uses the setInterval function to update the clock every second.

# Installation
No special installation is required for this code. You can include the JavaScript code in your HTML file, and the clock widget will be displayed and updated automatically.

# Usage
The code consists of the following components:
setInterval(setClock, 1000):
This line sets a timer to update the clock every 1000ms (1 second).

These lines select the clock hands in the HTML document for manipulation. The querySelector method is used to locate elements with the specified IDs: secondHand, minuteHand, and hourHand.
setClock() Function:

The setClock function updates the clock hands' rotations to reflect the current time.
It retrieves the current time using the Date object and calculates the degrees of rotation for each clock hand based on the current hours, minutes, and seconds.
The style.transform property is used to apply the calculated rotation to the clock hands.
Initial Call to setClock:

The last line, setClock(), calls the setClock function once immediately to ensure that the clock hands are correctly set when the page loads.
# Customization
You can customize the appearance of the clock by modifying the HTML and CSS as needed. The clock hands can be styled using CSS to match your design preferences. Additionally, you can change the HTML structure to fit within your webpage layout.

License
This code is provided under an open-source license. Feel free to use and modify it as needed for your projects.

# Acknowledgments
This code was created as a simple clock widget and can be used in web applications, websites, or educational projects. It serves as a basic example of how to create a digital clock using HTML, CSS, and JavaScript.