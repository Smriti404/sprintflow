import client from "./client";

export const fetchSprints = () => client.get("/sprints");
export const createSprint = (payload) => client.post("/sprints", payload);
export const updateSprint = (id, payload) => client.put(`/sprints/${id}`, payload);
