import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import FavoriteProvider from "../../context/FavoriteProvider"

function Layout () {

    return (
        <>
        <FavoriteProvider>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </FavoriteProvider>
        </>
    )
}
export default Layout
