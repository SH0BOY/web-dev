let list=[];

while(true){
    let option =prompt("What would you like to do?");

    if(option==="new"){
        list.push(prompt("Enter Todo"));
    }
    else if (option==="list"){
        for(let i=0;i<list.length;i++){
            console.log(i+" : "+list[i]);
        }
    }
    else if(option==="delete"){
        console.log(list.splice(prompt("Enter index"),1));
    }
    else if(option==="quit"){
        break;
    }
    else{
        console.log("Enter again");
    }

    
}