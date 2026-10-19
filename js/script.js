function acquista(){

    let eta;
   
    do{
     eta = prompt("inserisci la tua eta")

    if(eta==null){
        return
    }

    }while(eta<1 || eta>100);
   
     if(eta<5){
        alert("biglietto acquistato (gratis) ")
        console.log(eta + " anni - gratis")
    }else if(eta>=18 && eta<=25){
        alert("paghi 3.5€")
        console.log(eta + " anni - paghi 3.5€")
    }else if(eta>=50 && eta<=55){
        alert("paghi 5€")
        console.log(eta + " anni - paghi 5€")
    }else{
        alert("paghi 8€")
        console.log(eta + " anni - paghi 8€")
    }


}

