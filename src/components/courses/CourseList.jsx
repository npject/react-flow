import { SearchX } from "lucide-react"
import CourseCard from "./CourseCard"

function CourseList ({ coursesData, isFavorite, toggleFavorite }) {

    return (
        <>
        {coursesData.length === 0 && (
            <section>
                <div className="my-container min-h-[60vh] flex flex-col justify-center items-center">
                    <div className="relative mb-8">
                        <SearchX size={60} className="text-primary-300/70" />
                    </div>
                    <p className="text-lg font-medium text-primary-800">
                        “هیچ دوره ای پیدا نشد!”
                    </p>
                </div>
            </section>
        )}
        {coursesData && (
            <section>
                <div className="my-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mt-10 mb-12">
                    {coursesData.map(item => (
                        <CourseCard 
                            data={item} 
                            key={item.id}
                            isFavorite={isFavorite(item.id)}
                            toggleFavorite={toggleFavorite}
                        />
                    ))}
                </div>
            </section>
        )}
        </>
    )
}
export default CourseList
