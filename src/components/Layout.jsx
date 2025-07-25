import Header from './Header'
import Footer from './Footer'
import TopNav from './Topnav';
import FloatingSocialMediaIcons from './FloatingSocialMediaIcons';




function Layout({children}){
    return (
        <div className="flex flex-col min-h-screen ">
          
            <TopNav/>
            <Header  />
            <FloatingSocialMediaIcons />
            <div className="flex-1 overflow-hidden ">
                {children}
            </div>
           
            <Footer />
        </div>
    );
}

export default Layout;