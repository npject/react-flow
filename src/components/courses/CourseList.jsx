import { SearchX } from "lucide-react"
import CourseCard from "./CourseCard"

function CourseList ({ coursesData, isFavorite, toggleFavorite }) {
    console.log("CourseList rendered::::")

    return (
        <>
        <section>
            {coursesData.length === 0 && (
                <div className="my-container min-h-80 flex flex-col justify-center items-center">
                    <div className="relative mb-8">
                        <SearchX size={60} className="text-primary-300/70" />
                    </div>
                    <p className="text-lg font-medium text-primary-800">
                        “هیچ دوره ای پیدا نشد!”
                    </p>
                </div>
            )}
        </section>
        <section>
            <div className="my-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mt-8 mb-12">
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
        </>
    )
}
export default CourseList
