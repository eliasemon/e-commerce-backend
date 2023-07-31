# Project Structure Documentation

This documentation aims to provide a step-by-step understanding of the project structure. It outlines the purpose and usage of each directory and file, enabling developers to navigate and organize their code effectively.

## Table of Contents

1. [Introduction](#introduction)
2. [Directory Structure](#directory-structure)
3. [API Versioning](#api-versioning)
4. [Business Logic](#business-logic)
5. [Middleware](#middleware)
6. [Routes](#routes)
7. [Utils](#utils)
8. [Application Files](#application-files)
9. [Additional Files and Directories](#additional-files-and-directories)

## Introduction

The purpose of this documentation is to provide a detailed explanation of the project structure. By following this guide, developers can gain a comprehensive understanding of the file organization and purpose within the project.

## Directory Structure

The project follows a modularized structure and maintains the following directory hierarchy:

```
.
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug.yml
│   │   ├── features.yml
│   │   └── help.yml
│   └── workflows/
│       └── code-checker.yml
├── .husky/
│   ├── _/
│   │   ├── .gitignore
│   │   └── husky.sh
│   ├── commit-msg
│   └── pre-commit
├── .vscode/
│   └── settings.json
├── config/
│   └── default.js
├── docs/
│   ├── project-structure.md
│   └── starter-kit overview.md
├── src/
│   ├── api/
│   │   └── v1.0/
│   │       ├── admin/
│   │       │   └── index.js
│   │       ├── common/
│   │       │   └── index.js
│   │       ├── public/
│   │       │   ├── authentication
│   │       │   └── demo/
│   │       │       ├── controller.js
│   │       │       └── index.js
│   │       └── user/
│   │           └── index.js
│   ├── lib/
│   │   └── demo/
│   │       ├── demoService.js
│   │       └── index.js
│   ├── middleware/
│   │   └── global/
│   │       ├── index.js
│   │       ├── reqIdGenerator.js
│   │       └── reqResLogger.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── admin.js
│   │   ├── public.js
│   │   └── index.js
│   ├── utils/
│   │   ├── logger.js
│   │   └── routesCombinator.js
│   ├── app.js
│   ├── index.js
│   └── production.js
├── test/
│   └── demo.test.js
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .prettierignore
├── .prettierrc.json
├── CODE_OF_CONDUCT.md
├── commitlint.config.js
├── jest.config.js
├── nodemon.json
├── package.json
└── README.md
```


The `src` directory is the root directory for the project source code and contains the majority of the codebase.

## API Versioning

The API versioning strategy employed in this project follows a directory-based approach. Inside the `src/api` directory, there is a `v1.0` directory that houses the version 1.0 of the API.

Within the `v1.0` directory, you will find specific folders representing different modules or functionalities. The `admin`, `user`, and `public` folders contain code related to their respective modules. Additionally, a `common` folder is available for shared files across multiple modules.

`public` folder contains an `authentication` folder, which handles authentication-related functionality. Additionally, there are task-specific folders within the modules, such as the `demo` folder, which includes a `controller.js` file responsible for handling the related task.

## Business Logic

The `src/lib` directory is dedicated to storing the business logic of the application. It consists of task-specific folders that represent different functionalities. These folders encapsulate the business logic for their respective tasks. For example, the `demo` folder might contain a `demoService.js` file responsible for handling the business logic related to the demo task.

## Middleware

Middleware plays a crucial role in request processing and is organized within the `src/middleware` directory. The `global` directory within middleware holds global middleware files that apply to the entire application.

Inside the `global` directory, you will find the `index.js` file, which serves as an entry point for global middleware. Additionally, there are `reqIdGenerator.js` and `reqResLogger.js` files that implement request ID generation and request/response logging, respectively.

If there is a need for private middleware, you can create a separate directory within `middleware` and place the corresponding middleware files inside.

## Routes

The `src/routes` directory contains route-related files. It encompasses different route files representing various API endpoints. For versioning purposes, API endpoints follow a specific format, such as `/api/v1/demoRoutes`. This ensures organized and versioned API routing.

The route files, such as `admin.js`, `public.js`, and `index.js`, handle incoming requests and map them to the appropriate controller or middleware.

You may create `commonRoutes.js` file, which is used to store common routes that are shared across multiple modules within the API. If there are any routes that are used by multiple modules, they can be defined in this centralized file. By centralizing these shared routes, the codebase promotes reusability, reduces duplication, and simplifies the management of common functionality.

## Utils

The `src/utils` directory houses utility files that provide common functions and reusable code across the application. Two files exist within this directory:

- `logger.js`: This file contains utility functions for logging purposes, allowing for centralized and consistent logging throughout the application.
- `routesCombinator.js`: The `routesCombinator.js` file provides a utility function for combining and organizing route files within the application.

## Application Files

- `app.js`: The `app.js` file sets up the Express application. It initializes necessary middleware, such as CORS and JSON parsing. It also imports the global middleware files and combines all routes using the `routesCombinator` utility.
- `index.js`: The `index.js` file creates an HTTP server using the `http` module. It imports the `app.js` file, sets the server to listen on the specified port, and logs a message upon successful server start.
- `production.js`: The `production.js` file is responsible for managing the application in a production environment. It utilizes the `cluster` module to fork multiple instances of the application based on the available CPU count. This enables better utilization of system resources and improves application performance and reliability.

## Additional Files and Directories

In addition to the directories mentioned above, several additional files contribute to the project structure:

- `.eslintignore`, `.eslintrc.json`: Configuration files for ESLint, a popular linter for JavaScript.
- `.gitignore`: Specifies which files and directories should be ignored by Git.
- `.prettierignore`, `.prettierrc.json`: Configuration files for Prettier, a code formatter.
- `CODE_OF_CONDUCT.md`: A file outlining the project's code of conduct.
- `commitlint.config.js`: Configuration file for Commitlint, a tool for enforcing commit message conventions.
- `jest.config.js`: Configuration file for the Jest testing framework.
- `nodemon.json`: Configuration file for Nodemon, a utility for automatically restarting the server during development.
- `package.json`: The project's package file, containing dependencies, scripts, and other metadata.
- `README.md`: The main project readme file, providing essential information about the project.
