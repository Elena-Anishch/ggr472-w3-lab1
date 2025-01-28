const btn1 = document.getElementById("my-button1");
// getting the button through the id named "my-button1"
btn1.addEventListener("click", () => {
    // adding an evenlistener
    // after clicking the button geojson file is to open in a new window
    window.open ('mappeddata.geojson', '_blank')
});
const btn2 = document.getElementById("my-button2");
// getting the button through the id named "my-button2"
btn2.addEventListener("click", () => {
    // adding an eventlistener
    // after clicking a web page is to open in a new window
    window.open('https://storymaps.arcgis.com/stories/d6647c55be5b4583b20e5d9871870135', '_blank');
});

const homeLink = document.getElementById("home-link");
    // getting the home button on the navigation bar
homeLink.addEventListener("click", function(event) {
    // adding an eventlistener
    // setting an alert as a small pop up window to confirm user is on the home page
    alert("You are on the home page!");
});
