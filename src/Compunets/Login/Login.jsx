import { Link } from "react-router-dom";
import { TwitterAuthProvider, getAuth, signOut } from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const TwitterProvider = new TwitterAuthProvider(); 

    const handleTwitterLogin = () => {
        signInWithPopup(auth, TwitterProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleTwitterLogOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null); // Reset user state after logout
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="text-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold mt-20 text-fuchsia-500">This is Login Pages</h1>
                <Link to='/'> <button className="border-2 border-t-indigo-700 p-4 mt-10 btn btn-ghost bg-amber-500 text-black"> Home</button></Link>
            </div>

            {user ? (
                <button onClick={handleTwitterLogOut} className="border-2 border-t-indigo-700 p-4 mt-10 btn btn-ghost bg-amber-500 text-black"> LogOut</button>
            ) : (
                <button onClick={handleTwitterLogin} className="border-2 border-t-indigo-700 p-4 mt-10 btn btn-ghost bg-amber-500 text-black"> Twitter Login</button>
            )}
        </div>
    );
};

export default Login;
