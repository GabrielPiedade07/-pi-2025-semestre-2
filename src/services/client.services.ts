import * as clientRepository from "../repositories/client.repository.js";

export async function createClient(data: {
  name: string;
  email: string;
  phone: string;
  company: string;
}) {
  return await clientRepository.create(data);
}

export async function getAllClients() {
  return await clientRepository.findAll();
}

export async function findClientById(id: number) {
  return await clientRepository.findById(id);
}

export async function updateClient(
  id: number,
  data: { name?: string; email?: string; password?: string }
) {
  return await clientRepository.update(id, data);
}

export async function deleteClient(id: number) {
  return await clientRepository.remove(id);
}
