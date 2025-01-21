// Create web server
// Create a web server using the express module. The server will listen on port 3000.
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});