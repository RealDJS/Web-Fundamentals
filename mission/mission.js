// mission.js
const themeSelector = document.getElementById("theme-select")

themeSelector.addEventListener("change", changeTheme)

function changeTheme() {
    //check to see what the current value of our select is. The current value is conveniently found in themeSelector.value!

    const checkValue = themeSelector.value;
    console.log(checkValue)
    if (checkValue == "Dark") {
        document.body.classList.add("dark")
        document.querySelector(".logo").src = "byui-logo_white.png"
    }
    else {
        document.body.classList.remove("dark")
        document.querySelector(".logo").src = "byui-logo_blue.jpg"
    }
    // if the value is dark then:
    // add the dark class to the body
    // change the source of the logo to point to the white logo.
    // otherwise
    // remove the dark class
    // make sure the logo src is the blue logo.
}
// add eventlistener to the themeSelector element here. Use the changeTheme function as the event handler function.