var express = require("express")

var app = express();
var bodi = require("body-parser");
app.use(bodi.urlencoded({extened:true}))
var mongoose = require('mongoose');

app.use(express.json());
// const client = new MongoClient(uri, );



mongoose.connect("mongodb+srv://uditkhanna112:uditkhanna112@cluster0.yljy8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true }, (err,db) => {
  if(err){
    return console.log('Unable to connect'+err);
  }

    console.log('Connected');
});


var schema = new mongoose.Schema({
  name: String,
  source:String,
  leadType:String,
  contact:String,
  city:String,
  address:String,
  verifyStatus:Boolean,
  Dateverify:String
},
{ timestamps: true })
var schema2 = new mongoose.Schema({
  donorname: String,
  donorcontact:String,
  donorage:Number,
  city:String,
  address:String,
  negativedate:String
},
{ timestamps: true })


var mess = mongoose.model("mess",schema);
var mess1 = mongoose.model("mess1",schema2);


app.get("/wishes2",function(req,res){
  res.render("wishes2.ejs");  
  
});
app.get("/",function(req,res){
  res.render("home.ejs");
});
app.get("/wishes",function(req,res){
  res.render("wishes.ejs");
})
app.get("/plasma",(req,res)=>{
  res.render("plasma.ejs");
})
app.get("/display",function(req,res){

  mess.find({},function(err,details){
    if(err){
      console.log(err)
    }
    else
  res.render("display.ejs",{arr:details});  
  // console.log(details);  
  });
  
});
app.post("/display2",function(req,res){
  mess.find({leadType:req.body.Leads},function(err,details){
    if(err){
      console.log(err)
    }
    else
  res.render("display.ejs",{arr:details});  
  console.log(details);  
  });
  
});

app.post("/display",function(req,res){
  var name=req.body.name;
  var source=req.body.Source;
  var leadType=req.body.Leads;
  var contact=req.body.Contact;
  var city=req.body.City;
  var address=req.body.address;
  console.log(req.body.Dateverify);
  var Dateverify=req.body.Dateverify;
  var verifyStatus=req.body.verifyStatus;
  
  var newmes={name:name,source:source,leadType:leadType,contact:contact,city:city,
  address:address,verifyStatus:verifyStatus,Dateverify:Dateverify};
mess.create(newmes,function(err,newly){
  if(err){
    console.log(err);
  }
  else
  {
    console.log("add");
    res.redirect("/display")
  }
})
  
});

app.get("/plasmadonors",(req,res)=>{
  mess1.find({},function(err,details){
    if(err){
      console.log(err)
    }
    else
  res.render("plasmadonors.ejs",{arr:details});  
  
})
})
app.post("/displayPlasma",(req,res)=>{
  var donorname=req.body.name;
  var donorcontact=req.body.Contact;
  var donorage=req.body.Age;
  var city=req.body.City;
  var address=req.body.address;
  var negativedate=req.body.NegativeVerify;
  var newmes2={donorname:donorname,donorcontact:donorcontact,donorage:donorage,city:city,
    address:address,negativedate:negativedate};
    mess1.create(newmes2,function(err,newly){
      if(err){
        console.log(err);
      }
      else
      {
        console.log("add");
        res.redirect("/plasmadonors")
      }
    })
})


app.use('/assets',express.static('assets'))


var port=process.env.PORT || 3000;
app.listen(port);