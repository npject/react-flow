import { Ghost, HeartX } from "lucide-react"
import CourseCard from "../components/courses/CourseCard"
import { useFavoriteCourses } from "../hooks/useFavoriteCourses"
import { Link } from "react-router-dom"

function FavoriteCourses () {
    const { favCourses, setFavCourses, isFavorite } = useFavoriteCourses()

    return (
        <>
        <section>
            {favCourses.length !== 0 && (
                <div className="my-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 my-12">
                    {favCourses.map((item, index) => (
                        <CourseCard 
                        data={item} 
                        key={index}
                        setFavCourses={setFavCourses}
                        //setFavCourseIds={setFavCourseIds}
                        isFavorite={isFavorite}
                        />
                    ))}
                </div>
            )}
            {favCourses.length === 0 && (
                <div className="my-container h-screen flex flex-col justify-center items-center">
                    <div className="relative mb-8">
                        <Ghost size={60} className="text-primary-300/70" />
                        <HeartX className="absolute -top-4 -right-4 text-danger-500/60" />
                    </div>
                    <p className="text-lg font-medium text-primary-800 mb-4">
                        “هنوز دوره‌ای رو لایک نکردی!”
                    </p>
                    <Link to={"/"} className="px-4 py-2 bg-secondary text-white rounded-lg shadow-card-base border border-secondary 
                    hover:bg-transparent hover:text-secondary hover:shadow-card-hover transition-colors duration-200 cursor-pointer">
                        بازگشت به صفحه اصلی
                    </Link>
                </div>
            )}
        </section>
        </>
    )
}
export default FavoriteCourses
