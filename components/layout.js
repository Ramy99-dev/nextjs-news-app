import Nav from "./nav";
import SideBar from "./siderbar";

const Layout = ({children}) => {
    return (
        <div className="layout">
            <SideBar></SideBar>
         <div className="content">
            <Nav></Nav>
            {children}
         </div>
         
        </div> 
       
        
     );
}
 
export default Layout;