    // const arr1 = [1,2,3,4];
    // const arr2 =[];

    // for (i=0; i < arr1.length; i++){
    //     arr2.push(arr1[i]*2)};

    // console.log (arr1);
    // console.log (arr2);

    function maps(x){
        const b=[];
        for (i=0; i < x.length; i++){ b.push(x[i]*2)}
        return b;
    }
        
        const arr1 = [1,2,3,4];
        const arr2 = maps(arr1);
        console.log (arr1);
        console.log (arr2)