import { useEffect, useState } from "react"

export function useFavoriteCourses () {
    const [favCourses, setFavCourses] = useState(() => JSON.parse(localStorage.getItem("favCourses")) || [])
    const favCourseIds = favCourses.map(item => item.id)
    //const [favCourseIds, setFavCourseIds] = useState([])
    const isFavorite = new Set(favCourseIds)
    
    useEffect(() => {
        localStorage.setItem("favCourses", JSON.stringify(favCourses))
    }, [favCourses])

    return { favCourses, setFavCourses, favCourseIds, isFavorite }
}
