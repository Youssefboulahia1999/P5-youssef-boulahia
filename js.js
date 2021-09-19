 const urlCameras ="http://localhost:3000/api/cameras"

 dataApi = fetch("http://localhost:3000/api/cameras");

 dataApi
     .then(async (responseData) => {
        console.table(responseData);

        cameras = await responseData.json();
        console.table(cameras);
       // document.getElementById("main").innerHTML = "ok" 

     //  creeDiv(response[0])
     creePlusieurDiv(cameras)
        try {

        } catch (err) {
            console.log(err);
        }

    });

function creePlusieurDiv(cameras) {
for (let i = 0; i < cameras.length; i++)
creeDiv(cameras[i])
}

function creeDiv(data) {
    document.getElementById("main").innerHTML +=
    `
    <div class="tete">
    <a class="clik" href = "article/article.html?id=${data._id}" >
    <img src="${data.imageUrl}">
    <div class="text">
    <h2>${data.name}<h2>
    <p>${data.price /100}€<p>
    </div>
    </a>
    </div>`
    }













