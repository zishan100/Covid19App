import React,{useState,useEffect} from 'react';

import  styles from './chartstyle.module.css';

import { fetchDailyData } from '../../api/api';
/* Here we importing chart Library to Implement*/
import {Line,Bar } from 'react-chartjs-2';


const Chart = ({data:{confirmed,recovered,deaths},countries}) => {
    const [dailyData,setdailyData] = useState([]);    
      
    useEffect(() => {
      const fetchAPI = async () => {
          setdailyData(await fetchDailyData())  
        }
        
        fetchAPI();
      },[])
       
    const Daily = dailyData.Data;
    
     const lineCart = (
        Daily ?
            <Line
                data={{
                    labels:Daily.map(data=>data.day),
                    datasets: [
                        {
                        data: Daily.map(({summary})=>summary.confirmedCasesIndian),
                            label: 'Infected',
                            borderColor: '#3333ff',
                            fill:true
                        },
                        {
                            data: Daily.map(({summary }) =>summary.deaths),
                            label: 'Deaths',
                            backgroundColor: 'rgba(255,0,0,0.5)',
                            fill:true  
                        }
                     
                    ]

                }}
               
            /> : null
    );
    // console.log(confirmed, recovered, deaths,countries);
    const barChar = (
        confirmed>=0 ?
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgb(122, 122, 236)',
                            'rgb(143, 243, 130)',
                            'rgb(243, 98, 87)'
                        ],
                        data: [confirmed, recovered, deaths]
                    }],
                
         
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${countries}` }
                }}
            
            /> : null         
     

    )
    
    return (
        <div className={styles.container}>
            {
                (countries === '' || countries==='Global')
                    ?
                  lineCart :barChar 
          }
        </div>
      ); 

}
export default Chart;
