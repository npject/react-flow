import { useEffect, useState } from "react"

export function useFavoriteCourses () {
    const [favCourses, setFavCourses] = useState(() => JSON.parse(localStorage.getItem("favCourses")) || [])
    const favCourseIds = favCourses.map(item => item.id)
    const favCourseCount = favCourseIds ? favCourseIds.length : 0
    //const [favCourseIds, setFavCourseIds] = useState([])
    //const isFavorite = new Set(favCourseIds)

    const favSet = new Set(favCourseIds)
    const isFavorite = (id) => favSet.has(id)

    const toggleFavorite = (item) => {
        isFavorite(item.id) ? deleteFromFavorite(item.id) : addToFavorite(item)
    }
    const addToFavorite = (item) => {
        setFavCourses(items => [...items, item])
    }
    const deleteFromFavorite = (id) => {
        setFavCourses(items => items.filter(item => item.id !== id))
    }
    
    useEffect(() => {
        localStorage.setItem("favCourses", JSON.stringify(favCourses))
    }, [favCourses])

    return { favCourses, favCourseCount, isFavorite, toggleFavorite }
}
