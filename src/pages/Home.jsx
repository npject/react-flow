import coursesData from "../data/courses.json"
import { HeartPlus } from "lucide-react"
import { Link } from "react-router-dom"
import { useFavoriteCourses } from "../hooks/useFavoriteCourses"
import CourseList from "../components/courses/CourseList"
import CourseFilter from "../components/courses/CourseFilter"
import SearchBox from "../components/courses/SearchBox"
import { useFilterCourses } from "../hooks/useFilterCourses"

function Home () {
    const { favCourseCount, isFavorite, toggleFavorite } = useFavoriteCourses()
    const { filteredCourses, searchQuery, onChangeInput, filters, priceFilter, setPriceFilter } = 
        useFilterCourses({ allCourses: coursesData })

    return (
        <>
        <section>
            <div className="my-container mt-12 flex justify-center items-center gap-x-2">
                <div className="w-auto">
                    <Link to={"/favoriteCourses"} className="relative inline-flex px-4 py-2 bg-primary-50 text-primary-600 
                    shadow-card-base hover:bg-primary-100 hover:text-primary-800 hover:shadow-card-hover 
                    transition-colors duration-200 cursor-pointer border border-primary-200 rounded-tr-sm rounded-bl-sm
                    rounded-tl-3xl rounded-br-3xl">
                        <HeartPlus className="text-secondary" />
                        {/* <span>مشاهده علاقه مندی ها</span> */}
                        <span className={`absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded-full 
                        font-bold bg-secondary text-primary-900 border border-base transition-opacity duration-300
                        ${favCourseCount === 0 ? 'invisible opacity-0' : 'visible opacity-100'}`}>
                            {favCourseCount}
                        </span>
                    </Link>
                </div>
                <CourseFilter 
                    filters={filters}
                    priceFilter={priceFilter}
                    setPriceFilter={setPriceFilter}
                    />
                <SearchBox 
                    search={searchQuery}
                    // clearSearchQuery={clearSearchQuery}
                    onChangeInput={onChangeInput}
                />
            </div>
        </section>
        <CourseList 
            coursesData={filteredCourses}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
        />
        </>
    )
}
export default Home
