import axios from "axios";

export async function createUser({ username, empid, email, password }) {
  const data = {
    username,
    empid,
    email,
    password,
  };
  const url = ``;
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (err) {
    console.log(
      "Authentication failed ! Could not sign you up. Please check your inputs or try again later !"
    );
  }
}

export async function login({ empid, password }) {
  const data = {
    empid,
    password,
  };
  const url = ``;
  try {
    const response = await axios.post(url, data);
    const token = response.data.token;
    const responseEmpId = response.data.empid;
    const username = response.data.username;
    const repsonseEmail = response.data.email;
    const responsePassword = response.data.password;
    return {
      token,
      responseEmpId,
      username,
      repsonseEmail,
      responsePassword,
    };
  } catch (err) {
    console.log(
      "Authentication failed ! Could not log you in. Please check your credentials or try again later !"
    );
  }
}
