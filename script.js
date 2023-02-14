
//fetching data 

fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then((data) => {
        let arr = data.products;

        let container = document.querySelector(".container");

        arr.map((e) => {

        container.innerHTML +=

                `
        
        <div class="card mb-3 col-4 bg-body-secondary" style="width:18rem;">
  <img src="${e.images[0]}" class="card-img-top img-fluid">
  <div class="card-body ">
  <h5 id="one">${e.title}</h3>
  <p class="card-text">Brand: ${e.brand}</p>
  <p class="card-text">Stock: ${e.stock}</p>
  <p class="card-text">id: ${e.id}</p>
    <p class="card-text">Discount: ${e.discountPercentage}</p>
    <p class="card-text">Price: ${e.price}</p>
  </div>
</div>

           `

        })

    });
