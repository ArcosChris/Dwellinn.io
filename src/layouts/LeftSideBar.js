import { Outlet } from "react-router";
import Footer from "../components/CommonLayoutComponent/Footer";
import Sidebar from "../components/LeftSideLayoutComponents/Sidebar";
import TopNav from "../components/LeftSideLayoutComponents/TopNav";
import '../css/LeftSideBar.css';

const LeftSideBarLayout = ({ isLoggedIn, handleSignOut }, props) => {

    return (
        <>
            <div className="d-flex" id="wrapper">
                <Sidebar />
                <div id="page-content-wrapper">
                    <TopNav isLoggedIn={isLoggedIn} signOut={handleSignOut} />
                    <main className="container-fluid pt-2 px-0">
                        {props.children ? props.children : <Outlet />}
                    </main>
                </div>
            </div >
            <Footer />
        </>

    );
}

export default LeftSideBarLayout;