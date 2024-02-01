import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
import UserName from "../features/user/UserName"

function Header() {
    return (
        <header className=" flex items-center justify-between bg-yellow-400 uppercase border-b border-stone-200 px-4 py-3 sm:px-6">
            <Link to='/' className="tracking-widest">Fast Pizz React co.</Link>
            <SearchOrder />
            <UserName />
        </header>
    )
}

export default Header
