fetch("https://fakestoreapi.com/products")
.then(data=>{
    console.log(data)
   return data.json()
}).then(formatedData =>{
    let data1=""
    formatedData.map(eachData=>{
        data1 += `  <div class="card">
        <h1 class="title">${eachData.title}</h1>
        <img src=${eachData.image} alt="image" class="images">
        <p>${eachData.description}</p>
        <p class="category">${eachData.category}</p>
        <p class="price">${eachData.price}</p>
    </div>`
    });
    document.getElementById("cards").innerHTML = data1

}).catch(error=>{
    console.error(error)
})