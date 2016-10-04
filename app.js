//=======================
//setting up npm packages
//=======================
var express =require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require("mongoose");


//local database
// mongoose.connect("mongodb://localhost/portfolio");
//MONGOLABS ONLINE DATABASE
mongoose.connect("mongodb://saxal28:gatorade2@ds019856.mlab.com:19856/portfolio_alan_sax")


app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(__dirname+"/public"));

app.set("view engine", "ejs");

//mongoose setup
//schema definition
var portfolioSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    link: String,
    github: String
})

//model setup
var Portfolio = mongoose.model("Portfolio", portfolioSchema);

// //CREATE PORTOFLIO ITEM
// Portfolio.create({
//     title: "Example",
//     image: "http://i239.photobucket.com/albums/ff158/Ratrod94/abaa-Epic-fail-hair-fail.jpg",
//     description: "THIS IS A TEST"
// }, function() {
//     console.log("portfolio item created!");
// });


//HOME ROUTE
app.get("/", function(req, res) {
    Portfolio.find({}, function(err, portfolio) {
        if(err) {
            console.log(err)
        } else {
             res.render("home", {portfolio:portfolio});
        }
    })
});

//BIO INDEX ROUTE
app.get("/bio", function(req, res) {
    res.render("bio");
});

//SKILLS INDEX ROUTE
app.get("/skills", function(req, res) {
    res.render("skills");
});

//=====================
//PORTFOLIO ROUTES
//=====================

//PORTFOLIO INDEX ROUTE
app.get("/portfolio", function(req, res) {
    Portfolio.find({}, function(err, portfolios) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
             res.render("portfolio", {portfolios: portfolios});
        }
    });
});

app.get("/portfolio/weather", function(req, res) {
    res.render("weather");
})


//PORTFOLIO NEW ROUTE
app.get("/portfolio/new", function(req, res) {
    res.render("new-portfolio");
});

//PORTFOLIO CREATE ROUTE
app.post("/portfolio", function(req, res) {
    //create new portfolio item
    Portfolio.create(req.body.portfolio, function(err, newPortfolioItem) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
                //redirect to /portfolio
            console.log("successfully added");
            res.redirect("/portfolio");
        }
    });

});

//PORTFOLIO SHOW ROUTE
app.get("/portfolio/:id", function(req, res) {
    Portfolio.findById(req.params.id, function(err, foundPortfolioItem) {
        if(err) {
            res.redirect("back");
        } else {
            res.render("show-portfolio-item", {portfolioItem: foundPortfolioItem});
        }
    });
});

//PORTFOLIO EDIT ROUTE
app.get("/portfolio/:id/edit", function(req, res) {
    //locate item
    Portfolio.findById(req.params.id, function(err, foundPortfolioItem) {
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            //pass through data for it
            res.render("edit-portfolio-item", {portfolioItem: foundPortfolioItem});
        }
    });
});

//PORTFOLIO UPDATE ROUTE
app.put("/portfolio/:id", function(req, res) {
    Portfolio.findByIdAndUpdate(req.params.id, req.body.portfolio, function(err, updatedPortfolioItem) {
        if(err){
            res.redirect("back");
        } else {
            res.redirect("/portfolio/"+req.params.id);
        }
    });
});

//PORTFOLIO DESTROY ROUTE
app.delete("/portfolio/:id", function(req, res) {
    Portfolio.findByIdAndRemove(req.params.id, function(err, deleted) {
        if(err) {
            res.redirect("back");
        } else {
            res.redirect("/portfolio");
        }
    });
});

//CONTACT ROUTE
app.get("/contact", function(req, res) {
    res.render("contact");
});

//START SERVER
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("SERVER LAUNCHED ==>");
});