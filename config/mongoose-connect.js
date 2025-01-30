const mongoose = require('mongoose');
const dbgr = require('debug')("developement:mongoose");
const config = require('config'); // Ensure you have a configuration file with the MONGODB_URI key





mongoose.connect(`${config.get("MONGODB_URI")}/scratch`).then(() => {
    dbgr('Connected to database');
}).catch((err) => {
    dbgr('Error connecting to database', err);
});
module.exports = mongoose.connection; 
