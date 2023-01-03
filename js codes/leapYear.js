function leapYear(year){
    
    if (year % 4 !== 0) {
        
        return( year +" not a leapYear")
        
    }else if (year % 100 !== 0) {
        
        return( year +" is a leap year")
        
    }else if (year % 400 !== 0) {
        
        return( year +" not a leapYear")
        
    }else{
        
        return( year +" is a leap year")
    }
}
leapYear(1800);