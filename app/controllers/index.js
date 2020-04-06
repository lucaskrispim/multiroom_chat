class home{
    static index(app,req,res){
        res.render('index');
    }

}

module.exports = () => {
    return home;
}




