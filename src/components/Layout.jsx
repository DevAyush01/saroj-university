import Header from './Header'
import Footer from './Footer'
import TopNav from './Topnav';




function Layout({children}){
    return (
        <div className="flex flex-col min-h-screen ">
          
            <TopNav/>
            <Header  />
            
            <div className="flex-1 overflow-hidden ">
                {children}
            </div>
           
            <Footer />
        </div>
    );
}

export default Layout;