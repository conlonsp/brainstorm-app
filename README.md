# BrainStorm App

## About

BrainStorm was created to provide a platform for entrepreneurs, innovators, and inventors to share and collaborate on ideas, gain support, and make lasting connections by engaging in what they love doing!  Brainstorm was created using ReactJS, Ruby on Rails, and Material UI.

## Functionality

### Login / Signup

To use BrainStorm, you must first Login or Sign Up for an account.  You will be prompted to do so once you've entered the site, before you are able to access any of the applications features.  Once logged in, you are ready to start collaborating with other like-minded folk!

When signing up, you will have to create a username and password where the password must be a minimum of 6 characters and no more than 20, upload a profile picture, and write a short bio about yourself.

Once logged in, BrainStorm will remember you through cookies.  If you happen to navigate away from the site without logging out, once you return to the site you'll automatically be logged in!  Make sure to log out once you're done using BrainStorm to avoid having anyone tampering with your account!

### Dashboard

The Dashboard is where you will find personal information about your account, such as number of likes you've received on all your ideas, as well as, total number of ideas.  You can also see the latest addition to the Idea Board!

### Idea Board

You can find all of the ideas posted to BrainStorm from the Idea Board.  The Idea Board is essentially a bulletin board.  You can scroll through all of the ideas posted to Brain Storm.

From the Idea Board, you'll be able to like ideas (given that you're not the owner of the idea), delete your own ideas, and view more about each individual idea!

When you click the ```View More``` button on a specific idea, you'll be able to read more about the idea, view commments, post a comment, and if it's your idea, you can make updates to the idea from this page.

### New Idea

From this tab, you'll be able to post new ideas!  It's that simple!

## Application Set Up

First, fork and clone this application to create a GitHub repository, and then open two teminal windows.  To install all dependencies, migrate database tables, seed data, and start the rails server, type this into the first terminal window:

```console
$ bundle install
$ rails db:migrate db:seed
$ rails s
```

To start up the front end and install any dependencies, enter this into the second terminal window:

```console
$ npm install --prefix client
$ npm start --prefix client
```

From here, you should be all set to start using BrainStorm!

## Future Updates

Updates planned for BrainStorm include:

- Updated Dashboard with more user stats and intuitive design.
- Ability to update user profile pic and bio from the Dashboard.
- Update the Idea Board to allow only 10 ideas to show at once, with buttons to navigate to the next 10 or back 10.
- Be able to view other users pages, stats, and befriend them!
- Add Avatar to top right corner of Idea Details

I hope you enjoy using BrainStorm, make new connections, and develop many amazing ideas!
