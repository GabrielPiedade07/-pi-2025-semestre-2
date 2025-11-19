import { Router } from "express";
import * as budgetController from "../controllers/budget.controller.js";
import * as budgetItemController from "../controllers/budgetItem.controller.js"

const router = Router();

router.post("/budget", budgetController.createBudget);
router.get("/budgets", budgetController.getAllBudget);
router.get("/budget/:id", budgetController.getBudgetById);
router.patch("/budget/:id", budgetController.updatebudget);
router.delete("/budget/:id", budgetController.deletebudgetById);

// --- Rotas de Itens (Filhos) ---

// 1. Criar Item (POST /budgets/10/items)
// O Controller 'createItem' vai pegar o '10' (budgetId)
router.post("/:budgetId/items", budgetItemController.createItem);

// 2. Listar Itens de um Orçamento (GET /budgets/10/items)
router.get("/:budgetId/items", budgetItemController.getItemsByBudget);

// 3. Atualizar Item (PUT /items/50) 
// NOTA: Para atualizar, teoricamente só precisamos do ID do item, 
// mas o service precisa saber quem é o pai para recalcular o total.
// Rota sugerida: /budgets/:budgetId/items/:id para ficar RESTful, 

router.patch("/items/:id", budgetItemController.updateItem);

// 4. Deletar Item (DELETE /items/50)
router.delete("/items/:id", budgetItemController.deleteItemById);

// 5. Pegar um Item só
router.get("/items/:id", budgetItemController.getItemById);

export default router