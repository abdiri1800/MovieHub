function callfetch() {
  fetch("https://api.tvmaze.com/shows")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)
      //  = movie;
      let movie = "";
      data.map((value, index) => {
        // style="width:15rem;"
        movie += `<div class="card bg-dark" style="border-top-left-radius:1rem;border-top-right-radius:1rem;"  >
            <img src="${value.image.medium}" style="border-top-left-radius:1rem;border-top-right-radius:1rem;" alt="sample">
            <div class="details">
                <p id="title" style="font-size: 0.8rem;">${value.name}</p>
                <p class="rating" style="font-size: 0.8rem;">Rating: ${value.rating.average}</p>
               <button style="margin-bottm:0px" class="button btn btn-danger"value=${value.id}  data-bs-toggle='modal' data-bs-target='#modal1'>View</button>
            </div>
        </div>`;
        // document.querySelector(`#button${index}`).addEventListener("click", () => {
        //     alert(value.name);
        //   });
      });

      document.querySelector(".cards").innerHTML = movie;
      const btns = document.querySelectorAll(".button");

      btns.forEach((btn) => {
        btn.addEventListener("click", function () {
          const id = btn.value;
          const infoURL = "https://api.tvmaze.com/shows/" + id + "?embed=cast";

          async function getShowInfo() {
            const showResponse = await fetch(infoURL);

            const showInfo = await showResponse.json();

            let modal = "";
            modal +=
              '<div class="modal-content text-bg-dark"><div class="modal-header"><img src="netflix2.png" alt="" style="height:2rem"><h1 class="modal-title fs-5" id="exampleModalLabel">' +
              showInfo.name +
              '</h1><button  type="button"  class="btn-close bg-light"  data-bs-dismiss="modal"  aria-label="Close"></button></div><div class="modal-body w-100"><div class="container row d-flex"><div class="h-50"><img class="" style="width:80%; height:20rem; background-size:cover; margin-left:5rem" src="' +
              showInfo.image.original +
              '" class="w-100"></div><div class="text-box col"><h2 class="mb-3 fs-1">' +
              showInfo.name +
              "</h2><p class='mb-3'>" +
              showInfo.summary +
              "</p><p class='mb-3 fs-4'><span class='fw-bold'>Genres: </span>" +
              showInfo.genres +
              "</p><p class='mb-3 fs-4'><span class='fw-bold'>Network: </span>" +
              showInfo.network.name +
              "</p><p class='mb-3 fs-4'><span class='fw-bold'>Status: </span>" +
              showInfo.status +
              "</p><p class='mb-3 fs-4'><span class='fw-bold'>Schedule: </span>" +
              showInfo.schedule.days +
              " - " +
              showInfo.schedule.time +
              "</p><p class='mb-3 fs-4'><span class='fw-bold'>Cast: </span>" +
              showInfo._embedded.cast.map((item) => item.person.name) +
              "</p></div></div></div></div>";

            document.getElementById("dialog").innerHTML = modal;
          }
          getShowInfo();
          // display();
        });
      });
    });
}
callfetch();
// const button = document.getElementById("button0");
// button.addEventListener("click", ()=>{
//     alert("clicked");
// })

// const image = document.addEventListener
// button.forEach((btns)=>{
//     btns.addEventListener("click", ()=>
//     {
//         alert("clicked")
//         const id = btns.data;
//         fetch("https://api.tvmaze.com/shows/1?embed=cast")
//         .then(res=>res.json())
//         .then((data) => {
//             console.log(data)
//             let modal="";
//             data.map((detail)=>{
//                 modal+=`<div class="modal modal-xl fade" id="modal1">
//                 <div class="modal-dialog">
//                     <div class="modal-content bg-dark">

//                         <div class="modal-header">
//                             <div class="modal-title" style="color: white;"><img src="netflix-favicon.png" alt="netflix" style="height: 2rem;"> movie1</div>
//                             <button type="button" class="btn-close bg-warning" data-bs-dismiss="modal" aria-label="Close"></button>

//                         </div>

//                         <div class="modal-body">
//                             <div>
//                                 <img src="dashboard.jpeg" alt="" style="width: 100%; height: 100%; border-radius: 1rem;">
//                             </div>

//                             <div>
//                                 <p>title</p>
//                                 <p>Genres</p>
//                             <p>Summary</p>
//                             <p>Rating</p>
//                             <p>status</p>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>`
//             })
//         })
//     })
// })
// console.log("data")
// const api = " https://api.tvmaze.com/shows";
// async function getMovies() {
//     const response = await fetch(api);
//     const data = await response.json();
//     console.log(data[0].id);
// }

// getMovies();
const mouse = document.getElementById("search5");
const input = document.getElementById("input");
mouse.addEventListener("click", (e) => {
  e.preventDefault();
  display();
  //   callfetch(getShowInfo());
  //   testDisplay();
});
function display() {
  console.log("test console");
  let movie2 = "";
  fetch("https://api.tvmaze.com/search/shows?q=" + input.value)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      data.forEach((values) => {
        movie2 += `<div class="card bg-dark"  style="border-top-left-radius:1rem;border-top-right-radius:1rem;" >
            <img  style="border-top-left-radius:1rem;border-top-right-radius:1rem;" src="${values.show.image?.medium}" alt="sample">
            <div class="details">
                <p id="title">${values.show.name}</p>
                <p class="rating">Rating: ${values.show.rating.average}</p>
                <div style="display:flex;"> <button class="button btn btn-danger"value="${values.show.id}"  data-bs-toggle="modal" data-bs-target="#modal1">View</button></div>
                </div>
        </div>`;
      });

      //   data.map((values) => {

      //   });
      //   getShowInfo();
      //   document.getElementById("dialog").innerHTML = modal;
      document.querySelector(".cards").innerHTML = movie2;
      const btns = document.querySelectorAll(".button");

      btns.forEach((btn) => {
        btn.addEventListener("click", function () {
          const id = btn.value;
          const infoURL = "https://api.tvmaze.com/shows/" + id + "?embed=cast";

          async function getShowInfo() {
            const showResponse = await fetch(infoURL);

            const showInfo = await showResponse.json();

            let modal = "";
            modal +=
              '<div class="modal-content text-bg-dark"><div class="modal-header"><img src="netflix2.png" alt="" style="height:2rem"><h1 class="modal-title fs-5" id="exampleModalLabel">' +
              showInfo.name +
              '</h1><button  type="button"  class="btn-close bg-light"  data-bs-dismiss="modal"  aria-label="Close"></button></div><div class="modal-body w-100"><div class="container row d-flex"><div class="h-50"><img class="" style="width:80%; height:20rem; background-size:cover; margin-left:5rem" src="' +
              showInfo.image.original +
              '" class="w-100"></div><div class="text-box col"><h2 class="mb-3 fs-1">' +
              showInfo.name +
              "</h2><p class='mb-3'>" +
              showInfo.summary +
              "</p><p class='mb-3 fs-4'><span class='fw-bold'>Genres: </span>" +
              showInfo.genres +
              "</p><p class='mb-3 fs-4'><span class='fw-bold'>Network: </span>" +
              showInfo.network.name +
              "</p><p class='mb-3 fs-4'><span class='fw-bold'>Status: </span>" +
              showInfo.status +
              "</p><p class='mb-3 fs-4'><span class='fw-bold'>Schedule: </span>" +
              showInfo.schedule.days +
              " - " +
              showInfo.schedule.time +
              "</p><p class='mb-3 fs-4'><span class='fw-bold'>Cast: </span>" +
              showInfo._embedded.cast.map((item) => item.person.name) +
              "</p></div></div></div></div>";

            document.getElementById("dialog").innerHTML = modal;
          }
          getShowInfo();
          // display();
        });
      });
      // let openbutton = document.querySelector(".button");
      // openbutton.addEventListener("click", getShowInfo());
      //   document.getElementById("dialog").innerHTML = modal;

      //   document.getElementById("dialog").innerHTML = modal;
    });
}

// display();

//   console.log(data);
//   console.log(data);
//   console.log(data);
//   text = mouse.charAt(0);
//   result = data.name.charAt(0);

//   let movie2 = "";

// console.log(value2);
// }
//   let movie2 = "";
// });
// }

// display();

// function testDisplay() {
//   movie2 = `<div class="card bg-dark">
//             <img src="movie image" alt="sample">
//             <div class="details">
//                 <p id="title">Arrow</p>
//                 <p class="rating">Rating: movie rating</p>
//                 <button class="button btn btn-danger"value=movie id data-bs-toggle='modal' data-bs-target='#modal1'>View</button>
//             </div>
//         </div>`;
//   document.querySelector("cards").innerHTML = movie2;
// }
// }
// callfetch();
const inputSearch = document.getElementById("input");
inputSearch.addEventListener("input", () => {
  if (inputSearch.value === "") {
    callfetch();
  } else {
    display();
  }
});
