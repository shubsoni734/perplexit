
export const logoutUser = (setUser) => {
  localStorage.removeItem("userData");
  localStorage.removeItem("userToken");
  setUser("");
};

export const generateRandomData = () => {
  const randomHeading = "Random Heading " + Math.floor(Math.random() * 1000);
  const randomContent = "Random Content " + Math.floor(Math.random() * 1000);
  const randomView = Math.floor(Math.random() * 100);
  const randomShare = Math.floor(Math.random() * 50);
  const randomOperation = Math.floor(Math.random() * 10);

  return {
    heading: randomHeading,
    content: randomContent,
    view: randomView,
    share: randomShare,
    operation: randomOperation,
  };
}