const logTime= function(req, res,next) {
    console.log(`Time: ${new Date(Date.now())} , Address: ${req.url}`);
    next();
};
module.exports = logTime;