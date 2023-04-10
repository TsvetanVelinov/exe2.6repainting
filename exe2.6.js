function repainting(input) {

    let nylon = Number (input[0]);
    let paint = Number (input[1]);
    let thinner = Number (input[2]);
    let workHours = Number (input[3]);

    let nylonPrice = 1.5;
    let paintPrice = 14.50 ;
    let thinnerPrice = 5;


    let totalNylon = (nylon + 2) * nylonPrice ;
    let totalPaint = (paint * 1.10) * paintPrice;
    let totalThinner = (thinner * thinnerPrice) ;
    let bagsPrice = 0.4 ;

    let totalSum = totalPaint + totalNylon + totalThinner + bagsPrice ;
    let craftsmanSalary = (totalSum * 0.3) * workHours ;

    let finalCraftsmanSalary = totalSum + craftsmanSalary ;



    console.log(`${finalCraftsmanSalary.toFixed(2)}`);



}

repainting(["10","11","4","8"])

repainting (["5","10","10","1"])
