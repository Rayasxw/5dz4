import { Button, Image, List } from "antd"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from './Product.module.scss'
import { useNavigate } from 'react-router-dom'

const ProductDetails = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [post, setPost] = useState([])
    
     const fetchProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await response.json()
            setPost(data)
        }
    useEffect(() => {
        fetchProduct()
    }, [])
    console.log(post);
    
  return (
    <div>
        <List
            style={{display: 'flex', justifyContent: 'center'}}
            dataSource={post}
            renderItem={(post) => (
                <List.Item>
                    <div className={styles.card}>
                        <div className={styles.image}>
                            <Image src={post.image} width={300} height={300}/>
                        </div>
                        <div className={styles.details}>
                            <p className={styles.description}><b>Description :</b> {post.description}</p>
                            <p className={styles.price}>Price: {post.price}$</p>
                            <Button onClick={() => navigate(-1)} style={{background: '#086CF9' , color:'white'}}>Back</Button>
                        </div>
                    </div>
                    
                </List.Item>
            )}
         />
    </div>
  )
}

export default ProductDetails