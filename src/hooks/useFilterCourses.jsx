import { useState } from "react"

export function useFilterCourses ({ allCourses }) {
    const [searchQuery, setSearchQuery] = useState("")
    const [priceFilter, setPriceFilter] = useState("all")

    const filters = [
        { value: "all", label: "همه دوره ها"},
        { value: "free", label: "دوره های رایگان"},
        { value: "pro", label: "دوره های پولی"}
    ]

    const normalizedQuery = searchQuery.trim().toLowerCase()
    const filteredCourses = allCourses
        .filter(course => course.title.toLowerCase().includes(normalizedQuery))
        .filter(course => 
            priceFilter === "free" ? course.price === 0 : 
            priceFilter === "pro" ? course.price > 0 : 
            true
        )

    const onChangeInput = (ev) => setSearchQuery(ev.target.value)  
    const clearSearchQuery = () => setSearchQuery("")

    return { searchQuery, onChangeInput, filters, priceFilter, setPriceFilter, filteredCourses, clearSearchQuery }
}
