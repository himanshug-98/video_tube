export const API_KEY = 'AIzaSyC9Ph9nrCV-EZO1tr43vZ95_n96SPQWol8'

export const value_converter = (value) =>{
    if(value>=1000000){
        return Math.floor(value/1000000) +"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000) +"K";
    }
    else{
        return value;
    }
}