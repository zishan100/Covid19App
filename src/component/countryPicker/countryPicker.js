import React , {useState,useEffect} from 'react';

import './countrystyle.module.css';

import { fetchCountryData } from '../../api/api';
import styles from './countrystyle.module.css';

import { FormControl,NativeSelect} from '@material-ui/core';

const CountryPicker = ({handleChangeCountry}) => {
   
    const [Countries, setCountries] = useState([]);
    
    useEffect( () => {
        const fetchCountries=async ()=>{
            
            setCountries(await fetchCountryData()); 
        }
        
       fetchCountries(); 
     
     },[setCountries]);
     
    
    return (
        <FormControl className={styles.formContainer}>
            <NativeSelect defaultValue='' onChange={(e)=> handleChangeCountry(e.target.value)}>
                <option value='Global'>Global</option>
                {
                Countries.map((country, i) => <option key={i} defaultValue='Global' value={country}>{country}</option>) 
                }     
            </NativeSelect>
        
        </FormControl>

); 

}
export default CountryPicker;
