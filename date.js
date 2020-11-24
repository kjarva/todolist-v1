// To be able to call functions from modules, I need to make sure I log it in my
//module exports. NOTE - don't call the function here in module exports i.e. getDate()
// The function is called in the main app.js
exports.getDate = function () {
    const today = new Date();

    // These are the options for toLocaleDateString
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-UK", options);
}

exports.getDay = function () {
    const today = new Date();

    // These are the options for toLocaleDateString
    const options = {
        weekday: "long",
    };

    return today.toLocaleDateString("en-UK", options);
}