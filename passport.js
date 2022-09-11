var express = require('express');
var router = express.Router();
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");


const GOOGLE_CLIENT_ID =
  "773597284992-seas632lblpg111d10naddh68hq6vakk.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);  


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});