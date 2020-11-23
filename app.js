const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = [];

app.use(bodyParser.urlencoded({ extended: true }));

// set up to ensure that our server knows we are using EJS as our templating module
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    
    let today = new Date();

// These are the options for toLocaleDateString
let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
};

let day = today.toLocaleDateString("en-UK", options);



res.render('list', {kindOfDay: day, newListItems: items});

});

/* This section of code grabs the added item from the post request, then
pushes it to the array items. Once that is done, it redirects the page to
the home route, which then uses the res.render to display the updated page
with the new item added. See list.ejs for how the items array is looped
through for each list item. */
app.post("/", (req, res) => {
    let item = req.body.newItem;
    items.push(item);

    res.redirect("/");
});





app.listen(3000, () => {
    console.log("Server started on port 3000");
});
