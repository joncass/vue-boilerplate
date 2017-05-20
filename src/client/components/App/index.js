// Global styles
import './style.css'

// My library
import NavBar from '../NavBar'

export default {
  render () {
    return (
      <div id='app' class='page'>
        <NavBar />
        <router-view></router-view>
      </div>
    )
  },
}
