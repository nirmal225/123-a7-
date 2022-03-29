import './index.css'
import {
  VideoHeading,
  ChannelName,
  ViewsAndTimeContainer,
} from './styledComponents'

const TrendingVideoItem = props => {
  const {isDark, videoDetails} = props
  const {publishedAt, title, thumbnailUrl, viewCount, channel} = videoDetails
  const {name} = channel

  return (
    <li className="list-container">
      <img
        alt="thumbnail"
        src={thumbnailUrl}
        className="video-thumbnail-image"
      />
      <div className="video-details-description-container">
        <VideoHeading dark={isDark && true}>{title}</VideoHeading>
        <ChannelName>{name}</ChannelName>
        <ViewsAndTimeContainer>
          <p className="view-count-content">{viewCount}</p>
          <p className="published">{publishedAt}</p>
        </ViewsAndTimeContainer>
      </div>
    </li>
  )
}

export default TrendingVideoItem
