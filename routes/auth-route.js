const router = require("express").Router();
const passport = require("passport");
const connection = require("../db/conn");
const User = require("../models/User");

// login route

router.get("/login", (req, res) => {
  res.render("login",{user:req.user});
});

// auth with google

router.get(
  "/google",
  passport.authenticate("google", {
    session: false,
    scope: ["profile", "email"],
  })
);
// auth logout

router.get("/logout", (req, res) => {
  res.send("log out route");
});

router.get(
  "/google/redirect",
  passport.authenticate("google"),(req,res)=>{
    res.redirect("/profile/")
  });

module.exports = router;
