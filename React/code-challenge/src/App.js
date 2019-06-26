import React, { Component } from 'react';
import Button from './components/button';
import Panel from './components/panel';

import { pointsController, parallelogramController, circleController } from '../src/controllers';
import { isPointSelected, areaParalellogram, diameterCircunference } from '../src/helpers';
import { NUMBER_OF_POINTS } from '../src/constants';
import './App.css';

class App extends Component {

  state = {
    points: [],
    pointSelected: null,
    circleArea: null,
    parallelogramArea: null
  }

  componentDidMount(prev) {
    this.canvas = this.refs.canvas;
    this.context = this.canvas.getContext('2d');
    this.CONTAINER = { x: 0, y: 0, width: this.canvas.width, height: this.canvas.height };
  }

  componentDidUpdate() {
    this.context = this.canvas.getContext('2d');
  }

  initScreen = () => {
    this.context.fillStyle = 'black';
    this.context.fillRect(this.CONTAINER.x,this.CONTAINER.y,this.CONTAINER.width,this.CONTAINER.height);
  }

  handleMouseDown = ({ nativeEvent }) => {
    
    const { offsetX: x, offsetY: y } = nativeEvent;
    const { points } = this.state;

    if (points.length < NUMBER_OF_POINTS) {
      this.setState({
        points: points.concat({ x, y })
      });
    } else {
      const pointSelected = isPointSelected(x, y, points);

      if (pointSelected !== null && pointSelected !== this.state.pointSelected) {
        this.setState({ pointSelected });
      } else {
        this.setState({ pointSelected: null });
      }
    }

    requestAnimationFrame(this.renderCanvas);
  }

  handleMouseMove = ({ nativeEvent }) => {
    
    const { offsetX: x, offsetY: y } = nativeEvent;
    const { pointSelected, points } = this.state;

    if (pointSelected !== null) {
      const newPoints = points.concat();
      newPoints[pointSelected] = { x, y };
      this.setState({ points: newPoints });
    }

    requestAnimationFrame(this.renderCanvas);
  }

  renderCanvas = () => {
    this.initScreen();

    const { points } = this.state;
    const { context } = this;
    const [ point1, point2, point3 ] = points;

    pointsController(context, points);

    if (points.length === NUMBER_OF_POINTS) {
      const paralellogramArea = areaParalellogram(point1, point2, point3);
      const circleDiameter = diameterCircunference(paralellogramArea);
      parallelogramController(context, points);
      circleController(context, points, circleDiameter);

      this.setState({ circleArea: paralellogramArea, paralellogramArea });
    }
    
  }

  onReset = () => {
    this.setState({
      points: [],
      pointSelected: null,
      circleArea: null,
      parallelogramArea: null
    });
    requestAnimationFrame(this.renderCanvas);
  }

  render() {
    const { innerWidth, innerHeight } = window;
    const { points, paralellogramArea, circleArea } = this.state;
    const [ point1, point2, point3 ] = points; 

    return (
      <div id='container'>
        
        <div id='background'>
          <canvas
            ref='canvas'
            width={innerWidth}
            height={innerHeight}
            onMouseDown={this.handleMouseDown}
            onMouseMove={this.handleMouseMove}
          />
        </div>

        <div id='button'>
          <Button
            onClick={this.onReset}
          >
            Reset
          </Button>
        </div>

        <div id='panel'>
          <Panel
            point1={point1}
            point2={point2}
            point3={point3}
            paralellogramArea={paralellogramArea}
            circleArea={circleArea}
          />
        </div>       

      </div>
    );
  }
}

export default App;
