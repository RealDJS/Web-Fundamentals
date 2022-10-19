// mission.js
const themeSelector = document.getElementById("theme-select")

themeSelector.addEventListener("change", changeTheme)

function changeTheme() {
    //check to see what the current value of our select is. The current value is conveniently found in themeSelector.value!

    const checkValue = themeSelector.value;
    console.log(checkValue)
    // if the value is dark then:
    if (checkValue == "Dark") {
        // add the dark class to the body
        document.body.classList.add("dark")
        // change the source of the logo to point to the white logo.
        document.querySelector(".logo").src = "byui-logo_white.png"
    }
    // otherwise
    else {
        // remove the dark class
        document.body.classList.remove("dark")
        // make sure the logo src is the blue logo.
        document.querySelector(".logo").src = "byui-logo_blue.jpg"
    }
}
// add eventlistener to the themeSelector element here. Use the changeTheme function as the event handler function.