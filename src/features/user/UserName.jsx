import { useSelector } from "react-redux"

function UserName() {

    const userName = useSelector(state => state.user.username);

    if(!userName) return null

    return (
        <div className="text-sm font-semibold hidden md:block"> 
            {userName}
        </div>
    )
}

export default UserName
