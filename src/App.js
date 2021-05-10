import './App.css';
import {useState} from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import Chart from './Chart'
import * as d3 from 'd3'

const iState = () => {
  let year = []
  let mortality = []
  let plot = []
    d3.csv('/mortality2.csv', (d)=> {
      if(d.index == 1){
        year.push(d.year)
        mortality.push(d.recordedRate)
        plot.push(d.country)
      }})
    const initialState = {year, mortality, plot}
    return initialState
}

function dataSwitcher(tabIndex){
  let year = []
  let mortality = []
  let plot = []
    d3.csv('/mortality2.csv', (d)=> {
      if(d.index == tabIndex){
        year.push(d.year)
        mortality.push(d.recordedRate) 
        plot.push(d.country)
      }})
  const newPlot = {year, mortality, plot}
  return newPlot

}  
function App() {


  const[currentData, setCurrentData] = useState(iState());
  const[tabValue, setTabValue]= useState(0)
  const handleTabs=(e, val)=>(setTabValue(val), dataSwitcher(val))

  const updateData = (tabIndex) =>{
    setCurrentData(dataSwitcher(tabIndex))

  }

// console.log(currentData.mortality)
    return (
    <div className="App">
      <div className='container'>
          <div>
            <AppBar position='static' >
              <Tabs centered align={'center'}value={tabValue} onChange={handleTabs}>
                <Tab label='Plot 1'/>
                <Tab label='Plot 2'/>
                <Tab label='Plot 3'/>
              </Tabs>
            </AppBar>
          </div>
          <div>
            <Chart plotData={currentData} />
          </div>
        </div> 
    </div>
  );
}

export default App;
