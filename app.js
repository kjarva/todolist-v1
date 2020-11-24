const express = require("express");
const bodyParser = require("body-parser");
// wrote the date module to get the date in the format I want
const date = require(__dirname + "/date.js");


const app = express();

const items = [];
const workItems = [];

app.use(bodyParser.urlencoded({ extended: true }));

// Tells express where to serve our static files from
app.use(express.static("public"));

// set up to ensure that our server knows we are using EJS as our templating module
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    // date module being called as date.getDate() which will run the
    // function in the date module exports
    let day = date.getDate();

    res.render('list', { listTitle: day, newListItems: items });

});

app.get("/work", (req, res) => {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", (req, res) => {
    res.render("about");
});


/* This section of code grabs the added item from the post request, then
pushes it to the array items. Once that is done, it redirects the page to
the home route, which then uses the res.render to display the updated page
with the new item added. See list.ejs for how the items array is looped
through for each list item. */
app.post("/", (req, res) => {

    let item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("Work");
    } else {
        let item = req.body.newItem;
        items.push(item);
        res.redirect("/");
    }
});





app.listen(3000, () => {
    console.log("Server started on port 3000");
});
