const express = require('express');
const router = express.Router();
path = require('path')


router.get('/', (request, response) => {
    response.status(202).sendFile(path.resolve("index.html"));
})


module.exports = router;