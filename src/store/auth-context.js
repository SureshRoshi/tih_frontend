import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  token: "",
  empId: "",
  username: "",
  email: "",
  password: "",
  isAuthenticated: false,
  authenticate: (
    responseToken,
    responseEmpId,
    responseUserame,
    responseEmail,
    responsePassword
  ) => {},
  logout: () => {},
});

function AuthContentProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [empId, setEmpId] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //   useEffect(() => {
  //     const loadAuthData = () => {
  //       const storedToken = localStorage.getItem("token");
  //       const storedEmpId = localStorage.getItem("empId");
  //       const storedUsername = localStorage.getItem("username");
  //       const storedEmail = localStorage.getItem("email");
  //       const storedPassword = localStorage.getItem("password");

  //       setAuthToken(storedToken);
  //       setEmpId(storedEmpId);
  //       setUsername(storedUsername);
  //       setEmail(storedEmail);
  //       setPassword(storedPassword);
  //     };

  //     loadAuthData();
  //   }, []);

  function authenticate(
    responseToken,
    responseEmpId,
    responseUserame,
    responseEmail,
    responsePassword
  ) {
    setAuthToken(responseToken);
    setEmpId(responseEmpId);
    setUsername(responseUserame);
    setEmail(responseEmail);
    setPassword(responsePassword);

    localStorage.setItem("token", responseToken);
    localStorage.setItem("empId", responseEmpId);
    localStorage.setItem("username", responseUserame);
    localStorage.setItem("email", responseEmail);
    localStorage.setItem("password", responsePassword);
  }

  function logout() {
    setAuthToken(null);
    setEmpId(null);
    setUsername(null);
    setEmail(null);
    setPassword(null);

    localStorage.removeItem("token");
    localStorage.removeItem("empId");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  }

  const value = {
    token: authToken,
    empId: empId,
    username: username,
    email: email,
    password: password,
    isAuthenticated: !!authToken && !!empId,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContentProvider;
