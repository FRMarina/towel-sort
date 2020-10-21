// You should implement your task here.

module.exports = function towelSort(matrix) {
    if(matrix === undefined){
        return [];
    }else if(matrix.length%2==0){
        for (let i = 1; i < matrix.length; i++) {
         for(let j =0; j<matrix.length;j++){
           if(j==1){
             matrix[j].reverse();
           }else if(j%2==0){
              matrix[j];
           }else if(j%3==0){
            matrix[j].reverse();
           }
         }
       }
       return matrix.flat();
           }else{
             for (let i = 2; i < matrix.length; i++) {
               for(let j =0; j<matrix.length;j++){
                 if(j==1){
                  matrix[j].reverse();
                 }else if(j%2==0){
                    matrix[j];
                 }else if(j%3==0){
                  matrix[j].reverse();
                 }
               }
           }
           return matrix.flat();
       }
};
