import Cards from '../components/Cards';
import data from '../backend/data';
import './Home.css';

const Home = () => {
    return (
        <div className='container-fluid'>
            <h3 className='text-center mt-5 text-uppercase'>Shop Page</h3>
            <div className="container py-4">
                <div className="row">
                    {data.products.map((item, index) => {
                        return (
                            <Cards img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    )
}

export default Home