    //   load baguette box
    window.addEventListener('load', function() {
        baguetteBox.run('.galleryContainer', {
         // baguette box Custom options
         // https://github.com/feimosi/baguetteBox.js/#customization
         buttons:true,
         noScrollbars: true,
         }); 
     }); 


// ====================================================================
// This function listens for a "keyup" event on the search box and then
// filters the images via the caption (data-caption
// ====================================================================

document.querySelector("#search").addEventListener("keyup", function () {
    // set local variables
    let searchInput = "";
    let searchInputLower = "";

    // Gets the search input 
    searchInput = document.querySelector("#search");
    // Makes the input lower case
    searchInputLower = searchInput.value.toLowerCase();    
    // store each gallery item
    const galleryItems = document.querySelectorAll(".gallery a");
    // loops through all of the gallery items
    for (let i = 0; i < galleryItems.length; i++){
    //  get the value from the data-title for each iteration throught he loop
     const caption = galleryItems[i].getAttribute("data-caption").toLowerCase();
     // if the caption includes the text typed into the search box the image will display, else it will not.
        if (caption.includes(searchInputLower)) {
            galleryItems[i].style.display = "block";

        } else {
            galleryItems[i].style.display = "none";
        }
        }
});

