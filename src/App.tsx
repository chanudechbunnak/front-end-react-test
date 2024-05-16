import React, { useState } from 'react';
import { Button, Card, Row, Col, Grid } from 'antd';
import './App.css'; // Import CSS file or SCSS file

const { useBreakpoint } = Grid;

const App: React.FC = () => {
  const [isGridUp, setIsGridUp] = useState(true);
  const [marginLeft, setMarginLeft] = useState(0);

  const screens = useBreakpoint();

  const handleMoveLeft = () => {
    setMarginLeft(marginLeft - 100);
  };

  const handleMoveRight = () => {
    setMarginLeft(marginLeft + 100);
  };

  const handleMovePosition = () => {
    setIsGridUp(!isGridUp);
  };

  return (
    <div className="container">
      {/* Triangles */}
      <div className="triangle-container">
        <Card className="shape-card" onClick={handleMoveLeft}>
          <div className={`left-triangle`}></div>
          <div className="triangle-text">Move Left</div>
        </Card>
        <Card className="shape-card" onClick={handleMovePosition}>
          <div className={`up-triangle ${isGridUp ? 'rotate-up' : ''}`}></div>
          <div className="triangle-text" >Move Position</div>
        </Card>
        <Card className="shape-card" onClick={handleMovePosition}>
          <div className={`down-triangle ${isGridUp ? 'rotate-down' : ''}`} ></div>
          <div className="triangle-text">Move Position</div>
        </Card>
        <Card className="shape-card" onClick={handleMoveRight}>
          <div className={`right-triangle`} ></div>
          <div className="triangle-text">Move Right</div>
        </Card>
      </div>

      {/* Shapes */}
      <div className={`shapes-container ${isGridUp ? 'grid-up' : 'grid-down'}`}>
        <div className="shape-row" style={{ marginLeft: `${marginLeft}px` }}>
          <Card className="shape-card">
            <div className={`square`}></div>
          </Card>
          <Card className="shape-card">
            <div className={`rectangle`}></div>
          </Card>
        </div>

        <div className="shape-row" style={{ marginLeft: `${marginLeft}px` }}>
          <Card className="shape-card">
            <div className={`parallelogram`}></div>
          </Card>
          <Card className="shape-card">
            <div className={`trapezoid`}></div>
          </Card>
        </div>

        <div className="shape-row" style={{ marginLeft: `${marginLeft}px` }}>
          <Card className="shape-card">
            <div className={`circle`}></div>
          </Card>
          <Card className="shape-card">
            <div className={`ellipse`}></div>
          </Card>
        </div>
      </div>
    </div>
  );
}


export default App;
