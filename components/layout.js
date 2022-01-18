import Nav from "./nav";
import SideBar from "./siderbar";
import styles from '../styles/Layout.module.css'
const Layout = ({children}) => {
    return (
        <>
         <Nav className={styles.nav}></Nav>
         {children}
         <SideBar></SideBar>
        </> 
       
        
     );
}
 
export default Layout;