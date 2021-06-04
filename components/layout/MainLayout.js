import Header from '../ui/Header/Header';
import SideNav from '../ui/SideNav/SideNav';

const MainLayout = (props) => {
    return (
        <div style={{
            background: 'linear-gradient(135deg, rgba(2, 27, 64, 1) 55%, rgba(119, 30, 135, 1) 100%)', minHeight: '100vh'
        }}>
            <Header />
            <SideNav />
            <section className="content-container">   
                {props.children}
            </section>
        </div>
    )
}

export default MainLayout;