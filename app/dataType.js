function dataTypes(A){  
//set a constant datatype  
    const result = typeof A;
    // a switch block for all possible datatype known to me
    switch (result){
    case ("number"):   
         if (A == 100){
          return 'equal to 100';
        }
        else if (A < 100){
          return 'less than 100';
        }
        else{
          return 'more than 100'
        }
        break;
        
    case "string":
        return (A.length);
        
    case "boolean":
        return (A);
        
    case "object":
      if (A ===null){
        return 'no value';
      }
      if (A.length <2 ){
        return undefined;
      }
      else{
        return(A[2]);
      }
      
        break;
        
    case "function":
        return(A(true));
         
    case "undefined":
        return ("no value")
        //for any data type out there not in my head
    default:
        return ("yet to be discovered");
      
    }
}
