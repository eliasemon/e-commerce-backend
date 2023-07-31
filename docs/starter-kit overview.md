# Express Backend Starter Kit

## Overview
---

This Express backend starter kit is a comprehensive and well-tested solution for building scalable and reliable web applications. It includes a number of features that make it easy to get started, including:

- A comprehensive set of dependencies, including Express, Morgan, Multer, Swagger UI Express, UUID, Winston, and Winston Daily Rotate File.
- A well-organized directory structure, with separate directories for code, tests, and documentation.
- A number of scripts that make it easy to develop, test, and deploy your application.

---
## Scripts
---
The `scripts` section in the `package.json` file contains various commands that can be executed using `yarn`. These scripts provide shortcuts for running common development tasks and can be invoked from the command line.

<details>
<summary><strong>Scripts Details</strong></summary>

**dev**

- Command: `nodemon src/index.js`
- Description: Starts the development server using Nodemon, which automatically restarts the server whenever changes are detected in the source files.

**start**

- Command: `node src/production.js`
- Description: Starts the production server by executing the `production.js` file using Node.js.

**lint**

- Command: `eslint .`
- Description: Runs ESLint to perform code linting on all JavaScript files in the project.

**format**

- Command: `prettier --write "src/**/*.js"`
- Description: Formats all JavaScript files in the `src` directory using Prettier, which enforces consistent code formatting.

**fix**

- Command: `eslint . --ext .js --fix`
- Description: Attempts to automatically fix linting issues in JavaScript files by running ESLint with the `--fix` flag.

**workspace:setup**

- Command: `yarn install --frozen-lockfile && yarn prepare`
- Description: Sets up the workspace by installing dependencies using the `frozen-lockfile` flag and executing the `prepare` script.

**prepare**

- Command: `husky install`
- Description: Configures Husky by installing the necessary Git hooks for running pre-commit and commit-msg scripts.

**test**

- Command: `jest`
- Description: Runs the test suite using Jest, which is a popular JavaScript testing framework.

**test:watch**

- Command: `jest --watch --onlyChanged`
- Description: Runs the test suite in watch mode, re-running only the tests that have changed since the last run.

**release**

- Command: `standard-version`
- Description: Generates a new release version based on the commit history using Standard Version. It automatically updates the version number and generates changelogs.

**release:minor**

- Command: `standard-version --release-as minor`
- Description: Generates a minor release version using Standard Version.

**release:patch**

- Command: `standard-version --release-as patch`
- Description: Generates a patch release version using Standard Version.

**release:major**

- Command: `standard-version --release-as major`
- Description: Generates a major release version using Standard Version.

Ensure that the required `dependencies` for each script are installed as specified in the `devDependencies` section of your `package.json` file.

</details>

---
## Dependencies
---
The Express Backend Starter Kit includes a comprehensive set of dependencies, which are listed below, along with a brief description of their purpose.

<details>
<summary><strong>Dependencies Detail</strong></summary>

Package                     | Version    | Description                                                                                                        | Purpose
--------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------ | -------
config                       | ^3.3.9     | A configuration management library that enables separation of configuration settings for different environments.     | Facilitates dynamic configuration loading based on the runtime environment, simplifying environment-specific settings management.
cors                         | ^2.8.5     | Middleware for Express.js that handles Cross-Origin Resource Sharing (CORS) to allow cross-origin requests.          | Enables cross-origin requests from client applications hosted on different domains, enhancing the security and accessibility of your APIs.
dotenv                       | ^16.0.3    | Loads environment variables from a .env file into process.env.                                                    | Provides a convenient way to configure environment-specific settings, such as API keys or database connection details, without hardcoding them into the code.
express                      | ^4.18.2    | A fast and minimalist web application framework for Node.js.                                                      | Simplifies the creation of RESTful APIs and web servers, providing features like routing, middleware, and request/response handling.
morgan                       | ^1.10.0    | HTTP request logger middleware for Node.js.                                                                       | Logs incoming requests, including details such as request method, URL, response status, and response time, aiding in debugging and monitoring.
multer                       | ^1.4.5-lts.1 | Middleware for handling multipart/form-data (file upload) in Express.js.                                         | Enables the server to handle file uploads, providing features like file validation, renaming, and storage management.
swagger-ui-express           | ^4.6.3     | Middleware that serves Swagger UI for API documentation.                                                         | Provides an interactive interface to explore and test your APIs, enhancing the developer experience and simplifying API consumption.
uuid                         | ^9.0.0     | A library for generating and parsing Universally Unique Identifiers (UUIDs).                                     | Enables the creation of unique identifiers, useful for scenarios like generating unique keys or assigning unique identifiers to entities in the database.
winston                      | ^3.9.0     | A versatile logging library for Node.js.                                                                          | Allows logging of various types of messages, with customizable transports and formatting options, improving logging capabilities in your application.
winston-daily-rotate-file    | ^4.7.1     | A transport for Winston that rotates log files on a daily basis.                                                  | Enables log file rotation based on a specified schedule, preventing log files from growing indefinitely and simplifying log management.
winston-logstash             | ^1.2.0     | A transport for Winston that sends logs to Logstash.                                                              | Allows integration with Logstash for centralized log collection and analysis, enabling you to forward logs to a remote Logstash server.

</details>

### Logger Configuration

The Express backend starter kit utilizes the following dependencies for logging:

- **winston:** A versatile logging library for Node.js.
- **winston-daily-rotate-file:** A transport for Winston that rotates log files on a daily basis.
- **uuid:** A library for generating and parsing Universally Unique Identifiers (UUIDs).


<details>
<summary><strong>Logger configuration overview</strong></summary>

**Step 1:** In the [`src/utils/logger.js`](../src/utils/logger.js) file, the logger configuration is defined using the winston library. This configuration sets up different transports for logging to files and the console. Below is an explanation of each configuration option:

- `level`: Specifies the log level. In this case, the log level is set to `info`.
- `format`: Defines the log message format using the `winston.format` module. The provided format includes a timestamp and pretty print for better readability.
- `transports`: An array of transports that handle where and how logs are stored. In this configuration, three transports are used:
    - `DailyRotateFile`: A transport that rotates log files daily. It creates separate log files for regular logs and error logs, with a maximum retention of 30 days.
    - `Console`: A transport that logs messages to the console. It also includes colorization and a custom message format.

**Step 2:** To use the logger, require it in [`src/middleware/global/reqResLogger.js`](../src/middleware/global/reqResLogger.js), the `logger.js` is imported from `src/utils` and used to log incoming requests and outgoing responses.

The implementation of a request/response logger middleware. Let's explore the details:

- The `reqResLogger` middleware function is defined, which takes in three parameters: `req` (request), `res` (response), and `next` (next middleware in the chain).
    - Inside the middleware function, relevant information from the request object is extracted using destructuring. This includes the HTTP method, URL, request body, parameters, query parameters, IP address, and request ID.
    - Using the `logger.info()` method, a log message is generated and logged. The log message provides details about the received request, including the method, request ID, source IP address, and destination URL. Additionally, the log message includes the request body, parameters, and query parameters for a more comprehensive log entry.
    - The `res.on('finish', ...)` event listener is set up to capture the completion of the response. Once the response is finished, the event listener triggers a callback function.
        - Inside the callback function, the response object is accessed to retrieve the response status code.
        - Using the `logger.info()` method again, a log message is generated and logged to indicate the response status code and the corresponding URL.
    - Finally, the `next()` function is called to pass control to the next middleware in the chain.
- The `reqResLogger` middleware function is exported as the default module export.

**Step 3:** Additionally, in [`src/middleware/global/reqIdGenerator.js`](../src/middleware/global/reqIdGenerator.js), the `uuid` package is used to generate a unique ID for each request. The generated ID is attached to the request object (`req.id`) and can be used for logging purposes. Below is an explanation of request Id generator details:

- The `require('uuid')` statement imports the `uuidv4` function from the 'uuid' package. The `uuidv4` function generates a version 4 UUID, which is a unique identifier.
- The `reqIdGenerator` function is a middleware function that takes three parameters: `req`, `res`, and `next`. This function is executed for each incoming request.
    - Inside the `reqIdGenerator` function, `req.id` is assigned the value of `uuidv4()`. This generates a unique request ID using the `uuidv4` function and assigns it to the id property of the `req` object. The `req` object represents the incoming request in Express.
    - Finally, the `next()` function is called to pass control to the next middleware function in the chain. This allows the request to continue processing through subsequent middleware functions or route handlers.
- The `reqIdGenerator` middleware function is exported as the default module export.

</details>

---
## Dev-Dependencies
---
The Express Backend Starter Kit includes a comprehensive set of Dev-Dependencies, which are listed below, along with a brief description of their purpose.

<details>
<summary><strong>Dev-Dependencies Details</strong></summary>

Package                    | Version | Description                                                                         | Purpose
-------------------------- | ------- | ----------------------------------------------------------------------------------- | -------
@commitlint/cli             | ^17.6.3 | Linting tool for commit messages, ensuring they adhere to a specified format.       | Helps maintain a consistent and standardized format for commit messages, improving readability and facilitating automated changelog generation.
@commitlint/config-conventional | ^17.6.3 | Configuration preset for commitlint that follows the conventional commit format.   | Provides a pre-defined set of rules and conventions for commit messages, ensuring a consistent and semantic format.
@faker-js/faker             | ^8.0.2  | A library for generating realistic test data.                                      | Simplifies the creation of mock or test data, aiding in the development and testing of your application.
eslint                      | ^8.41.0 | A pluggable JavaScript linter.                                                     | Enforces consistent coding styles and identifies potential issues or errors in your JavaScript code, promoting code quality and maintainability.
eslint-config-airbnb        | ^19.0.4 | Airbnb's ESLint configuration.                                                      | Provides a set of ESLint rules and configurations based on Airbnb's JavaScript style guide, helping to maintain a consistent coding style across your project.
eslint-config-airbnb-base   | ^15.0.0 | Airbnb's ESLint configuration (base rules without React-specific rules).              | Provides a set of ESLint rules and configurations based on Airbnb's JavaScript style guide (without React-specific rules), helping to maintain a consistent coding style across your project.
eslint-config-prettier      | ^8.8.0  | Disables ESLint rules that conflict with Prettier.                                  | Allows ESLint and Prettier to work together smoothly by disabling rules that could cause conflicts between the two tools.
eslint-plugin-import        | ^2.27.5 | ESLint plugin for linting import/export syntax and behavior.                         | Provides additional ESLint rules for linting import and export statements, ensuring proper usage and preventing common mistakes.
eslint-plugin-prettier      | ^4.2.1  | ESLint plugin that integrates Prettier as an ESLint rule.                            | Allows Prettier to format code as an ESLint rule, ensuring consistent code formatting across the project and maintaining code quality.
husky                       | ^8.0.3  | Git hooks made easy.                                                                | Facilitates the integration of Git hooks into your development workflow, enabling you to run scripts or commands automatically at specific Git events, such as pre-commit or pre-push.
jest                        | ^29.5.0 | A JavaScript testing framework.                                                     | Provides a framework for writing and running unit tests, enabling you to verify the correctness of your code and catch potential issues.
lint-staged                 | ^13.2.2 | Runs linters on staged files.                                                       | Allows you to run specified linters on only the files that have been staged (i.e., files that are ready to be committed), improving linting efficiency and reducing unnecessary linting processes.
nodemon                     | ^2.0.22 | A utility that automatically restarts your Node.js application on file changes.      | Facilitates development by automatically restarting the server whenever a file is modified, eliminating the need for manual restarts during development.
prettier                    | ^2.4.1  | Opinionated code formatter.                                                         | Enforces a consistent code style by automatically formatting your code based on predefined rules, improving code readability and maintainability.
standard-version            | ^9.5.0  | Automates versioning and CHANGELOG generation based on conventional commit messages. | Simplifies the release process by automatically updating the version number, generating a changelog, and tagging the release based on commit messages.
supertest                   | ^6.3.3  | A library for testing HTTP servers.                                                 | Enables writing HTTP integration tests for your backend server, simulating requests and verifying responses for different routes and endpoints.

</details>

### Dev-Depencies configuration
---
In this Express Backend Starter Kit, carefully selected devDependencies have been included to streamline development tasks such as code linting, formatting, testing, and more. These dependencies ensure a smooth and efficient development experience.

<details>
<summary><strong>.eslint Configuration</strong></summary>

The following devDependencies are used for the .eslintrc.json configuration:

- `eslint`: ^8.41.0
- `eslint-config-airbnb`: ^19.0.4
- `eslint-config-airbnb-base`: ^15.0.0
- `eslint-config-prettier`: ^8.8.0
- `eslint-plugin-import`: ^2.27.5
- `eslint-plugin-prettier`: ^4.2.1

These devDependencies are responsible for providing the ESLint configuration presets and plugins necessary for the specified rules and style guide.

<details>
<summary><strong>.eslintrc.json Configuration</strong></summary>

The `.eslintrc.json` file is used to configure ESLint, a popular linting tool for JavaScript code. In this project, the following configuration is used:

- `extends: ["airbnb-base", "prettier"]`: Extends the configurations from airbnb-base and prettier presets. It inherits the rules and settings defined in these configurations.
- `env`: Specifies the environments in which the code will run. In this case, it enables the node environment and sets the ECMAScript version to es2021.
- `parserOptions`: Sets the parser options for ESLint. It defines the ECMAScript version as the latest and specifies the source type as module.
- `plugins: ["prettier"]`: Specifies the ESLint plugins to use. In this case, it includes the prettier plugin.
- `rules`: Defines the specific ESLint rules and their configurations. Here are the rules defined in this configuration:
    - `prettier/prettier`: Configures the prettier rule to enforce the specified code formatting options.
    - `import/newline-after-import`: Requires a newline after import statements.
    - `import/no-unresolved`: Disables the rule that checks for unresolved imports.
    - `import/extensions`: Disables the rule that enforces file extensions in imports.
    - `no-shadow`: Disables the rule that disallows variable shadowing.
    - `linebreak-style`: Disables the rule that enforces a specific linebreak style.
    - `class-methods-use-this`: Disables the rule that requires `this` to be used in class methods.
    - `no-console`: Disables the rule that disallows the use of `console`.

</details>

<details>
<summary><strong>.eslintignore Configuration</strong></summary>

The `.eslintignore` file allows you to specify files and directories that should be ignored by ESLint when performing linting. This configuration:

- Excludes the `node_modules` directory to avoid linting third-party dependencies.
- Ignores the `commitlint.config.js` file, as it is not part of the source code and doesn't require linting.
- Ignores the `logs` directory, assuming it contains log files and doesn't need to be linted.

By using `.eslintignore`, you can prevent ESLint from unnecessarily checking certain files or directories, improving performance, and avoiding false-positive linting errors.

</details>

</details>

<details>
<summary><strong>prettier Configuration</strong></summary>

The devDependencies used for the configuration of `.prettierrc.json` are as follows:

- `prettier`: The main devDependency responsible for code formatting using Prettier.

<details>
<summary><strong>.prettierrc.json Configuration</strong></summary>

The `.prettierrc.json` file is used to configure the formatting rules for Prettier, a code formatting tool.

The provided configuration specifies the following rules:

- `trailingComma`: Sets the style for trailing commas in multi-line code. The value "all" means trailing commas are used whenever possible.
- `tabWidth`: Specifies the number of spaces for indentation.
- `semi`: Enables the use of semicolons at the end of statements.
- `singleQuote`: Enforces the use of single quotes for string literals.
- `endOfLine`: Sets the line ending style to be automatically determined based on the operating system.

These rules ensure consistent and readable code formatting throughout the project.

</details>

<details>
<summary><strong>.prettierignore Configuration</strong></summary>

The `.prettierignore` file is used to specify files or directories that should be ignored by Prettier during the code formatting process.

In the provided configuration, Prettier will ignore the following:

- `node_modules`: Ignores the `node_modules` directory, which typically contains external dependencies and should not be formatted.
- `commitlint.config.js`: Ignores the `commitlint.config.js` file, which is used for configuring commitlint and does not need formatting.

By using these configuration files, you can ensure consistent and well-formatted code throughout your project while ignoring specific files or directories that don't require formatting.

</details>

</details>

<details>
<summary><strong>nodemon.json Configuration</strong></summary>

The `nodemon.json` file is used to configure the behavior of Nodemon, a development utility that automatically restarts the Node.js application when file changes are detected.

The configuration details are as follows:

- `watch`: An array of directories or files to watch for changes. In this example, it is set to watch the `./src` directory.
- `ext`: A string or an array of file extensions to watch for changes. In this example, it is set to watch for changes in files with extensions `.js`, `.json`, and `.yml`.
- `exec`: The command to execute when changes are detected. In this example, it is set to execute the `node ./src/index.js` command.
- `ignore`: An array of patterns or files to ignore. In this example, it is configured to ignore the `.git` directory, any `node_modules` directory nested within another `node_modules` directory, and the `./src/test` directory.
- `verbose`: A boolean value indicating whether to enable verbose output. If set to `true`, Nodemon will log detailed information about the application's restarts and file changes.
- `execMap`: An object that maps file extensions to specific commands. In this example, it maps the `.js` extension to the `node` command.
- `restartable`: A string indicating how the application can be restarted manually. In this example, it is set to `"rs"`, allowing the application to be restarted by typing `rs` in the terminal.

</details>

<details>
<summary><strong>Commitlint Configuration (commitlint.config.js)</strong></summary>

The following dev-dependencies are used for `commitlint.config.js`:

- `@commitlint/cli`
- `@commitlint/config-conventional`

These dependencies are used for configuring commitlint and enforcing conventional commit message formats in your project.

Configuration details:

- Extends the `@commitlint/config-conventional` preset for common commit message rules.
- Additional rules defined in the `rules` object:
    - `header-max-length`: Enforces a maximum header length of 100 characters.
    - `subject-empty`: Requires a non-empty subject.
    - `subject-full-stop`: Disallows trailing periods in the subject.
    - `type-empty`: Requires a non-empty type.
    - `type-enum`: Enforces a list of valid commit types.

</details>

<details>
<summary><strong>Husky Configuration</strong></summary>

The following dev-dependencies are used for husky configuration:

- `husky`
- `lint-staged`

Husky is a Git hook manager that allows you to run scripts before committing or pushing code. It is commonly used to enforce code quality and formatting standards.

Lint-staged is a tool that allows you to run scripts on staged files in Git. It is often used in conjunction with Husky to run linters or code formatters only on the files that are being committed.

These dev-dependencies provide the necessary functionality for setting up Git hooks and running pre-commit or pre-push scripts in your project.

- **Commit Message Hook (commit-msg)**

    - File: `.husky/commit-msg`
    - Purpose: Validates commit messages against commitlint rules.
    - Process:
        1. Invokes the `commitlint` command with the `--edit` flag, which opens an editor to compose or modify the commit message.
        2. Validates the commit message against the defined commitlint rules.

- **Pre-Commit Hook (pre-commit)**

    - File: `.husky/pre-commit`
    - Purpose: Performs pre-commit checks before allowing a commit to proceed.
    - Process:
        1. Runs the `lint-staged` script to perform linting and formatting checks on staged files using ESLint and Prettier.
        2. If any issues are found, prevents the commit.
        3. Executes the `test` script to run the test suite, ensuring code integrity before committing.

The `.husky` folder contains the necessary scripts and hooks to integrate commitlint and automate pre-commit checks.

**lint-staged Configuration**

- The `lint-staged` configuration in `package.json` ensures that specific tasks are performed on staged files before committing:

    - `*.js` files:
        - Runs ESLint with the `--fix` option to automatically fix linting errors in JavaScript files.
        - Runs ESLint to check for any remaining linting errors in JavaScript files.
    - `*.{js,json}` files:
        - Runs Prettier to automatically format JavaScript and JSON files.

These checks help enforce code quality and consistency on the staged files before committing.

**Note**: The `$(dirname -- "$0")/_/husky.sh` line in both hook scripts is responsible for sourcing the Husky script for proper execution.

Ensure that the required dependencies for commitlint and Husky are installed as specified in the `devDependencies` section of your `package.json` file.

</details>

<details>
<summary><strong>Jest Configuration</strong></summary>

The Jest configuration file (`jest.config.js`) is used to customize the behavior of the Jest testing framework. It allows you to define various options and settings for running your tests.

The following devDependencies are used for the Jest configuration:

- `jest`: "^29.5.0"
- `supertest`: "^6.3.3"

Make sure to install these dependencies before configuring Jest.

Configuration details:

- `testEnvironment`: Specifies the test environment. In this case, it is set to `'node'` for running tests in a Node.js environment.
- `testMatch`: Defines the patterns to locate test files. It uses glob patterns to match test file paths. In the example above, it matches all files with a `.test.js` extension inside the test directory.
- `moduleFileExtensions`: Specifies the file extensions to consider as modules. In this case, it is set to only include JavaScript files (`js`).
- `coverageDirectory`: Defines the directory where the coverage reports will be generated. In the example, it is set to `./coverage`.
- `collectCoverageFrom`: Specifies the files to collect coverage information from. It uses glob patterns to match the source code files. In the example, it collects coverage from all files inside the src directory with a `.js` extension.

Feel free to modify these configurations according to your project's needs.

Make sure to run your tests using the appropriate scripts defined in your `package.json` file, such as `yarn test`.

</details>

<details>
<summary><strong>Versioning Configuration</strong></summary>

The `.versionrc.json` file is used to configure the behavior and settings of the versioning tool, such as `standard-version`. It allows you to define the types of commits, their corresponding sections in the changelog, and the URLs for commit and comparison links. It is typically used in conjunction with versioning tools like 

- `standard-version`: "^9.5.0".

Configuration details:

- `types`: Defines the types of commits and their corresponding sections in the changelog. Each type is represented by an object with the `type` and `section` properties. The `hidden` property can be used to hide specific types from the changelog.

- `commitUrlFormat`: Specifies the URL format for commit links. It is used to generate commit links in the changelog. The `{{hash}}` placeholder will be replaced with the commit hash.

- `compareUrlFormat`: Specifies the URL format for comparison links. It is used to generate comparison links between tags in the changelog. The `{{previousTag}}` and `{{currentTag}}` placeholders will be replaced with the respective tag names.

Modify these configurations as per your project's requirements and versioning tool.

</details>

---
## Conclusion
---

The Express Backend Starter Kit provides a solid foundation for building Express.js backend applications. With pre-configured tools for linting, formatting, testing, and Git hooks, it helps you maintain code quality and streamline the development process. The Express Backend Starter Kit is designed to support your backend development needs and empower you to build robust and efficient applications.
