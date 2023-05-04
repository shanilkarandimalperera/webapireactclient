import { Outlet, Link } from "react-router-dom";
const Home = () => {
    return (
    <center><div><h1>welcome holiday center</h1>
    
            <Link to="/search">Search</Link>
            <Outlet />
    </div>
    </center>
  )};
  
  export default Home;