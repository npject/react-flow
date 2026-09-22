function CourseCard ({ data }) {
    
    return (
        <>
        <div className="w-full flex flex-col bg-white p-4 rounded-lg shadow-card-base border border-border-card 
        hover:shadow-card-hover hover:border-border-card-hover hover:scale-[1.005] transition-all duration-200">
            <div className="w-full relative">
                <span className="absolute top-4 right-4 bg-primary-900/70 backdrop-blur-sm text-base p-1 
                rounded-lg text-sm shadow-2xs shadow-base">
                    مدرس: {data.teacher}
                </span>
                <img src={`/src/assets/img/${data.image}`} className="w-full shadow-card-base rounded-t-lg rounded-b-xs 
                aspect-square" alt={data.title} />
            </div>
            <div className="w-full flex flex-col py-4 gap-2">
                <h5 className="font-bold text-primary-900">{data.title}</h5>
                <p>
                    <span className="text-secondary font-bold">
                        {data.price !== "0" ? data.price : "رایگان"}
                    </span>
                    {data.price !== "0" && (
                        <span className="text-primary-900 font-medium ms-1">تومان</span>
                    )}
                </p>
                <button className="w-full px-4 py-2 bg-primary-600 text-primary-100 rounded-lg shadow-card-base 
                hover:bg-primary-500 hover:text-white hover:shadow-card-hover transition-colors duration-200 cursor-pointer">
                    مشاهده دوره
                </button>
            </div>
        </div>
        </>
    )
}
export default CourseCard
