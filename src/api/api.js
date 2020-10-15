
const url = 'https://api.rootnet.in/covid19-in/stats/latest';

const newurl = 'https://api.rootnet.in/covid19-in/stats/history'; 

export  const fetchData =async () => {
    
    try {
        const response = await fetch(url);

        const result = await response.json();
        
        const { data: { summary: { confirmedCasesIndian, discharged, deaths } },lastRefreshed}= result;
        // console.log(result);
         
          
        
        return {
            confirmed: confirmedCasesIndian,
            recovered: discharged,
            deaths: deaths,
            lastUpdate:lastRefreshed
       } 
    }
    catch (error) {
        console.log('Error Occured', error); 
       
     } 
}

export const fetchDailyData =async () => {
    
    try {
        const response = await fetch(newurl);   
        const result = await response.json();
        const { data} = result;
        
        
        return {Data:data}; 
    }catch (error) {
        console.log('Error in Fetching Daily Data!', error);
    }  
}

export const fetchCountryData = async () => {
    try {
     const response=await fetch(url)  
        const result = await response.json();
        const {data:{regional}} = result;
         
        // console.log(regional); 
        return regional.map(country => country.loc);
    } catch (error) {
        console.log(error);
   } 
    


}

/*Fetch Individual  Data of Country  */

export const fetchCountry = async (Countries) => {
     
    
      
    try {
     const response=await fetch(url)  
        const result = await response.json();
        
        if (Countries === 'Global') {
        const { data: { summary:{confirmedCasesIndian, discharged, deaths } }, lastRefreshed } = result;
            
           return {
                confirmed: confirmedCasesIndian,
                recovered: discharged,
                deaths: deaths,
                lastUpdate:lastRefreshed
           } 
        } else {
            const { data:{regional},lastRefreshed} = result;
            const Country = regional.filter(country => {
            
                return country.loc === Countries
            });
            const { confirmedCasesIndian, discharged, deaths } = Country[0];
            const Modified = {
                confirmed: confirmedCasesIndian, recovered: discharged, deaths: deaths,lastUpdate:lastRefreshed 
            }    
            // console.log(Modified);
            return Modified;
        } 
    } catch (error) {
        console.log(error);
   } 
    


}




