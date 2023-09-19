import React, { useContext } from "react";
import { MyContext } from "../context/userContext";
import { GoogleAuthProvider, auth } from "../firebase";
import { signInWithPopup } from "firebase/auth"; // Note the import change here
function Button() {
  const { user, setUser } = useContext(MyContext);

  //   useEffect(() => {
  //     const data = localStorage.getItem("userData");
  //     console.log(data);
  //     if (data) {
  //       const parseData = JSON.parse(data);
  //       setUser((prevUser) => ({
  //         ...prevUser,
  //         userData: parseData,
  //       }));
  //     }
  //   }, []);

  const signup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const userToken = await result.user.getIdToken();

      localStorage.setItem("userData", JSON.stringify(result.user));
      localStorage.setItem("userToken", userToken);
      setUser(result.user);
    } catch (e) {
      console.log("Error in login" + e);
    }
  };
  const Logout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("userToken");
    setUser("");
  };
  return (
    <>
      <div onClick={signup}>Google</div>
      <div onClick={Logout}>Logout</div>
      <p>data:{JSON.stringify(user)}</p>
      {/* {user ? <div>{user}</div> : null} */}
    </>
  );
}

export default Button;
