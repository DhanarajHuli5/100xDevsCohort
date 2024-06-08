// The global catch middleware in Express is designed to handle any errors that occur during the processing of requests. It's a central place to catch and handle errors, providing a consistent error response to the client. Let's break down how it works and how control reaches this function whenever there is an error.


//When an error occurs in any middleware or route handler, it can be passed to the next error-handling middleware using the next(error) function.

//For example, if an error occurs in the /health-checkup route, you can catch it and call next(error) to pass control to the error-handling middleware.

const express = require('express');
const app = express();

app.use(express.json());

app.post('/health-checkup', function(req, res, next){
    try {
        // Simulating an error if kidneys is not an array
        if (!Array.isArray(req.body.kidneys)) {
            throw new Error("Invalid input: kidneys should be an array.");
        }

        const kidneys = req.body.kidneys;
        const kidneysLength = kidneys.length;

        res.send("You have " + kidneysLength + " kidneys");
    } catch (error) {
        // Pass the error to the next error-handling middleware
        next(error);
    }
});

// Global catch - To handle all the errors and helps you give the user a better error message.
app.use((error, req, res, next) => {
    console.error(error.stack);  // Log the error stack for debugging
    res.status(500).json({
        msg: "Sorry, something went wrong!",
        error: error.message // Optionally include the error message for debugging
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
