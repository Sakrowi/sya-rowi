const navbar=[
    {
        name:"HOME",
        url :"",
    },
    {
        name:"AWAY",
        url :"",
    },
    {
        name:"THIRD",
        url :"",
    },
    {
        name:"GOALKEEPER",
        url :"",
    },
    {
        name:"OTHERS",
        url :"",
    }
];
var text = "";
for(let i in navbar){
    text +=`
        <li class="nav-item text-light">
              <a class="nav-link active" aria-current="page" href="${navbar[i]["url"]}">
              ${navbar[i]["name"]}</a>
        </li>
    `;
    document.getElementsByClassName("navbar")[0].innerHTML=text;
}

const content=[
    {
        img:"image/cr7bi",
        name:"Real Madrid third kit 2017-18 Bicycle Ronaldo",
        price:"$200.00",
    },
    {
        img:"image/benzema",
        name:"Real Madrid home kit 2021-22 Benzema version Ramadan",
        price:"$190.00",
    },
    {
        img:"image/gk man u",
        name:"Manchester United GK third kit 2021-22 Spiderman De Gea",
        price:"$190.00",
    },
    {
        img:"image/bayern",
        name:"Bayern Munich third kit 2022-2023",
        price:"$190.00",
    },
    {
        img:"image/alnassr",
        name:"Al-Nassr home kit 2023-2024",
        price:"$190.00",
    },
    {
        img:"image/england",
        name:"England Home kit 2022-24 Harry Maguire",
        price:"$190.00",
    },
    {
        img:"image/RM away kit 23-24.jpg",
        name:"Real Madrid third jersey 2023-2024",
        price:"$190.00",
    },
    {
        img:"image/france",
        name:"France Home kit 2022-24",
        price:"$190.00",
    }
];
var contents ="";
for(let i in content){
    contents +=`
        <div class="col-3">
            <div class="product-box">
                <img src="${content[i]["img"]}" alt="" class="product-image">
                <h2 class="product-title">${content[i]["name"]}</h2>
                <span class="price">${content[i]["price"]}</span>
                <i class="fa-solid fa-bag-shopping add-card"></i>
            </div>
        </div>
    `;
    document.getElementsByClassName("row")[0].innerHTML=contents;
}
var jersey =document.getElementById("jer");
var training =document.getElementById("train");
var home =document.getElementById("home");
var away =document.getElementById("away");
var third =document.getElementById("third");
var goalkeeper =document.getElementById("gk");
var boot =document.getElementById("boot");
var glove =document.getElementById("glove");
var ball =document.getElementById("ball");
var other =document.getElementById("other");
