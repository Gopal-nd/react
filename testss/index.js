import pkg from "pg";
const {Client} = pkg;
const client = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"postgres",
    database:"tabel",
    
})

client.connect();

client.query('Select * from users',(err, res)=>{
    if(!err){
        console.log(res.rows)
    }else{
        console.log(err.message)
    }
    client.end;
})
// client.query("INSERT INTO public.users(name, phone) VALUES ('hop','56327');",(err, res)=>{
//     if(!err){
//      console.log('all set')
//         console.log(res.rows)
//     }else{
//         console.log(err.message)
//     }
//     client.end;
// })

