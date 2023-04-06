import { db } from "../db";
import { uuid } from "../util/uuid";
import { Task } from "./Task";

import type { TaskCreate, TaskDelete, TaskUpdate } from "./Task";

export class TaskService {

	
    async get(id: Task["id"]) {
        return Task.findOneBy({ id });
    }

    async create(task: TaskCreate) {
        console.log(task);
        return Task.insert({
            ...task,
            id: uuid(),
            status: "open",
        });
			
    }

    async update(task: TaskUpdate) {
        return Task.update(task.id, task);
    }

    async delete(id: TaskDelete) {
        return Task.delete(id);
    }
}