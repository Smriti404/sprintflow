import client from "./client";

export const fetchUsers = () => client.get("/users");
export const updateProfile = (payload) => client.put("/users/profile", payload);
