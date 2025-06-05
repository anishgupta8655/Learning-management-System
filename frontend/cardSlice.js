import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  cardPost,
  deleteCardApi,
  getAllCards,
  updateCard,
} from "../Apis/callApi";

//////////// !!!! POST CARD tHUNK]]]]]]]]]]]]]]]

export const createCardThunk = createAsyncThunk(
  "card",
  async (formData, { rejectedWithValue }) => {
    try {
      const result = await cardPost(formData);
      return result;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

///////!!!!!!!!!!!}}}{{{{{{{{{{ GET CARD SLICE          ///}}}}}}}}}}

export const getAllCardThunk = createAsyncThunk("addCard", async () => {
  try {
    const result = await getAllCards();
    return result;
  } catch (error) {
    console.log(error);
  }
});

//////!!!!!!!!!!!! DELETE ALL CARD THUNK ???????????????????

export const deleteCardThunk = createAsyncThunk(
  "deleteCard",
  async (id, { rejectWithValue }) => {
    try {
      const result = await deleteCardApi(id);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

////!!!!!!!!!!  UPDATE CARD THUNK !!!!!!!!!!!!!/////

export const updateCardThunk = createAsyncThunk(
  "updateCard",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const result = await updateCard({ id, formData });
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const cardSlice = createSlice({
  name: "card",

  initialState: {
    card: [],
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(createCardThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createCardThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.card = action.payload;
    });
    builder.addCase(createCardThunk.rejected, (state, action) => {
      state.loading = true;
    });

    ///////GET ALL ADD CARDS/////

    builder.addCase(getAllCardThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllCardThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.card = action.payload;
    });
    builder.addCase(getAllCardThunk.rejected, (state, action) => {
      state.loading = true;
    });

    //////////////////////////////////DELETE CARD STATE//////////////////////////////DELETE API CARD//////////
    builder.addCase(deleteCardThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteCardThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.card = action.payload;
    });
    builder.addCase(deleteCardThunk.rejected, (state, action) => {
      state.loading = true;
    });

    //////!!!!!!!! UPDATE CARD STATE !!!!!!!!!!!!!

    builder.addCase(updateCardThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateCardThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.card = action.payload;
    });
    builder.addCase(updateCardThunk.rejected, (state, action) => {
      state.loading = true;
    });
  },
});

export default cardSlice.reducer;
