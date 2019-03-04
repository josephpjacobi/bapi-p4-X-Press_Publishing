
const express = require('express');
const apiRouter = express.Router();
const artistsRouter = require('./artists.js');
const seriesRouter = require('./series.js');

//Any URL that comes in with /artists will be handled by the 
//artistsRouter
apiRouter.use('/artists', artistsRouter);

//Any URL that comes in with /series will be handled by the 
//seriesRouter
apiRouter.use('/series', seriesRouter);


module.exports = apiRouter;