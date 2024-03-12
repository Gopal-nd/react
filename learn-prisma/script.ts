import { PrismaClient } from '@prisma/client'  
const prisma = new PrismaClient()

async function main(){
    await prisma.user.deleteMany()
const user = await prisma.user.create({
    data:{
        name:"boss",
        age:12,
        email:"me@gmail.com",
        isAdmin:true
        
    }
    
})
console.log(user)
}

main()
.catch(e=>{
    console.log(e.message)
})
.finally(async ()=>{
    await prisma.$disconnect()
})
