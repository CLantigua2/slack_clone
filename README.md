
# SlackClone

This app was created as a side project while attending Lambda School. It was modeled after the Slack application and is not meant to be used as a production ready app, simply a demostrational app. This app will include the following features per MVP.

## MVP Features

1. Allow a user to register an account.

 -a. Encrypt the password given through backend hashing. <br>
 -b. Generate a json web token for that account to use.  <br>
 -c. Deny access if the user credentials do not match. <br>

2. Allow a user to sign in

   -a. User should be able to sign in using the credentials they registered with. <br>
   -b. Client should authenticate the users token and grant access to restricted areas of the site. <br>
   -c. User should be able to edit their information once they have been granted access to the site.
   -d. User should be able to delete their account once signed in.

3. Allow signed in users to view and edit channels & posts

  -a. users should be able to view all of the created channels. <br>
  -b. users should be able to create new channels.<br>
  -c. users should be able click on the channels and view posts from other users tied to those channels.<br>
  d. users should be able to post comments in those channels.<br>
  e. users should be able to edit those comments or delete them.<br>

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Concurrently runs [http://localhost:9000](http://localhost:9000)
using nodemon to watch for changes to the backend NodeJS server and [http://localhost:3000](http://localhost:3000) for the frontend React app.

The page will reload if you make edits.<br>
You will also see any lint errors in the console. <br>
This is to be ran from the root folder.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## API routes and calls

`Building out this section soon`
