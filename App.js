import React from 'react'

class App extends React.Component {
  render(){
    return <div>Hello { `${this.props.name} #${this.props.number}` } </div>
  }
}

// デフォルト値をセット
App.defaultProps = {
  name: 'Shinosaka.rb'
}

// タイプを指定
App.propTypes = {
  // 文字列
  name: React.PropTypes.string,
  // 数値で必須
  number: React.PropTypes.number.isRequired
}

export default App
