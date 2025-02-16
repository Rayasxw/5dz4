import { List, Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import { useEffect, useState } from "react"
import Products from "../../components/product/Products";


const ProductsPage = () => {

    const [products, setProducts] = useState([])
    const [currentCategory, setCurrentCategory] = useState("All");

    const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    const groupedPosts = products.reduce((acc, product) => {
        const category = product.category || "Uncategorized";
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(product);
        return acc;
      }, {});
    
      const categories = ["All", ...Object.keys(groupedPosts)];
    
      const filteredPosts =
        currentCategory === "All" ? products : groupedPosts[currentCategory];
  return (
    <div>
        <Tabs
        defaultActiveKey="All"
        onChange={(key) => setCurrentCategory(key)}
        style={{ marginBottom: 20 }}
      >
        {categories.map((category) => (
          <TabPane tab={category} key={category} />
        ))}
      </Tabs>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={filteredPosts}
        renderItem={(product) => (
          <List.Item>
            <Products
              id={product.id}
              title={product.title}
              image={product.image}
              category={product.category}
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default ProductsPage