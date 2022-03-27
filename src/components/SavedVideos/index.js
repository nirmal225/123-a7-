import './index.css'
import TopNavbar from '../TopNavbar'
import LeftNavbar from '../LeftNavbar'

const SavedVideos = () => (
  <div className="saved-video-app-container">
    <TopNavbar />
    <div className="app-container">
      <LeftNavbar />
      <div className="saved-videos-container">
        <h1>Saved Videos</h1>
      </div>
    </div>
  </div>
)

export default SavedVideos
