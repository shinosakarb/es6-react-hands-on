import React from 'react'

class App extends React.Component {
  constructor(){
    super()

    // stateのデフォルト値
    this.state = {
      name: 'Shinosaka.rb'
    }
  }
  onChangeName(e){
    this.setState({
      name: e.target.value
    })
  }
  render(){
    // propsからstateへ
    return (
      <div>
        <h1>Hello { `${this.state.name} #${this.props.number}` } </h1>
        <input type="text" onChange={this.onChangeName.bind(this)} />
      </div>
    )
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
