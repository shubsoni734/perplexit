import React, { useContext } from "react";
import { MyContext } from "../context/userContext";
// import { GoogleAuthProvider, auth } from "../firebase";
// import { signInWithPopup } from "firebase/auth"; // Note the import change here
import { Logout, signup } from "../GenericFunction";
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
