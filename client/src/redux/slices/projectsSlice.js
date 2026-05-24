import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProjects, createProject, updateProject, deleteProject } from "../../api/projectApi";

export const loadProjects = createAsyncThunk("projects/load", async (_, thunkAPI) => {
  try {
    const { data } = await fetchProjects();
    return data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to load projects");
  }
});

export const addProject = createAsyncThunk("projects/add", async (payload, thunkAPI) => {
  try {
    const { data } = await createProject(payload);
    return data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to add project");
  }
});

export const editProject = createAsyncThunk("projects/edit", async ({ id, payload }, thunkAPI) => {
  try {
    const { data } = await updateProject(id, payload);
    return data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to update project");
  }
});

export const removeProject = createAsyncThunk("projects/remove", async (id, thunkAPI) => {
  try {
    await deleteProject(id);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to delete project");
  }
});

const projectsSlice = createSlice({
  name: "projects",
  initialState: { list: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(loadProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addProject.fulfilled, (state, action) => {
        state.list.unshift(action.payload);
      })
      .addCase(editProject.fulfilled, (state, action) => {
        state.list = state.list.map((project) =>
          project._id === action.payload._id ? action.payload : project
        );
      })
      .addCase(removeProject.fulfilled, (state, action) => {
        state.list = state.list.filter((project) => project._id !== action.payload);
      });
  },
});

export default projectsSlice.reducer;
