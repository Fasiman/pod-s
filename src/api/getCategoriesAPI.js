export const getCategoriesAPI = async () => {
    const response = await fetch("http://localhost:3001/categories");
    if (!response.ok) {
        throw new Error("Failed to fetch categories");
    }
    const data = await response.json();
    console.log(data);
    return data;
    }