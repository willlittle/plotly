import React, {Component} from 'react';
import Plot from 'react-plotly.js';
import './App.css'

class Chart extends Component {
    constructor(props){
        super()
        this.state = {
        data: {props}
    }}
    
 
    render(){
        var year = this.props.plotData.year
        var mortality = this.props.plotData.mortality
        console.log(this.props.plotData.year,'a')
        var display = false
        // typeof this.props.plotData.year[0]=='undefined' ? display = false : display=true
        true ? display = true : display=false
        const renderContent = () => {
            if (display){
            return <Plot 
                    data={[
                        {type:'bar',
                        x:year,
                        y:mortality}
                        ]} 
                        layout={ {autosize: true, paper_bgcolor: 'rgba(0,0,0,0)', plot_bgcolor: 'rgba(0, 0, 0, 0)'}}
                    /> 
            } else {
                return <h1>Please select country </h1>
            }}
        return(
            <div >
                {renderContent()}
            </div>
        )
    }
}
export default Chart;