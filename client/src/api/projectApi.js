import client from "./client";

export const fetchProjects = () => client.get("/projects");
export const createProject = (payload) => client.post("/projects", payload);
export const updateProject = (id, payload) => client.put(`/projects/${id}`, payload);
export const deleteProject = (id) => client.delete(`/projects/${id}`);
