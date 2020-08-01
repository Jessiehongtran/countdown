import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        count: 30,
        startingDate: 28,
        startingMonth: 7,
        startingYear: 2020,
        currentDate: (new Date()).getUTCDate(),
        currentMonth: (new Date()).getUTCMonth() + 1,
        currentYear: (new Date()).getUTCFullYear()
    }

    this.handleChangeCount = this.handleChangeCount.bind(this)
    this.handleChangeDate = this.handleChangeDate.bind(this)
  }

  handleChangeCount(e){
    this.setState({count: parseInt(e.target.value)})
  }

  handleChangeDate(e){
    this.setState({
      startingMonth: parseInt(e.target.value.split("/")[0]),
      startingDate: parseInt(e.target.value.split("/")[1]),
      startingMonth: parseInt(e.target.value.split("/")[2]),
    })
  }

  render(){

    const left = this.state.count - 
                ( 
                  30*(this.state.currentMonth + 
                  12*(this.state.currentYear - this.state.startingYear)
                  -this.state.startingMonth) + 
                  this.state.currentDate - this.state.startingDate
                )

    return (
      <>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10%',
          }}
        >
          <div style={{display: 'flex', alignItems: 'center'}}>
          <p>How many days you want to count down? </p>
          <input
            type="number"
            style={{height: '20px', marginLeft: '10px'}}
            value={this.state.count}
            onChange={this.handleChangeCount}
          />
        </div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <p>Starting from which date? </p>
          <input
            type="date"
            style={{height: '20px', marginLeft: '10px'}}
            onChange={this.handleChangeDate}
          />
        </div>
          <p style={{fontSize: '100px'}}>{left > 0 ? left : "Times up"}</p>
        </div>
      </>
    )
  }
}

export default App;
