const models = require("../models/index");
const Curso = models.Curso;

async function index(req,res){
    const cursos = await Curso.findAll();
    res.render("curso/index",{
        cursos: cursos.map(curso => curso.toJSON())
    })
}

async function create(req,res){
    if(req.route.methods.get){
        res.render("curso/create");
    }else{
        Curso.create({
            sigla: req.body.sigla,
            nome: req.body.nome,
            descricao: req.body.descricao,
            areaId: req.body.area,
        });
        res.redirect('/');
    }
}

async function read(req,res){ 
    const curso = await Curso.findOne({where: {id: req.params.id}})   
    res.render("curso/read",{
        curso: curso.toJSON()
    })
}

async function update(req,res){    
}

async function remove(req,res){    
}



module.exports = {index,create,read,update,remove};