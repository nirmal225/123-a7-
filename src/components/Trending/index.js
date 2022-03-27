import './index.css'
import TopNavbar from '../TopNavbar'
import LeftNavbar from '../LeftNavbar'

const Trending = () => (
  <div className="trending-app-container">
    <TopNavbar />
    <div className="app-container">
      <LeftNavbar />
      <div className="trending-container">
        <h1>Trending</h1>
      </div>
    </div>
  </div>
)

export default Trending
