import { useCallback, useEffect, useState } from "react"

export function useFavoriteCourses () {
    const [favCourses, setFavCourses] = useState(() => JSON.parse(localStorage.getItem("favCourses")) || [])
    const favCourseIds = favCourses.map(item => item.id)
    const favCourseCount = favCourses.length
    
    const favSet = new Set(favCourseIds)
    const isFavorite = (id) => favSet.has(id)

    const toggleFavorite = useCallback((item) => {
        setFavCourses(prevItems => {
            const isFav = prevItems.some(i => i.id === item.id)
            if(isFav) {
                return prevItems.filter(i => i.id !== item.id)
            }else {
                return [...prevItems, item]
            }
        })
    },[]) 
        
    useEffect(() => {
        localStorage.setItem("favCourses", JSON.stringify(favCourses))
    }, [favCourses])

    return { favCourses, favCourseCount, isFavorite, toggleFavorite }
}
