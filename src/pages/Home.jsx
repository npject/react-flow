import coursesData from "../data/courses.json"
import { HeartPlus } from "lucide-react"
import { Link } from "react-router-dom"
import { useFavoriteCourses } from "../hooks/useFavoriteCourses"
import CourseList from "../components/courses/CourseList"

function Home () {
    const { favCourseCount, isFavorite, toggleFavorite } = useFavoriteCourses()

    return (
        <>
        <section>
            <div className="my-container mt-12">
                <div className="w-full">
                    <Link to={"/favoriteCourses"} className="relative inline-flex gap-2 px-4 py-2 bg-white text-primary-700 
                    rounded-lg shadow-card-base hover:bg-primary-700 hover:text-white hover:shadow-card-hover 
                    transition-colors duration-200 cursor-pointer border-2 border-secondary">
                        <HeartPlus className="text-secondary" />
                        <span>مشاهده علاقه مندی ها</span>
                        <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded-full 
                        font-bold bg-primary-800 text-secondary">{favCourseCount}</span>
                    </Link>
                </div>
            </div>
        </section>
        <CourseList 
            coursesData={coursesData}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
        />
        </>
    )
}
export default Home
