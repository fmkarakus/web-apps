// require the handlers
const handlers = require('./handlers.js');
const express = require('express');

// build the router
const router = express.Router();

router.get('/', (req, res) => {
  res.send('files API!');
});

// add routes to router
router.use((req, res, next) => {
  console.log('routes!');
  next();
}); 
router.get('/files', handlers.listFiles);
router.get('/files/:name', handlers.fetchAndLoadFile);
router.post('/files/:name', handlers.saveFile);
router.delete('/files/:name', handlers.deleteFile);
// export the router
module.exports = router;;





