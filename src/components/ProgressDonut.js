import React from 'react'
import {VictoryPie, VictoryLabel, VictoryAnimation} from "victory"
import {isThisWeek} from "date-fns"
import { parseISO } from 'date-fns/esm';

class ProgressDonut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ x:1, y: 0}, {x:2, y: props.user.weekly_run_quota}]
    };
  }

  // componentDidMount() {
  //   const runs = this.props.user.runs;
  //   const runsThisWeek = runs.filter(run => isThisWeek(parseISO(run.date)))
  //   this.setState({
  //     data: [{ x:1, y: runsThisWeek.length}, 
  //       {x:2, y: this.props.user.weekly_run_quota-runsThisWeek.length}]
  //   })
  // }
  

  render() {
    let quota = this.props.user.weekly_run_quota
    let runs = this.props.user.runs;
    let runsThisWeek = runs.filter(run => isThisWeek(parseISO(run.date)))
    let data = [{ x:1, y: runsThisWeek.length}, 
      {x:2, y: this.props.user.weekly_run_quota-runsThisWeek.length}]
    return (
        <svg viewBox="0 0 400 400" width="100%" height="100%">
          <VictoryPie
            standalone={false}
            animate={{ duration: 1500 }}
            width={400} height={400}
            data={data}
            innerRadius={110}
            cornerRadius={5}
            labels={() => null}
            style={{
              data: { fill: ({ datum }) => {
                const color = datum.y > quota/2 ? "green" : "red";
                return datum.x === 1 ? color : "#d2e4e8";
              }
              }
            }}
          />
          <VictoryAnimation duration={3000} data={this.state}>
            {() => {
              return (
                <VictoryLabel
                  textAnchor="middle" verticalAnchor="middle"
                  x={200} y={200}
                  text={`${runsThisWeek.length} / ${quota}`}
                  style={{ fontSize: 45 }}
                />
              );
            }}
          </VictoryAnimation>
        </svg>
    );
  }
}

export default ProgressDonut;