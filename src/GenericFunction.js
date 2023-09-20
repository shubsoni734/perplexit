
export const logoutUser = (setUser) => {
  localStorage.removeItem("userData");
  localStorage.removeItem("userToken");
  setUser("");
};
