# Mocking Practice

The objective of this assignment is to implement mock functions for third party dependencies and utilize the same in testing API routes. This will help us understand how to setup mocking using Jest.

**Consider this scenario**: A computer hardware store has managed to setup their own website with a service request form for their customers. But they have reached out to you to build the backend for this website which will help them manage their customers' servicing requests received from the company website.

## Setup
Like always, the first steps for this assignment are:
1. Open your terminal and navigate to your dedicated assignments folder.
2. Then clone this assignment repo on your local machine.
3. Now open the assignment folder on VSCode.

## Starter code
You will find the following starter code in the `src` folder of the project:
1. Basic Express application setup in `app.js`.
2. MongoDB database connection setup in `db/connections.js`.
3. Model for service requests in `models/serviceRequest.js`.
4. Routes setup in `routes/index.js`.

Run `npm install` to install all the packages listed in the `package.json` file. Then run `npm start` to start the Express server.

**Note**: Please go through the starter code in detail before you start writing your own code.

## Requirements

The database handling code to create and fetch service requests has already been written for you, although you may make changes to it if you wish.

## Email Functionality
The functionality to send an email to the customer after their request is received has not been completed. In order to build this feature, you can use the [Nodemailer](https://nodemailer.com/about/) package. Take a look at the documentation to setup a `sendEmail` function in `utils/email.js`. Then call this function inside the POST route that creates a new service request.

You can read up on how to use your Gmail ID as a sender with Nodemailer [here](https://nodemailer.com/usage/using-gmail/) and [here](https://stackoverflow.com/questions/19877246/nodemailer-with-gmail-and-nodejs).

## Tests and Mocking
Once you have built the email functionality and tested it out manually, it's time to write the tests.

**Note**: In this assignment, we will write tests only for the POST request to create a new service request.

1. Create a `__tests__` folder in your project in a suitable location and start a test file inside it.
2. In this file, you will write a test suite for the `POST /service-requests` route. Since you need to make an HTTP call for your test, you will need to use the [supertest](https://www.npmjs.com/package/supertest) package. You may refer previous assignments' test files to see how supertest is used.
3. You must write 2 mock functions: One to mock the creation of service request in the database and one to send the email to the customer.
4. When you run the test for the POST request, it must use the mock functions instead of the actual functions.

Our goal is to test that our API endpoint integrates with the database and the email utility, but we don't want to test the database and email utility directly since these are third party dependencies.

This means that a manual testing will run the actual operations, but running the automated tests will run the mock operations instead of the actuals.

## Important Points to Note

1. You will have to use your email ID and password to create the email functionality. You can add these in the `.env` file and **make sure that you don't commit this file**, so that your email ID and password remains private to you.

2. Running the tests using `npm test` should not result in an actual DB operation or email send, but the API responses must stay the same.

3. Your tests must check that the respective functions were called with the required parameters. Check the [Jest mock functions documentation](https://jestjs.io/docs/mock-function-api) for tracking function calls.

4. Your tests must check the API response code, response body and response headers.

5. Your test suite must have atleast one happy path test case and one edge case.

## Submission
Once you're ready to submit the assignment, follow these steps on your terminal:
1. Stage your changes to be committed: `git add .`
2. Commit your final changes: `git commit -m "solve assignment"`
3. Push your commit to the main branch of your assignment repo: `git push origin main`

After your changes are pushed, return to this assignment on Canvas for the final step of submission.
