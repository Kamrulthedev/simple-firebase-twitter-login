import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold mt-20 text-fuchsia-500">This is Home Pages</h1>
            <Link to='/Login'> <button className="border-2 border-t-indigo-700 p-4 mt-10 btn btn-ghost bg-amber-500 text-black">Login</button></Link>
        </div>
    );
};

export default Home;