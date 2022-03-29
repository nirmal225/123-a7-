import './index.css'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import {IconContainer, GamingHeading} from './styledComponents'
import TopNavbar from '../TopNavbar'
import LeftNavbar from '../LeftNavbar'
import GamingVideoItem from '../GamingVideoItem'

import ThemeContext from '../../context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {videosDetails: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getVideosDetails()
  }

  getFormattedVideoData = dataObject => ({
    id: dataObject.id,
    thumbnailUrl: dataObject.thumbnail_url,
    title: dataObject.title,
    viewCount: dataObject.view_count,
  })

  getVideosDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const token = Cookies.get('jwt_token')
    const homeVideosApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {Authorization: `Bearer ${token}`},
      method: 'Get',
    }
    const response = await fetch(homeVideosApiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = await data.videos.map(eachVideo =>
        this.getFormattedVideoData(eachVideo),
      )
      this.setState({
        videosDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderVideosField = isDark => {
    const {videosDetails} = this.state

    return (
      <ul className="gaming-videos-list-container">
        {videosDetails.map(eachVideo => (
          <GamingVideoItem
            videoDetails={eachVideo}
            key={eachVideo.id}
            isDark={isDark}
          />
        ))}
      </ul>
    )
  }

  renderFailureView = isDark => {
    const failureImage = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    const homeFailureHeading = isDark
      ? 'home-failure-heading home-failure-dark'
      : 'home-failure-heading'

    const homeFailureParagraph = isDark
      ? 'home-failure-paragraph home-failure-paragraph-dark'
      : 'home-failure-paragraph'
    return (
      <div className="home-failure-container">
        <img src={failureImage} alt="failure" className="home-failure-image" />
        <h1 className={homeFailureHeading}>OOps! Something Went Wrong</h1>
        <p className={homeFailureParagraph}>
          We are having some trouble to complete your request. Please try again
        </p>
        <button
          type="button"
          onClick={this.onClickRetryButton}
          className="gaming-retry-button"
        >
          Retry
        </button>
      </div>
    )
  }

  renderLoadingView = () => (
    <div data-testid="loader" className="gaming-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderApiStatus = isDark => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView(isDark)
      case apiStatusConstants.success:
        return this.renderVideosField(isDark)
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          const trendingVideosContainer = isDark
            ? 'gaming-videos-container gaming-videos-container-dark'
            : 'gaming-videos-container'
          const trendingVideos = isDark
            ? 'gaming-videos gaming-videos-dark'
            : 'gaming-videos'
          return (
            <div className="gaming-app-container" data-testid="gaming">
              <TopNavbar />
              <div className="app-container">
                <LeftNavbar />
                <div className={trendingVideosContainer}>
                  <div className={trendingVideos}>
                    <IconContainer dark={isDark && true}>
                      <SiYoutubegaming size={40} />
                    </IconContainer>
                    <GamingHeading dark={isDark && true}>
                      Trending
                    </GamingHeading>
                  </div>
                  {this.renderApiStatus(isDark)}
                </div>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
