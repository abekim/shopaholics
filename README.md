# shopaholics

Shopaholics backend

## Database

It'll be the most important part of this project. Basically, what we wanna shoot for is a completely independent database server whose data filtering and management system is very capable. Because this is simply a prototype and more of an MVP, we'll go ahead and use Heroku's free `MongoLab URI` for database management. MongoDB is very good for getting a simple database up and running and does a fairly good job with references, which we'll be using a lot for this project.

The biggest and the more complicated data that need storing are the users and the products. 

Here's what they look like:

#### User Model

```
user ID
password        # implemented using bcrypt?
email
picture
name            # full
first name
last name
location
bio
personal tags
link to blog
following       # honestly, we only need either following or followers, not both.
followers       # they would also be references to other user model objects
items purchased # depending on whether jas/yada wants or not
items favorited # ditto
```

#### Product Model

```
title
price range
overall rating
various places sold at
related coupons         # this should be its separate model if you want to do any kind of separate "search for available coupons" feature
similar items           # another product model with matching attributes? Maybe best to come up with a new algorithm
reviews                 # once again, a different model
tags                    # andddddd yet another model
quick reviews           # haven't decided how this should be implemented yet...
  pros/cons
```

Some of the simpler models

#### Coupon Model

```
name
link
```

#### Review
```
user                # reference to user model objects
price bought at
location bought at
overall rating
text review
fit
value
quality
```

#### Tag Type Model
```
name
tags    # reference to tag model objects
```

#### Tag Model
```
name
```

## Brainstorm

### Adding clothes to database
  + we can have them put a link and have a smart system on our own that can scrape the info.
  + for images, maybe use something similar to pinterest `pin` method.

