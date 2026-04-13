function checkAccessKey(req,res,next){
    let key= req.headers['x-access-key']
    if(key!=='letmein'){
        return res.status(401).json({"status":"denied","message":"Access key required"}
)}
    req.access={
        key:'letmein',
        grantedAt:Date.now()
    }
next();
}
function attachAdminMeta(req, res, next) {
  req.adminMeta = {
    area: "stats"
  };
  next();
}
module.exports = {
checkAccessKey,
attachAdminMeta
}