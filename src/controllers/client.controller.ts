import type { Request, Response } from 'express'
import * as clientService from '../services/client.services.js'

export async function createClient(req: Request, res: Response){
    const { name, email, phone, company} = req.body
    const client = await clientService.createClient({ name, email, phone, company })
    res.status(200).json(client)
}

export async function getAllClient(req: Request, res: Response){
    const client = await clientService.getAllClients();
    res.status(200).json(client)
}

export async function getClientById(req: Request, res: Response){
    const { id } = req.params
    const client = await clientService.findClientById(Number(id))
    client ? res.status(200).json(client) : res.status(404).json({ message:"client not find"})
}

export async function updateClient(req: Request, res: Response){
    const { id } = req.params
    const { name, email, password} = req.body
    const client = await clientService.updateClient(Number(id), {
        name,
        email,
        password
    })
    !client ? res.status(404).json({ message: "Client not find/ Couldnt find user to UPDATE"}) : res.status(200).json(client)
}

export async function deleteclientById(req: Request, res: Response){
    const { id } = req.params
    const client = await clientService.deleteClient(Number(id))
    !client ? res.status(404).json({ message: "client not find/ Couldnt find use to DELETE"}) : res.status(200).json(client)
}
