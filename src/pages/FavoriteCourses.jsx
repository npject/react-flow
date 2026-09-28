import { Ghost, HeartX } from "lucide-react"
import { useFavoriteCourses } from "../hooks/useFavoriteCourses"
import { Link } from "react-router-dom"
import CourseList from "../components/courses/CourseList"

function FavoriteCourses () {
    const { favCourses, isFavorite, toggleFavorite } = useFavoriteCourses()

    return (
        <>
        {favCourses.length !== 0 && (
            <CourseList 
                coursesData={favCourses}
                isFavorite={isFavorite}
                toggleFavorite={toggleFavorite}
            />
        )}
        <section>
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
