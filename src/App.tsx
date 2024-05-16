import React, { useState } from 'react';
import { Button, Card, Row, Col, Grid, Select } from 'antd';
import './App.css'; 
import { useTranslation } from 'react-i18next';

const { useBreakpoint } = Grid;
const { Option } = Select;

const App: React.FC = () => {
  const [isGridUp, setIsGridUp] = useState(true);
  const [marginLeft, setMarginLeft] = useState(0);
  const [language, setLanguage] = useState('en')

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

  const handleChangeLanguage = (value: string) => {
    setLanguage(value);
};

  return (
    // <div >     
    // <Select defaultValue="en" className="language-button" onChange={handleChangeLanguage}>
    //     <Option value="en">English</Option>
    //   <Option value="th">ไทย</Option>
    // </Select>
    <div className="container">
      <div className="container">
      <Row justify="end" align="middle">
        <Col>
        </Col>
        <Col>
          <Select defaultValue="en" className="language-button" onChange={handleChangeLanguage}>
            <Option value="en">English</Option>
            <Option value="th">ไทย</Option>
          </Select>
        </Col>
      </Row>
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
    </div>
  );
}


export default App;
