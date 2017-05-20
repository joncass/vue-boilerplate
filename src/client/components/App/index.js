// Global styles
import './style.css'

export default {
  render () {
    return (
      <div id='app' class='page'>
        <p>
          <router-link to='/'>Home</router-link>
          ...
          <router-link to='/about'>About</router-link>
        </p>
        <router-view></router-view>
      </div>
    )
  },
}
