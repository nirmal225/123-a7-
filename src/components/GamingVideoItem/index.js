import './index.css'
import {
  VideoHeading,
  ChannelName,
  ViewsAndTimeContainer,
} from './styledComponents'

const GamingVideoItem = props => {
  const {isDark, videoDetails} = props
  const {title, thumbnailUrl, viewCount} = videoDetails

  return (
    <li className="gaming-list-container">
      <img
        alt="thumbnail"
        src={thumbnailUrl}
        className="gaming-thumbnail-image"
      />
      <div className="gaming-video-details-description-container">
        <VideoHeading dark={isDark && true}>{title}</VideoHeading>
        <ChannelName>{title}</ChannelName>
        <ViewsAndTimeContainer>
          <p className="view-count-content">{viewCount} Watching World Wide</p>
        </ViewsAndTimeContainer>
      </div>
    </li>
  )
}

export default GamingVideoItem
