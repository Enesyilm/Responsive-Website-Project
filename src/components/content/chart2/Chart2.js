import React from 'react';
import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  CommonAxisSettings,
  Grid,
  Export,
  Legend,
  Margin,
  Tooltip,
  Label,
  Format
} from 'devextreme-react/chart';
import { architectureSources, sharingStatisticsInfo } from './data2.js';

class Chart2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'spline'
    };
    this.types = ['spline', 'stackedspline', 'fullstackedspline'];
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <Chart id="chart2"
          palette="Violet"
          dataSource={sharingStatisticsInfo}
        >
          <CommonSeriesSettings
            argumentField="year"
            type={this.state.type}
          />
          <CommonAxisSettings>
            <Grid visible={true} />
          </CommonAxisSettings>
          {
            architectureSources.map(function(item) {
              return <Series key={item.value} valueField={item.value} name={item.name} />;
            })
          }
          <Margin bottom={20} />
          <ArgumentAxis
            allowDecimals={false}
            axisDivisionFactor={60}
          >
            <Label>
              <Format type="decimal" />
            </Label>
          </ArgumentAxis>
          <Legend
            verticalAlignment="top"
            horizontalAlignment="right"
          />
          <Export enabled={false} />
          <Tooltip enabled={true} />
        </Chart>
       
      </React.Fragment>
    );
  }

  handleChange(e) {
    this.setState({ type: e.value });
  }
}

export default Chart2;
