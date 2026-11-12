const BASE_URL = "https://dummyjson.com/products"

export const fetchProducts = async (customParams = {}) => {
    const paramsObj = {
        select: 'title,description,category,price,thumbnail',
        ...customParams
    }
    const params = new URLSearchParams(paramsObj)
    const url = `${BASE_URL}?${params.toString()}`
    
    try {
        const response = await fetch(url)
        if (!response.ok) {
            const error = new Error(`HTTP Error: ${response.status}, ${response.statusText}`)
            return { data: null, error }
        }
        const data = await response.json()
        return { data, error: null }
    } catch (error) {
        return { data: null, error }
    }
}
