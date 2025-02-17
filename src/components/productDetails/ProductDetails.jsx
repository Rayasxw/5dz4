import { Button, Image} from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './Product.module.scss';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const fetchProduct = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
    };

    useEffect(() => {
        fetchProduct();
        console.log(product);
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className={styles.card}>
                <div className={styles.image}>
                    <Image src={product.image} width={300} height={300} />
                </div>
                <div className={styles.details}>
                    <p className={styles.description}><b>Description :</b> {product.description}</p>
                    <p className={styles.price}>Price: {product.price}$</p>
                    <Button onClick={() => navigate(-1)} style={{ background: '#086CF9', color: 'white' }}>Back</Button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;