const body = document.body
const con = document.createElement('div');
con.classList.add("container", "background");
const row = document.createElement('div');
row.classList.add("row", "mt-3");
con.append(row);

const wapi = "https://restcountries.com/v2/all";

fetch(wapi)
    .then((res) => {
        if (res.status === 200)
            return res.json();
        else throw new Error("something error occured")

    }).then(function(data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            row.innerHTML += `  
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="text-center card">
              <div class="card-header">${data[i].name}</div>
              <img src="${data[i].flag}" class="img-fluid mx-auto d-block card-image-top" style="width: 50%;
              height: 100px;">
                <div class="card-body">
                  <h5 class="card-title">Capital:${data[i].capital}</h5>
                  <h5 class="card-title">Region:${data[i].region}</h5>
                  <h5 class="card-title">country code:${data[i].alpha3Code}</h5>
                  <button type="button" class="btn btn-primary">clickforweather("${data[i].capital}")</button>
                </div> 
                </div>
                </div>
         

            document.body.append(con);
        };
    }).catch(function(err) {
        console.log(err.message);
    });












