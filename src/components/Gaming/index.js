import './index.css'
import TopNavbar from '../TopNavbar'
import LeftNavbar from '../LeftNavbar'

const Gaming = () => (
  <div className="gaming-app-container">
    <TopNavbar />
    <div className="app-container">
      <LeftNavbar />
      <div className="gaming-container">
        <h1>Gaming</h1>
      </div>
    </div>
  </div>
)

export default Gaming
