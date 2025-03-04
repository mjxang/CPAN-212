const auth = (req,res,next) => {
if (req.query.username == "mj")
{next();
}
else{
    res.send("you are unauthorized");

}
}


export default auth;