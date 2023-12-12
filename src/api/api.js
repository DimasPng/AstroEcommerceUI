export default async function getData() {
  const request = await fetch("http://127.0.0.1:8000/api/data");
  const data = await request.json();
  const products = data.data.products;
  const categories = data.data.categories;
  return [categories, products];
}
