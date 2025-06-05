import axios from "axios";
import toast from "react-hot-toast";

const createApi = "http://localhost:8000/api/v1/create";
const checkEmail = "http://localhost:8000/api/v1/checkMail";
const loginApi = "http://localhost:8000/api/v1/login";

const getAllCardApi = "http://localhost:8000/api/v1/cards";

const createCardApi = "http://localhost:8000/api/v1/addCard";

const deleteCardApiData = "http://localhost:8000/api/v1/deleteCard";

const updateCardApiData = "http://localhost:8000/api/v1/updateCard";

const getAllUsersApi = "http://localhost:8000/api/v1";

const deleteUsersApi = "http://localhost:8000/api/v1/deleteAdmin";

const updateAdminUserApi = "http://localhost:8000/api/v1//updateUser";

const productsApi = "https://dummyjson.com/products";

async function create(formData) {
  try {
    const response = await axios.post(createApi, formData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function checkMail(formData) {
  try {
    const response = await axios.post(checkEmail, {
      email: formData.get("email"),
    });
    if (response.status === 200) {
      return await create(formData);
    }
  } catch (error) {
    if (error.response && error.response.data.message === "email registered") {
      throw new Error(toast.error("Email is already exists"));

      // console.log(error.response.data.message);
    }

    // alert("Email is already exists");
  }
}

///////login API////

export async function login(data) {
  try {
    const response = await axios.post(loginApi, data);
    if (response.data) {
      toast.success("Logged in successfully");
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      return response.data;
    }
  } catch (error) {
    if (error.response.data.message === "Email not found") {
      throw new Error(toast.error("Email not found"));
    }
    if (error.response.data.message === "Password is incorrect") {
      throw new Error(toast.error("Password is incorrect"));
    }
  }
}

///////////{ {   CARD POST }}

export async function cardPost(data) {
  try {
    const response = await axios.post(createCardApi, data);
    if (response) {
      toast.success("Card added successfully");
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

///////////!!!!!!!!!!!GET ALL CARDS DATA }}}}}///

export async function getAllCards() {
  try {
    const response = await axios.get(getAllCardApi);
    if (response.data) {
      console.log(response.data);
      return response.data.cards;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

// //////DELETE CARD //////
export async function deleteCardApi(id) {
  try {
    const response = await axios.delete(`${deleteCardApiData}/${id}`);
    if (response) {
      toast.success("Card deleted successfully");
      return response.data;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

// //////UPDATE CARD //////

export async function updateCard({ id, formData }) {
  try {
    const response = await axios.put(`${updateCardApiData}/${id}`, formData);
    if (response.data) {
      toast.success("Card updated successfully");
      return response.data;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

/////////////{{{{{{{{{{{{GET ALL USERS}}}}}}}}}}}}
export async function getAllUsers() {
  try {
    const response = await axios.get(getAllUsersApi);
    if (response.data) {
      return response.data.data;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

//////////////{{{{{{{{{{{{{{DELETE USER API CALL}}}}}}}}}}}}}}

export async function deleteUsers(id) {
  try {
    const response = await axios.delete(`${deleteUsersApi}/${id}`);
    if (response) {
      toast.success("User deleted successfully");
      return response.data;
    }
  } catch (error) {
    throw new Error("api error", error.message);
  }
}

///////////////////{{{{{{{{{{{{{{{{{{{{{{UPDATE ADMIN USERS}}}}}}}}}}}}}}}}}}}}//////////////////////////

export async function upadateAdminUsers({ id, formData }) {
  try {
    const response = await axios.put(`${updateAdminUserApi}/${id}`, formData);

    if (response) {
      toast.success("User updated successfully");
      return response;
    }
  } catch (error) {
    throw new Error(error.message, "api Error update");
  }
}

///////////{{{{{{{{{{{{{{{{Products Api Call}}}}}}}}}}}}}}}}

export async function productsApiCall() {
  try {
    const response = await axios.get(productsApi);
    return response.data.products
    ;
  } catch (error) {
    console.log(error);
  }
}
