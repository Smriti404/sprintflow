import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchSprints, createSprint, updateSprint } from "../../api/sprintApi";

export const loadSprints = createAsyncThunk("sprints/load", async (_, thunkAPI) => {
  try {
    const { data } = await fetchSprints();
    return data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to load sprints");
  }
});

export const addSprint = createAsyncThunk("sprints/add", async (payload, thunkAPI) => {
  try {
    const { data } = await createSprint(payload);
    return data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to create sprint");
  }
});

export const editSprint = createAsyncThunk("sprints/edit", async ({ id, payload }, thunkAPI) => {
  try {
    const { data } = await updateSprint(id, payload);
    return data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to update sprint");
  }
});

const sprintsSlice = createSlice({
  name: "sprints",
  initialState: { list: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadSprints.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadSprints.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(loadSprints.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addSprint.fulfilled, (state, action) => {
        state.list.unshift(action.payload);
      })
      .addCase(editSprint.fulfilled, (state, action) => {
        state.list = state.list.map((sprint) =>
          sprint._id === action.payload._id ? action.payload : sprint
        );
      });
  },
});

export default sprintsSlice.reducer;
