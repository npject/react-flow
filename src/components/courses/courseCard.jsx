import { Heart } from "lucide-react"

function CourseCard ({ data, setFavCourses, isFavorite }) {
    const toggleFavorite = (item) => {
        isFavorite.has(item.id) ? deleteFromFavorite(item.id) : addToFavorite(item)
    }
    const addToFavorite = (item) => {
        setFavCourses(items => [...items, item])
    }
    const deleteFromFavorite = (id) => {
        setFavCourses(items => items.filter(item => item.id !== id))
    }
    
    return (
        <>
        <div className="group course-card w-full hover:scale-[1.005] transition-all duration-200 
        hover:[&>.course-card-inner]:shadow-card-hover hover:[&>.course-card-inner]:border-border-card-hover">
            <div className="course-card-inner w-full flex flex-col bg-white px-4 pt-4 rounded-lg shadow-card-base border 
            border-border-card transition-all duration-200">
                <div className="w-full relative">
                    <span className="absolute top-4 right-4 bg-primary-900/70 backdrop-blur-sm text-base p-1 
                    rounded-lg text-sm shadow-2xs shadow-base">
                        مدرس: {data.teacher}
                    </span>
                    <img src={`/src/assets/img/${data.image}`} className="w-full shadow-card-base rounded-t-lg rounded-b-xs 
                    aspect-square" alt={data.title} />
                </div>
                <div className="w-full flex flex-col py-4 gap-2">
                    <h5 className="font-bold text-primary-900">{data.title}</h5>
                    <p>
                        <span className="text-secondary font-bold">
                            {data.price !== "0" ? data.price : "رایگان"}
                        </span>
                        {data.price !== "0" && (
                            <span className="text-primary-900 font-medium ms-1">تومان</span>
                        )}
                    </p>
                    <button className="w-full px-4 py-2 bg-primary-600 text-primary-100 rounded-lg shadow-card-base 
                    hover:bg-primary-500 hover:text-white hover:shadow-card-hover transition-colors duration-200 cursor-pointer">
                        مشاهده دوره
                    </button>
                </div>
                <div className="relative inline-flex items-center gap-4 -ms-4">
                    <div className="relative w-14.5 h-14.5 pt-2 pe-2 bg-base border border-border-card rounded-tl-[32px] 
                    shadow-card-base-inner group-hover:shadow-card-hover-inner transition-all duration-200">
                        <div onClick={() => toggleFavorite(data)} 
                        className="relative z-3 border-2 border-danger w-12 h-12 rounded-full flex justify-center items-center cursor-pointer">
                            <Heart 
                            className={`text-danger ${isFavorite.has(data.id) ? 'fill-danger' : 'fill-transparent'}`} />
                        </div>
                    </div>
                    <p className="w-max text-xs font-medium text-danger">
                        {isFavorite.has(data.id) ? 'افزوده شده به علاقه مندی ها' : 'افزودن به علاقه مندی ها'}
                    </p>

                    {/* Decorative Elements */}
                    {/* --- shadow یکم ایراد داره --- */}
                    <div className="before:z-1 before:content-[''] before:absolute before:-bottom-4 before:-right-4 before:w-0 before:h-0 
                    before:border-44 before:border-r-base before:border-b-base before:border-t-transparent before:border-l-transparent
                    "></div>
                    {/* before:w-[73px] before:h-[73px] before:rounded-tl-[35px] before:bg-base */}
                    <div className="before:z-2 before:content-[''] before:absolute before:top-[-15px] before:right-[-1px] 
                    before:w-4 before:h-4 before:transparent before:rounded-br-lg before:border-r before:border-b 
                    before:border-border-card before:shadow-[8px_8px_0px_8px_var(--color-base)]
                    after:z-3 after:content-[''] after:absolute after:top-[-15px] after:right-[-1px] 
                    after:w-4 after:h-4 after:transparent after:rounded-br-lg 
                    after:shadow-card-base group-hover:after:shadow-card-hover"></div>
                    <div className="before:z-2 before:content-[''] before:absolute before:bottom-[-1px] before:right-14.5 
                    before:w-4 before:h-4 before:transparent before:rounded-br-lg before:border-r before:border-b 
                    before:border-border-card before:shadow-[8px_8px_0px_8px_var(--color-base)]
                    after:z-3 after:content-[''] after:absolute after:bottom-[-1px] after:right-14.5 
                    after:w-4 after:h-4 after:transparent after:rounded-br-lg 
                    after:shadow-card-base group-hover:after:shadow-card-hover"></div>
                </div>
            </div>
        </div>
        </>
    )
}
export default CourseCard
