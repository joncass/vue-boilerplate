const url = 'https://github.com/joncass/vue-boilerplate/blob/master/README.md'

export default {
  render () {
    return (
      <div class='__container__view__-about'>
        <p>
          To get started, edit files in <code>./src/client</code> and save.
        </p>
        <p>
          For more information: <a href={url}>README</a>
        </p>
      </div>
    )
  },
}
