import CourseCard from "../components/courses/courseCard"
import coursesData from "../data/courses.json"

function Home () {
    
    return (
        <>
        <section>
            <div className="my-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 my-14">
                {coursesData.map(item => (
                    <CourseCard data={item} key={item.id} />
                ))}
            </div>
        </section>
        </>
    )
}
export default Home
