
//fetching data of smartphones

fetch("https://dummyjson.com/products/category/smartphones")
.then(response=>response.json())
.then((data)=>{
    let arr = data.products;

    //card1

    let img1  = document.querySelector(".img1")
    img1.src= arr[0].images[0]

    let txt1 =  document.querySelector(".txt1")
    let txt2 =  document.querySelector(".txt2")
    let txt3 =  document.querySelector(".txt3")
    let txt4 =  document.querySelector(".txt4")
    let txt5 =  document.querySelector(".txt5")

    txt1.innerHTML=`title :${arr[0].title}`
    txt2.innerHTML=`price :${arr[0].price}`
    txt3.innerHTML=`stock :${arr[0].stock}`
    txt4.innerHTML=`brand :${arr[0].brand}`
    txt5.innerHTML=`id :${arr[0].id}`

//card2

    let img2  = document.querySelector(".img2")
    img2.src= arr[1].images[0]

    let text1 =  document.querySelector(".text1")
    let text2 =  document.querySelector(".text2")
    let text3 =  document.querySelector(".text3")
    let text4 =  document.querySelector(".text4")
    let text5 =  document.querySelector(".text5")

    text1.innerHTML=`title :${arr[1].title}`
    text2.innerHTML=`price :${arr[1].price}`
    text3.innerHTML=`stock :${arr[1].stock}`
    text4.innerHTML=`brand :${arr[1].brand}`
    text5.innerHTML=`id :${arr[1].id}`

    //card 3

    let img3  = document.querySelector(".img3")
    img3.src= arr[2].images[0]

    let xt1 =  document.querySelector(".xt1")
    let xt2 =  document.querySelector(".xt2")
    let xt3 =  document.querySelector(".xt3")
    let xt4 =  document.querySelector(".xt4")
    let xt5 =  document.querySelector(".xt5")

    xt1.innerHTML=`title :${arr[2].title}`
    xt2.innerHTML=`price :${arr[2].price}`
    xt3.innerHTML=`stock :${arr[2].stock}`
    xt4.innerHTML=`brand :${arr[2].brand}`
    xt5.innerHTML=`id :${arr[2].id}`

    //card 4
    let img4  = document.querySelector(".img4")
    img4.src= arr[3].images[0]

    let t1 =  document.querySelector(".t1")
    let t2 =  document.querySelector(".t2")
    let t3 =  document.querySelector(".t3")
    let t4 =  document.querySelector(".t4")
    let t5 =  document.querySelector(".t5")

    t1.innerHTML=`title :${arr[3].title}`
    t2.innerHTML=`price :${arr[3].price}`
    t3.innerHTML=`stock :${arr[3].stock}`
    t4.innerHTML=`brand :${arr[3].brand}`
    t5.innerHTML=`id :${arr[3].id}`
    
    //card 5
    let img5  = document.querySelector(".img5")
    img5.src= arr[4].images[0]

    let te1 =  document.querySelector(".te1")
    let te2 =  document.querySelector(".te2")
    let te3 =  document.querySelector(".te3")
    let te4 =  document.querySelector(".te4")
    let te5 =  document.querySelector(".te5")

    te1.innerHTML=`title :${arr[4].title}`
    te2.innerHTML=`price :${arr[4].price}`
    te3.innerHTML=`stock :${arr[4].stock}`
    te4.innerHTML=`brand :${arr[4].brand}`
    te5.innerHTML=`id :${arr[4].id}`

})