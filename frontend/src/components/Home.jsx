
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>

    <div className='ml-96 mt-56'>Home</div>
    <Link to="/signup">
        <button className='p-1 text-white bg-black rounded-md ml-96'>SignUp</button>
    </Link>
    </>
  )
}

export default Home