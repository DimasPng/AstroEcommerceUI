export default async function getData() {
  try {
    const request = await fetch("http://5.35.91.65/api/data");
    if (!request.ok) {
      throw new Error(`HTTP error! Status: ${request.status}`);
    }
    const data = await request.json();
    const products = data.data.products;
    const categories = data.data.categories;
    return [categories, products];
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return [null, null];
  }
}
