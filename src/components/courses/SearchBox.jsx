import { Search } from "lucide-react"

function SearchBox () {

    return (
        <>
        <div className="relative w-full max-w-xs group">
            <div className="flex items-center border border-primary-200 overflow-hidden rounded-tl-sm rounded-bl-3xl 
            rounded-tr-3xl rounded-br-sm shadow-card-base hover:shadow-card-hover bg-primary-50 
            group-focus-within:border-primary-500 group-focus-within:outline-3 group-focus-within:outline-primary-500/20 
            group-focus-within:focus-visible:outline-offset-1">
                <button type="button" 
                className="absolute h-full top-0 right-0 inline-flex px-4 py-2 bg-base text-primary-700 
                border border-primary-500 hover:bg-secondary/30 active:bg-secondary/40 focus-visible:outline-3 
                focus-visible:outline-primary-500/25 rounded-tr-3xl rounded-br-sm rounded-bl-3xl">
                    <Search />
                </button>
                <input type="text" 
                className="w-full ps-4 pe-20 py-2  bg-transparent text-primary-900 placeholder-primary-400 
                outline-0 " style={{"direction": "ltr"}} placeholder="search course title..." />
            </div>
        </div>
        </>
    )
}
export default SearchBox
