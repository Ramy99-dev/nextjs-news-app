import { SearchProvider } from "../providers/SearchContext";
import Nav from "./nav";
import SideBar from "./siderbar";

const Layout = ({children}) => {
    return (
      <SearchProvider>
        <div className="layout">
            <SideBar></SideBar>
         <div className="content">
            <Nav></Nav>
            {children}
         </div>
         
        </div> 
       </SearchProvider>
        
     );
}
 
export default Layout;