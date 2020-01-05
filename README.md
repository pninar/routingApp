# RouterApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## app using auxiliary routes based on:
https://blog.angular-university.io/angular-2-router-nested-routes-and-nested-auxiliary-routes-build-a-menu-navigation-system/

# creating a fake online rest api 
a.	npm install -g json-server
b.	create db.json in root folder
c.	put json data in db.json file
d.	watch the json data:
e.	open a command prompt
f.	change directory to directory of angular project (that contains db.json)
g.	run command: json-server --watch db.json 

# How to cache HTTP requests in Angular
a.Often when working with Angular applications, we make HTTP requests to access data from an API. Sometimes we are making requests to the same API endpoint in which case it'd make sense to cache the result of the response to avoid further requests.
https://dev.to/angular/how-to-cache-http-requests-in-angular-5c8i