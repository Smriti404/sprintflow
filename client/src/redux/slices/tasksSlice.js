import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTasks, createTask, updateTask, deleteTask } from "../../api/taskApi";

export const loadTasks = createAsyncThunk("tasks/load", async (_, thunkAPI) => {
  try {
    const { data } = await fetchTasks();
    return data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to load tasks");
  }
});

export const addTask = createAsyncThunk("tasks/add", async (payload, thunkAPI) => {
  try {
    const { data } = await createTask(payload);
    return data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to create task");
  }
});

export const editTask = createAsyncThunk("tasks/edit", async ({ id, payload }, thunkAPI) => {
  try {
    const { data } = await updateTask(id, payload);
    return data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to update task");
  }
});

export const removeTask = createAsyncThunk("tasks/remove", async (id, thunkAPI) => {
  try {
    await deleteTask(id);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to delete task");
  }
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState: { list: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(loadTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.list.unshift(action.payload);
      })
      .addCase(editTask.fulfilled, (state, action) => {
        state.list = state.list.map((task) =>
          task._id === action.payload._id ? action.payload : task
        );
      })
      .addCase(removeTask.fulfilled, (state, action) => {
        state.list = state.list.filter((task) => task._id !== action.payload);
      });
  },
});

export default tasksSlice.reducer;
