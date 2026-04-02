function methodMiddleware(req, res, next) {
  if (!req.switchLog) {
    req.switchLog = [];
  }
  if (req.method === "GET") {
    req.switchLog.push("GET middleware ran");
  }
  next();
}

function queryMiddleware(req, res, next) {
  if (!req.switchLog) {
    req.switchLog = [];
  }
  if (req.query.mode) {
    req.switchLog.push("mode middleware ran");
  }
  next();
}
function specialMiddleware(req, res, next) {
  if (!req.switchLog) {
    req.switchLog = [];
  }
  if (req.query.special === "yes") {
    req.switchLog.push("special middleware ran");
  }
  next();
}
module.exports = {
    methodMiddleware,
    queryMiddleware,
    specialMiddleware
}