import { Link } from "react-router-dom"

const base = 'text-sm bg-yellow-400 text-stone-800 rounded-full uppercase font-semibold inline-block hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed '

const style = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small : base + ' px-4 py-2 md:px-4 md:py-2.5 text-xs',
    round : base + 'px-2.5 py-1 md:px-2.5 md:py-1 text-sm',
    secandery : 'text-sm px-4 py-3 md:px-6 md:py-4 text-stone-400 border-2 border-stone-300 rounded-full uppercase font-semibold inline-block hover:bg-stone-300 hover:text-stone-800 foucs:text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed'
}

function Button({children , disabled , to ,type , onClick}) {
    

    if(to) return ( <Link to={to} className={style[type]}> {children} </Link> )

    if(onClick) return  (<button 
        onClick={onClick}
        disabled={disabled} 
        className={style[type]}>
            {children}
        </button>)
    

    return (
        <button 
        disabled={disabled} 
        className={style[type]}>
            {children}
        </button>
    )
}

export default Button
