import React, { Component } from "react";

import styles from "./App.module.css";
import Card from './component/card/card';
import Chart from './component/chart/chart';
import CountryPicker from './component/countryPicker/countryPicker';
import Footer from './component/Footer/footer';
import { fetchDailyData, fetchData, fetchCountry } from './api/api';

import CoronaImage from './LogoContainer/covid19_logo.png';

/* Here is Class Based Component to Pass Data Using State Property*/
class App extends Component {
  
  state = {
    data: '',
    countries:'',
  }

  async componentDidMount() {
     
    const data = await fetchData();
    
    this.setState({
      data:data
    })
  }
  handleChangeCountry =async (country) => {
    
    const Data = await fetchCountry(country);
     
    // console.log(Data);
    this.setState({
      data:Data ,
      countries:country,
    })
    
  }
  
   render() {
     const {data,countries} = this.state;    
    return (
      <div className={styles.App}>
        
         <img className={styles.images} src={CoronaImage} alt='COVID-19' />
         
        <Card  data={data} />
        
        <CountryPicker  handleChangeCountry={this.handleChangeCountry}/> 
        <Chart data={data} countries={countries}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
