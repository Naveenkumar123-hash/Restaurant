async function getMenu(){
    const response= await fetch(`https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json`);
    const data= await response.json();
    display(data);
    console.log(data);
}
getMenu();

function display(data){
     const main=document.getElementById("main");
     for(let i=0;i<3;i++){
        const card=document.createElement("div");
        card.id="card";
        card.innerHTML=`
        <div id="card-image">
        <img src=${data[i].imgSrc}>
        </div>
        <p>${data[i].name}
         <span><img src="./assets/images/plus.png "width="20px"></span>
        </p>
        <p>${`$`+data[i].price+"/-"}</p>
         `
        main.appendChild(card);
     }
}
