let url = "course.json";
fetch(url).then((data) => {
  // console.log(data); // json format
  return data.json(); // converted into object
}).then((objectData) => {
  console.log(objectData);
  let tableData = "";
  objectData.map((values) => {
    tableData += `<div class="col-12 col-md-6 col-lg-4">
                    <div class="card">
                    <a href="#">
                      <img src="${values.image}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h1 class="card-title">${values.title}</h1>
                        <h5 class="card-text">${values.tagLine}</h5>
                        <a class="btn btn-primary text-white" href="${values.url}" target="_blank" role="button">Learn ${values.title}</a>
                      </div>
                    </a>
                  </div>
                </div>`;
  });
  document.getElementById("list").innerHTML = tableData;
}).catch((err) => {
  console.log(err);
})