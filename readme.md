# Mars Rovers Image Browser

This image browser allows you to view photos of Mars taken by NASA's Opportunity, Curiosity, and Spirit rovers.  

This is a Node.js/React web app that makes use of  [NASA Open APIs](https://api.nasa.gov/api.html#MarsPhotos).  

## Technical Overview
The meat and potatoes of this project is a React app, based off of Create React App (CRA).  In an effort to obscure the api key, a Node server is being used as a proxy for the api calls. 


## Getting Started

These instructions will get you a copy of the project up and running on your local machine, and you too, can view the Martian surface.  


## Prerequisites

You will need a valid NASA API key.  You can [obtain that here](https://api.nasa.gov/index.html).  



## Installing

Clone the repo and navigate into the folder

```
cd mars-rover-image-browser
```

Install the dependencies for the project by running the following command from the project's root

```
npm install
```

This will install all necessary dependencies.  

Create a `.env` file in `/server` and place your api key in there.   Your folder structure should look like this:

```
/mars-rover-image-browser
 /client
 ...
 /server
 ...
 .env
```

```
# .env
NASA_API_KEY=<YOUR_API_KEY_HERE>
```

At this point, you should be ready to run!



## Development

From the project root, go ahead and start the app

```
npm start
```



## Build

From the project root, go ahead and run 

```
npm run build-client
```

You should now have an updated `/build` folder in `/mars-rover-image-browser/client/`



## Running a production build

From the project root, go ahead and run the following command which creates a client build, starts the back-end server and runs the cliend build

```
npm run start-prod

```



## Built With

* [Creact React App](https://github.com/facebook/create-react-app)

* [Semantic UI React](https://react.semantic-ui.com/collections/message/#variations-negative)

* [React Redux](https://github.com/reduxjs/react-redux)

* [Redux Saga](https://github.com/redux-saga/redux-saga)



## Future Development Considerations

##### Testing

- Create tests to ensure custom components such as `<PhotoDisplay/>` render what they are supposed to, when they are supposed to
- Incorporate integration tests to ensure action creators, sagas and reducers are working together properly to update the store
- Incorporate e2e tests in the browser to test overall user experience



#### Performance & Scalability

- Consider using a library such as [Immutable.js](https://github.com/immutable-js/immutable-js) to help insure immutability is maintained as the app grows
- Consider using memoized selectors to reduce excess rendering of components ([reselect](https://github.com/reduxjs/reselect))


##### Content

Provide users with additional information about the rovers, such as history and/or specifications about the crafts.  

## Authors

* **Barry Ross** 

## References

- [Setting up React/Node Project](https://www.codementor.io/kakarganpat/how-to-setup-react-and-node-js-in-a-project-koxwqbssl) - Very helpful tutorial regarding using node as a proxy in conjuction with React

