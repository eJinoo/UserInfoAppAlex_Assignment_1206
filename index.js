
const API_URL = "https://reqres.in/api/users";

let userInfoData = [];
const userContainer = document.getElementById("user-container");

// STUFF FOR OLD BUTTON
// const detailButton = document.querySelector(".btn.btn-primary");


async function getUserInfo() {
  try {
    const data = await fetch(API_URL);
    const dataInJson = await data.json();
    userInfoData = dataInJson.data;
    generateAllCards(userInfoData)
  } catch (error) {
    console.log("There was an error", error);
    userInfoData = [];
  }
}

function createCardUI(user) {
    let cardUI = `
      <div class="card m-4" style="width: 18rem;">
        <img src=${user.avatar} class="card-img-top" alt="...">
        <div class="card-body">
          <h1>${user.first_name} ${user.last_name}</h1>
          <p class="card-text">${user.email}</p>
          <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter${user.id}">
            More User Info
        </button>

                <!-- Modal -->
                <div class="modal fade" id="exampleModalCenter${user.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">${user.first_name} ${user.last_name}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        PERSONAL TEXT FOR EACH PERSON GOES HERE BUT IDK IF I WAS SUPPOSED TO ADD TO THE JSON FILE 
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
             
        </div>
      </div>
    `;
  
    userContainer.innerHTML += cardUI;
  }

function generateAllCards(userData = []) {
    for(let i = 0 ; i < userData.length; i++) {
        createCardUI(userData[i]);
    }
}

getUserInfo();


// function buttonClick(){
//     document.getElementById("user-clicked-info").innerHTML = `${user.id}`
// }

// STUFF FOR OLD BUTTON THAT I WAS TRYING
// detailButton.addEventListener('click', buttonClick);

