import {PrismaClient} from "@prisma/client"
import { emitWarning } from "process";

const prisma = new PrismaClient();


interface UpdateParams{
    firstName : string;
    lastName: string;
    email:string
}


async function  updateUser({firstName,lastName,email}:UpdateParams) {
    const res  = await prisma.user.update({
        where:{email:email},
        data:{
            firstName,
            lastName
        }
    })
    console.log(res);
}


async function insertUser(username:string,password:string,firstName:string,lastName:string){
    const res = await prisma.user.create({
        data:{
            email:username,
            password:password,
            firstName:firstName,
            lastName:lastName

        },
        select:{
            id:true
        }
    })

}

// insertUser("abc@gmail.com","ggg","vivek","arora");
updateUser({
    email:"abc@gmail.com",
    firstName:"vivek",
    lastName:"gro"
})
