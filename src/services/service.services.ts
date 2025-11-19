import * as serviceRepository from "../repositories/service.repository.js";

export async function createService(data: {
  name: string;
  description: string;
  unitPrice: number;
  unitOfMeasure: string;
}) {
  return await serviceRepository.create(data);
}

export async function getAllServices() {
  return await serviceRepository.findAll();
}

export async function findServiceById(id: number) {
  return await serviceRepository.findById(id);
}

export async function updateService(
  id: number,
  data: {
    name?: string;
    description?: string;
    unitPrice?: number;
    unitOfMeasure?: string;
  }
) {
  return await serviceRepository.update(id, data);
}

export async function deleteservice(id: number) {
  return await serviceRepository.remove(id);
}
