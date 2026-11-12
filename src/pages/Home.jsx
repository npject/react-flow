import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { HeartPlus } from "lucide-react"
import { CourseList, CourseFilter, SearchBox } from "@/components/courses"
import { useFavoriteCourses, useFilterCourses } from "@/hooks"
import { fetchProducts } from "@/services/productsService"
import { Loading, CardSkeleton, ErrorBox } from "@/components/ui"
import { getFriendlyErrorMessage } from "@/utils/error-utils"


function Home () {
    const { favCourseCount, isFavorite, toggleFavorite } = useFavoriteCourses()
    const [coursesData, setCoursesData] = useState()
    const [err, setErr] = useState()
    const [loading, setLoading] = useState(false)
    const [retryCount, setRetryCount] = useState(0)

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const { data, error } = await fetchProducts()
                setCoursesData(data)
                setErr(error)
            } catch (error) {
                setErr(error)
            } finally {
                setLoading(false)
            }
        })()    
    }, [retryCount])

    const { filteredCourses, searchQuery, onChangeInput, filters, priceFilter, setPriceFilter, clearSearchQuery } = 
        useFilterCourses({ allCourses: coursesData?.products || [] })

    const handleRetry = () => {
        setRetryCount(prev => prev + 1)
    }
        
    return (
        <>
        <section>
            <div className="my-container mt-12 flex justify-center items-center flex-wrap md:flex-nowrap gap-x-2 gap-y-2">
                <div className="w-auto flex-none order-1 md:order-1">
                    <Link to={"/favoriteCourses"} className="relative inline-flex px-4 py-2 bg-primary-50 text-primary-600 
                    shadow-card-base hover:bg-primary-100 hover:text-primary-800 hover:shadow-card-hover 
                    transition-colors duration-200 cursor-pointer border border-primary-200 rounded-tr-sm rounded-bl-sm
                    rounded-tl-3xl rounded-br-3xl" target="_blank">
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
                    className="flex-initial order-3 md:order-2"
                />
                <SearchBox 
                    searchQuery={searchQuery}
                    clearSearchQuery={clearSearchQuery}
                    onChangeInput={onChangeInput}
                    className="sm:grow w-9/12 sm:w-auto order-2 md:order-3"
                />
            </div>
        </section>
        {loading && (
            <>
            <Loading />
            <div className="my-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mb-12">
                {Array.from({length: 6}).map((_, index) => 
                    <CardSkeleton key={index} />
                )}
            </div>
            </>
        )}
        {err && !loading && (
            <div className="my-container min-h-[70vh] lg:flex lg:items-center">
                <ErrorBox message={getFriendlyErrorMessage(err.message)} onRetry={handleRetry} />
            </div>
        )}
        {coursesData && !loading && !err && (
            <CourseList 
                coursesData={filteredCourses}
                isFavorite={isFavorite}
                toggleFavorite={toggleFavorite}
            />
        )}
        </>
    )
}
export default Home
