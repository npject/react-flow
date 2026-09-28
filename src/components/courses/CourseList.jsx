import CourseCard from "./CourseCard"

function CourseList ({ coursesData, isFavorite, toggleFavorite }) {

    return (
        <>
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
