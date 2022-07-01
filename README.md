# jest-boilerplate

This is a boilerplate project that quickly gets you started on a web application with test-driven development using Jest

It includes the following components:

1. jest installed as a dev dependency
2. autocomplete in VS Code working for jest (@types/jest), also as a dev dependency
3. app.js that exposes a sample function
4. test.app.js that tests this sample function
5. package.json with scripts to 
    a. bundle using browserify (exposing app as a standalone)
    b. test using jest
6. index.html that references the generated bundle.js and calls the function

Start by cloning this repository and renaming the folder. Then you can replace the sample function with your own.