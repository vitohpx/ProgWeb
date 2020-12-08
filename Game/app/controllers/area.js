const models = require("../models/index");
const Area = models.Area;

async function index(req,res){
    const areas = await Area.findAll();
    areas.forEach(area => console.log(area));
    res.render("area/index",{
        areas: areas.map(area => area.toJSON())
    })
}

module.exports = {index}