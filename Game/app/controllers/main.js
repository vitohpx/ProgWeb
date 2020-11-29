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

function game(req,res){
    res.render("main/game",{   
    });
}

function ui(req,res){
    res.render("main/ui",{

    });
}

module.exports = {index,sobre,game,ui};