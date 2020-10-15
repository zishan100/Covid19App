import React from 'react';


import { Card,Grid,CardContent,Typography} from '@material-ui/core';

import cx from 'classnames';
import CountUp from 'react-countup';
import styles from './card.module.css'  
const Cards = ({ data: { confirmed,recovered,deaths,lastUpdate}}) => {
    if (confirmed===undefined)
    {
        return '...Loading';
    }
    // console.log(confirmed,recovered,deaths);  
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify='center' >
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                  <CardContent>
                        <Typography color='textSecondary' gutterBottom>
                            Infected
                        </Typography>
                        
                           
                            
                            <Typography variant='h5' >
                            <CountUp start={0} end={confirmed} separator=',' duration={2.5}/>
                           </Typography>       

                        
                    <Typography
                        variant='h5'
                        >
                        {new Date(lastUpdate).toDateString()}  
                        </Typography>
                        <Typography variant={"body2"} >
                         No of active cases of COVID-19 
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>
                            Recovered 
                        </Typography>
                                                                           <Typography
                          variant='h5'
                           >
                          <CountUp start={0} end={recovered} separator=',' duration={2.5} />
                         </Typography>

                        
                        
                        <Typography
                         variant='h5'
                        >
                        {new  Date(lastUpdate).toDateString()}  
                        </Typography>
                        <Typography variant={"body2"} >
                        No of recovered cases of COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>
                         Deaths
                        </Typography>
                        <Typography
                            variant='h5'
                           >
                           <CountUp start={0} end={deaths} separator=',' duration={2.5} />
                            </Typography>      
                        
                        
                        <Typography
                         variant='h5'
                        >
                        {new  Date(lastUpdate).toDateString()}  
                        </Typography>
                        <Typography variant={"body2"} >
                        No of deaths cases of COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
           </Grid>  
       </div>
); 

}
export default Cards;
