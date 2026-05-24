import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUsers, updateProfile } from "../../api/userApi";

export const loadUsers = createAsyncThunk("users/load", async (_, thunkAPI) => {
  try {
    const { data } = await fetchUsers();
    return data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to load users");
  }
});

export const saveProfile = createAsyncThunk("users/profile", async (payload, thunkAPI) => {
  try {
    const { data } = await updateProfile(payload);
    return data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to update profile");
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState: { list: [], loading: false, error: null, profile: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(loadUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(saveProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
      });
  },
});

export default usersSlice.reducer;
