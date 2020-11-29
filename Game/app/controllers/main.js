function index(req,res){
    res.render("main/index",{
        titulo: "Vigilantes da Floresta"    
    });
}


function sobre(req,res){
    res.render("main/about",{
        titulo: "Sobre o Vigilantes da Floresta"    
    });
}

module.exports = {index,sobre}