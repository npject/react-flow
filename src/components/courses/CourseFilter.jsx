function CourseFilter () {

    return (
        <>
        <div className="w-auto">
            <div className="inline-flex py-1 px-1.5 bg-primary-100 border border-primary-200 text-sm font-medium rounded-b-3xl rounded-t-sm 
            shadow-card-base hover:shadow-card-hover">
                <button type="button" 
                className="px-4 py-1.5 bg-transparent text-primary-600 hover:bg-primary-50 hover:text-primary-800 rounded-4xl
                cursor-pointer">
                    همه دوره ها
                </button>
                <button type="button" 
                className="px-4 py-1.5 bg-transparent text-primary-600 hover:bg-primary-50 hover:text-primary-800 rounded-4xl
                cursor-pointer">
                    دوره های رایگان
                </button>
                <button type="button" 
                className="px-4 py-1.5 bg-primary-700 text-primary-50 active:bg-primary-800 rounded-4xl cursor-pointer">
                    دوره های پولی
                </button>
            </div>          
        </div>
        </>
    )
}
export default CourseFilter
