'use strict';

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

var teacherDb = require('../db/teacher');
var path = require('path');

passport.use('local', new LocalStrategy(function (username, password, done) {
	console.log('local', username, password);
	teacherDb.count({}, function (err, count) {
		if (!count) {
			//如果没有用户，虚拟产生特权用户
			return done(null, { _id: -1, isAdmin: true }); //虚拟用户
		} else {
				teacherDb.findOne({ name: username }, function (err, teacher) {
					console.log(err, teacher);
					if (err) {
						return done(err);
					}
					if (!teacher) {
						return done(null, false, { message: 'Incorrect username.' });
					}
					if (teacher.password != password) {
						return done(null, false, { message: 'Incorrect password.' });
					}
					console.log('pass');
					return done(null, teacher);
				});
			}
	});
}));

passport.serializeUser(function (user, done) {
	console.log('serializeUser', user);
	done(null, user._id); //虚拟用户
});

passport.deserializeUser(function (id, done) {
	// console.log('deserializeUser',id)

	if (id == -1) {
		done(null, { _id: -1, isAdmin: true });
	} else {
		teacherDb.findOne({ _id: id }, function (err, user) {
			done(err, user);
		});
	}
});

module.exports = function (app) {
	console.log('auth init');
	app.use(passport.initialize());
	app.use(passport.session());

	app.post('/login', passport.authenticate('local', {
		successRedirect: '/manage.html',
		failureRedirect: '/login.html'
	}));

	app.get('/logout', function (req, res) {
		req.logout();
		res.redirect('/login.html');
	});

	// app.get('/manage.html', isLoggedIn);
	app.get('/manage.html', function (req, res, next) {
		console.log('manage.html', req.user);
		if (!req.user) {
			res.redirect('/login.html');
		} else {
			next();
		}
	});

	app.get('/user', function (req, res) {
		res.json(req.user);
	});
};