# React Redux Starter Kit

[![Build Status](https://travis-ci.org/davezuko/react-redux-starter-kit.svg?branch=master)](https://travis-ci.org/davezuko/react-redux-starter-kit?branch=master)
[![dependencies](https://david-dm.org/davezuko/react-redux-starter-kit.svg)](https://david-dm.org/davezuko/react-redux-starter-kit)
[![devDependency Status](https://david-dm.org/davezuko/react-redux-starter-kit/dev-status.svg)](https://david-dm.org/davezuko/react-redux-starter-kit#info=devDependencies)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

The last readme was nice and all but I think it needs to change.

Please check https://github.com/davezuko/react-redux-starter-kit for the full original readme and stuff (and credits).

## Project Structure

The project structure presented in this boilerplate is **fractal**, where functionality is grouped primarily by feature rather than file type. This structure is only meant to serve as a guide, it is by no means prescriptive. That said, it aims to represent generally accepted guidelines and patterns for building scalable applications. If you wish to read more about this pattern, please check out this [awesome writeup](https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure) by [Justin Greenberg](https://github.com/justingreenberg).

```
.
├── build                    # All build-related code
├── public                   # Static public assets (not imported anywhere in source code)
├── server                   # Express application that provides webpack middleware
│   └── main.js              # Server application entry point
├── src                      # Application source code
│   ├── index.html           # Main HTML page container for app
│   ├── main.js              # Application bootstrap and rendering
│   ├── normalize.js         # Browser normalization and polyfills
│   ├── components           # Global Reusable Components
│   ├── containers           # Global Reusable Container Components
│   ├── layouts              # Components that dictate major page structure
│   │   └── PageLayout       # Global application layout in which to render routes
│   ├── routes               # Main route definitions and async split points
│   │   ├── index.js         # Bootstrap main application routes with store
│   │   ├── Home             # Fractal route
│   │   │   ├── index.js     # Route definitions and async split points
│   │   │   ├── assets       # Assets required to render components
│   │   │   ├── components   # Presentational React Components
│   │   │   └── routes **    # Fractal sub-routes (** optional)
│   │   └── Counter          # Fractal route
│   │       ├── index.js     # Counter route definition
│   │       ├── container    # Connect components to actions and store
│   │       ├── modules      # Collections of reducers/constants/actions
│   │       └── routes **    # Fractal sub-routes (** optional)
│   ├── store                # Redux-specific pieces
│   │   ├── createStore.js   # Create and instrument redux store
│   │   └── reducers.js      # Reducer registry and injection
│   └── styles               # Application-wide styles (generally settings)
└── tests                    # Unit tests
```


