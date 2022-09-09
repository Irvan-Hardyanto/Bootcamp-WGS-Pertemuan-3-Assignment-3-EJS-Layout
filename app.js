//import library express.js
const express=require('express');
const expressLayouts=require('express-ejs-layouts');

//inisialisasi objek express.js
const app= express();
const port = 3000;//port number

//set view engine menggunakan ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);//inisilaliasi express layouts

//route default ke halaman index
app.get('/',(req,res)=>{
    const contact = [
        {"name":"Irvan",
        "email":"asd@gmail.com"},
        {"name":"Osas",
        "email":"osas@gmail.com"},
        {"name":"Dobleh",
        "email":"dobleh@gmail.com"},
    ]
    //render itu untuk merender view template tertentu.
    res.render(__dirname+'/views/index.ejs',
    {
        "nama":"index",
        "cont":contact,
        layout:'layouts/main-layout',//ejs mencari di folder views
    });
    res.status(200);
})

//route ke halaman contact
app.get('/contact',(req,res)=>{
    //render templatenya
    res.render(__dirname+'/view/contact.js');
    res.status(200);
})

//route ke halaman about
app.get('/about',(req,res)=>{
    //render templatenya
    res.render(__dirname+'/view/about.js');
    res.status(200);
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})