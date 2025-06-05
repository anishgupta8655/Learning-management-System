import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  checkMail,
  deleteUsers,
  getAllUsers,
  login,
  upadateAdminUsers,
} from "../Apis/callApi";
import toast from "react-hot-toast";

export const createThunk = createAsyncThunk(
  "create",
  async (formData, { rejectWithValue }) => {
    try {
      const result = await checkMail(formData);
      if (result) {
        // alert("data sent Successfully");
        toast.success("data sent Successfully");
        console.log(result);
        return result;
      }
    } catch (error) {
      // console.log(error);
      // alert("data not send Successfully");
      return rejectWithValue(error.message);
    }
  }
);

//////login thunk////

export const loginThunk = createAsyncThunk(
  "login",
  async (data, { rejectWithValue }) => {
    try {
      const result = await login(data);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/////////get all users!!!!!!!!!!!!!!!!!!!

export const getUserThunk = createAsyncThunk("getUser", async () => {
  try {
    const result = await getAllUsers();
    return result;
  } catch (error) {
    console.log(error.message);
  }
});

///////////{{{{{{{DELETE USER THUNKK//////////}}}}}}}

export const deleteUserThunk = createAsyncThunk(
  "deleteUsers",
  async (id, { rejectWithValue }) => {
    try {
      const result = await deleteUsers(id);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/////////////////{{{{{{{{{{{{{{{{{{{{{{{{{{{{ {{UPDATE USER DATA }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}

export const updateUsersThunk = createAsyncThunk(
  "updateUsers",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const result = await upadateAdminUsers({ id, formData });
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    users: [],

    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createThunk.pending, (state, ) => {
      state.loading = true;
    });
    builder.addCase(createThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(createThunk.rejected, (state, ) => {
      state.loading = true;
    });

    /////login builder///////////
    builder.addCase(loginThunk.pending, (state, ) => {
      state.loading = true;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(loginThunk.rejected, (state, ) => {
      state.loading = true;
    });

    //////////////////{{{{{ADMIN PANEL}}}}}

    builder.addCase(getUserThunk.pending, (state, ) => {
      state.loading = true;
    });
    builder.addCase(getUserThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(getUserThunk.rejected, (state) => {
      state.loading = true;
    });

    //////////{{{{{DELETE USERS/////////}}}}}

    builder.addCase(deleteUserThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteUserThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.users = state.users.filter((user) => user._id !== action.payload);
    });
    builder.addCase(deleteUserThunk.rejected, (state) => {
      state.loading = false;
    });

    //////////{{{{{UPDATE  USERS ADMIN/////////}}}}}

    builder.addCase(updateUsersThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateUsersThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.users = state.users.filter((user) => user._id !== action.payload);
    });
    builder.addCase(updateUsersThunk.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default adminSlice.reducer;
