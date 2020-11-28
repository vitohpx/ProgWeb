function index(req,res){
    res.send("Home page");
}


function sobre(req,res){
    res.render("main/about",{
        titulo: "Sobre o Vigilantes da Floresta"    
    });
}

module.exports = {index,sobre}