// loadData from api
const dataLoad = async (searchText, isShowAll) =>{
    console.log(isShowAll);
    // console.log(searchText)
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const allData = data.data;
    // console.log(allData);
    showDisplay(allData, isShowAll);
}


// show data display 

const showDisplay = (allData, isShowAll) => {
    console.log(allData)
    // console.log(!isShowAll)

    
    //  phone container
    const phoneContainer = document.getElementById("phone-container");
    console.log(phoneContainer)

    phoneContainer.textContent = "";
// show all btn 
    const showAllBtn = document.getElementById("show-all-btn");
    console.log(showAllBtn)
    if(allData.length > 6 && !isShowAll){
        showAllBtn.classList.remove("hidden");
    }else{
        showAllBtn.classList.add("hidden");
    }

// card slice()
    if(!isShowAll){
        allData = allData.slice(0,6);
    }




    allData.forEach(data => {

        // console.log(data)
        const cardContainer = document.createElement("div");
        cardContainer.classList =  `card bg-base-100  shadow-xl`;
        cardContainer.innerHTML = `
         <figure class="px-10 pt-10">
              <img
                src="${data.image}"
                alt="Shoes"
                class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">${data.phone_name}</h2>
              <p>${data.slug}</p>
              <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
        `;
        phoneContainer.appendChild(cardContainer);
        // console.log(cardContainer);


    });

    toggleSpinner(false);
}


// search handle 

const searchHandle = (isShowAll) =>{
    toggleSpinner (true);
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    console.log(searchText)
    dataLoad(searchText, isShowAll);
}




// handle show all 
const handleShowAll = () =>{
    searchHandle(true);
}



// toggle spinner 

const toggleSpinner = (isLoading) =>{
    const spinContainer = document.getElementById("spinner");
    console.log(spinContainer)
    if(isLoading){
        spinContainer.classList.remove("hidden");
    }else{
        spinContainer.classList.add("hidden");
    }
}
// searchHandle()
dataLoad("samsung");





