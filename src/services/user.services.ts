import * as userRepository from "../repositories/user.repository.js"

export async function createUser(data: { name: string; email:string; password:string}){
    return await userRepository.create(data)
}

export async function getAllUsers(){
    return await userRepository.findAll()
}

export async function findUserById(id: number){
    return await userRepository.findById(id)
}

export async function updateUser(id:number, data : {name?:string;email?:string;password?:string}){
    return await userRepository.update(id, data)
}

export async function deleteUser(id:number){
    return await userRepository.remove(id)
}