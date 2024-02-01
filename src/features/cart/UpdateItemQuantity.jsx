import { useDispatch, useSelector } from "react-redux"
import Button from "../../ui/Button"
import { decItem, getCurrentQuantityById, incItem } from "./cartSlice"

function UpdateItemQuantity({pizzaId}) {

    const dispatch = useDispatch()

    const quantatyNumber = useSelector(getCurrentQuantityById(pizzaId))

    return (
        <div className="flex items-center gap-2">
            <Button type='round' onClick={()=>dispatch(decItem(pizzaId))}>-</Button>
            <span className="text-sm font-medium">{quantatyNumber}</span>
            <Button type='round' onClick={()=>dispatch(incItem(pizzaId))}>+</Button>
        </div>
    )
}

export default UpdateItemQuantity
