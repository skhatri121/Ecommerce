useEffect(() => {
  fetch("https://dummyjson.com/products/category/smartphones")
    .then((res) => res.json())
    .then((data) => setCategories(data))
    .catch((error) => console.error("Error fetching categories:", error));
}, []);
