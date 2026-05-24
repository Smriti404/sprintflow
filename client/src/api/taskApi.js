import client from "./client";

export const fetchTasks = () => client.get("/tasks");
export const createTask = (payload) => client.post("/tasks", payload);
export const updateTask = (id, payload) => client.put(`/tasks/${id}`, payload);
export const deleteTask = (id) => client.delete(`/tasks/${id}`);
