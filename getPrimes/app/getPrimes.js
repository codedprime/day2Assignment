module.exports = {
    getPrimes : function (A){
        const dataType = typeof A;
        if (dataType != 'number')
        {
            return 'invalid input';
        }
        else{
            var prime = [];
            if (A>0){
                while(A){
                    for(var i = 2; i<=A;i++){
             
                        if ((A!=2)&&(i!=A) && (A%i===0)){
                           break;
                        }
                        if (i== (A)){
                          prime.push(A);
                        }
                    } 
                    A--;
                }
            }

            if (A<0){
                while(A<0){
                    for(i = -2; i>=A;i--){
             
                        if ((A!=-2)&&(i!=A) && (A%i===0)){
                            break;
                        }
                        if (i== (A)){
                            prime.push(A);
                        }
                    } 
                    A++;
                }
            }


            return prime.reverse();
        }
    }
}
