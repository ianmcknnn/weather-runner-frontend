import React from 'react'
import {VictoryPie, VictoryLabel, VictoryAnimation} from "victory"

class ProgressDonut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ x:1, y: 2}, {x:2, y: 3}]
    };
  }

  render() {
    const {user} = this.props
    return (
        <svg viewBox="0 0 400 400" width="100%" height="100%">
          <VictoryPie
            standalone={false}
            animate={{ duration: 2000 }}
            width={400} height={400}
            data={this.state.data}
            innerRadius={110}
            cornerRadius={5}
            labels={() => null}
            style={{
              data: { fill: ({ datum }) => {
                const color = datum.y > 5/2 ? "green" : "red";
                return datum.x === 1 ? color : "transparent";
              }
              }
            }}
          />
          <VictoryAnimation duration={2000} data={this.state}>
            {(newProps) => {
              return (
                <VictoryLabel
                  textAnchor="middle" verticalAnchor="middle"
                  x={200} y={200}
                  text={`${3} / ${5}`}
                  style={{ fontSize: 35 }}
                />
              );
            }}
          </VictoryAnimation>
        </svg>
    );
  }
}

export default ProgressDonut;