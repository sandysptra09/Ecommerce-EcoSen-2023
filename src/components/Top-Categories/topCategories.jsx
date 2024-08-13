import {useState, useEffect} from 'react';
import axios from 'axios';
import "./TopCategories.css";

export default function TopCategories() {
    const [categories, setCategories] = useState(null)

    useEffect(() => { 
        const fetchTopCategories = async () => {
            try
            {
                const response = await axios.get('http://192.168.1.101:9000/category')
                setCategories(response.data)
                console.log(response.data)
            }
            catch {
                console.log('error fetching top categories')
            }
        }
        fetchTopCategories()
    }, [])

    if(!categories) {
        return (
            <div className="loading-page">
                <h5>Loading...</h5>
            </div>
        )
    }



    return (
        <div className="container-top-categories">
            <div className="top-categories">
                <h3>Top Categories</h3>
                <div className="menu-tc">
                    {categories.data.map((category) => (
                        <div className="vegetables" key={category.id}>
                        <img src={category.image} alt="Image Top Categories" />
                        <div className="text-menu">
                            <h6>{category.name}</h6>
                            <p>({category.category_count} items)</p>
                        </div>
                    </div>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}