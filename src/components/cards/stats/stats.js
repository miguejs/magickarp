import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLanguageStats } from '../../../actions/index';
import  { Pie }  from  'react-chartjs-2'

import '../home/home.css'; // TODO: use proper style



function mapStateToProps(state) {

  return  {
    languages: state.languages
  }
}
class Stats extends Component {

  componentWillMount() {
    this.props.fetchLanguageStats('last_7_days')

  }
  componentDidMount() {

  }

  showPiechart(){
    let data = { labels: [], datasets: [ {data: [], backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#FFCE56",
                "#FFCE56",
                "#FFCE56",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#FFCE56",
                "#FFCE56",
                "#FFCE56",
                "#FFCE56"
            ] }] }
    this.props.languages.map((language) =>{
      data.labels.push(language.name)
      data.datasets[0].data.push(language.total_seconds)
    })
    return data

  }

  render() {
    return (
     <div className="card">
        <div className="header">
          <h2>Most used languages</h2>
          <ul>
            <li>Last week</li>
            <li>Last month</li>
            <li>last year</li>
          </ul>
        </div>
        <div className="content">
        <Pie data={this.showPiechart()}  width={800} height={300}/>
        </div>
        <div className="footer">
        </div>
     </div>
    );
  }
}

export default connect(mapStateToProps, {fetchLanguageStats})(Stats);
