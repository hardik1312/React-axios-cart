import {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Axios from 'axios';
import {faker}  from '@faker-js/faker';

const apiKey = "AAMiIwDWer2Xhi1QOufSPEDfw23ZQFQtthvOPyWRiIY9btzNO56ON0ZC";

const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";

const localUrl = "https://api.jsonbin.io/v3/qs/6465ea1c9d312622a36070fc";


const BuyPage = (addInCart)=>{
    console.log("control came to buy page")
    const[product, setProduct] = useState([]);

    const fetchPhotos = async ()=>{
        const {data} = await Axios.get(url,{
            headers:{
                Authorization:apiKey
            }
        });
        const {photos} = data;
        const allProduct = photos.map(photo =>({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: faker.commerce.product(),
            prouctPrice: faker.finance.amount(),
        }))
        setProduct(allProduct);
    }

    useEffect(()=>{
        fetchPhotos()
    },[]);

    return (
        <Container>
            <h1>
                Buy Page
            </h1>
            <Row>
                {product.map(product=>{
                    <span key={product.id}>{product.productName}</span>
                })}
            </Row>
        </Container>
    )
}

export default BuyPage;