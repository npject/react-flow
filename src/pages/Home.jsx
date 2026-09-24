import CourseCard from "../components/courses/CourseCard"
import coursesData from "../data/courses.json"
import { HeartPlus } from "lucide-react"
import { Link } from "react-router-dom"
import { useFavoriteCourses } from "../hooks/useFavoriteCourses"

function Home () {
    const { setFavCourses, favCourseIds, isFavorite } = useFavoriteCourses()

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
                        font-bold bg-primary-800 text-secondary">{favCourseIds ? favCourseIds.length : 0}</span>
                    </Link>
                </div>
            </div>
        </section>
        <section>
            <div className="my-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mt-8 mb-12">
                {coursesData.map(item => (
                    <CourseCard 
                    data={item} 
                    key={item.id}
                    setFavCourses={setFavCourses}
                    //setFavCourseIds={setFavCourseIds}
                    isFavorite={isFavorite}
                    />
                ))}
            </div>
        </section>
        </>
    )
}
export default Home
