# M21AIE214_calculator
Calculator application using express JS

Roll number: M21AIE214

Functionality of the App:
1. Performs following operations on the array of numbers passed:
    a. addition
    b. subtraction
    c. multiplication
    d. division
2. For subtraction and division, array of number should be of length 2.
3. If any operation is performed with an empty or invalid input (array), it returns "Invalid Input" as output.

Docker image creation:
Following steps are followed while docker image creation:
1. Specify the image should be based on. I have used node:18-alpine as it is stable and lightweight image.
2. Set working directory to ./app
3. Copy package.json and package-lock.json to the ./app. This specifies all the dependencies.
4. Install all dependencies using 'npm install' command.
5. Copy all application files like server.js to the directory.
6. Expose the application to port 9032
7. Start the node application by executing 'npm start' command.
