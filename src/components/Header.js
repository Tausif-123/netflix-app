import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  function handleSignout() {
    // Signout firebase code...
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  }

  useEffect(() => {
    // Whether user is signin or signout....
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Get all the info from auth(firebase)...
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out...
        dispatch(removeUser());
      }
    });
    navigate("/");

    // Unsubscribe when our components get unmounted(from firebase logic it gets unsubscribed)...
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-6 py-2 bg-gradient-to-b from-red z-1 flex justify-between">
      <img className="w-44 z-10" src={LOGO} alt="Netflix-logo" />
      {user && (
        <div className="flex p-4">
          <img className="w-12 h-12" src={user.photoURL} alt="user" />
          <button onClick={handleSignout} className="font-bold text-white z-10">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
