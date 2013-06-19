# sync

Backbone.Sync examples for 3 different back end styles


## Introduction

So you decided you want to use Backbone and it's wonderful Sync methods, but you have no clue how to do it or if it will work with your current back end. No need to worry, it is so flexible it will allow you to use it with or without any changes and you will mostly not even notice it is there.

On this example I attempt to cover the 3 most common types of back ends based on the Richardson Maturity Model of your services. Following this maturity model, I will cover the first 3 levels:

Level 0 : The Swamp of POX
Level 1 : Resources
Level 2 : HTTP Verbs

### Level 0

Level 0 is like the old school services, where each file on the server corresponds to one service request. If you need to get something, you call getSomething, if you need to save something, you call saveSomething.

### Level 1

Level 1 corresponds to a basic resource operation, if you need to do something you call a special url where the action/service is one of the parameters sent; this is also know as having a gateway.

### Level 2

Level 2 corresponds to a RESTful service where each resource is identified with a unique URL and the type of operation is based on the HTTP verb used.

## Code

The code in the example is using Express and Node.js for the back end services and Backbone (obviously) and Bootstrap for the UI. To start the example you will need to clone this repo, `cd` to its folder on your computer and then run it using `npm start`. Once you start the application, open your browser and navigate to http://localhost:3000 and the browser will be redirected by default to the Level 2 version. If you want to try the different versions you can follow the following links:

- Level 0 : http://localhost:3000/v0
- Level 1 : http://localhost:3000/v1
- Level 2 : http://localhost:3000/v2

At first glance you won't see any difference; this is because all the versions use the same Core code with just small variations based on the API type.

### What to see

Since this is a Backbone example, your interest should be focused mainly on the front end code. The variations for each service type can be found on the folder `public/js/app/collections` and `public/js/app/models`. Also, you'll notice the code is not using RequireJS, nor any other type of optimization, this is to avoid confusing you with other items not relevant to it.

As you will see, the more RESTful your services (API) are, the easier to integrate them on Backbone.