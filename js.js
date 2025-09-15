let mainSplitWord = "xdmh292";

let counter = 0;
let button = document.querySelector("#button");
let commentsContainer = document.querySelector("#comments");
let thewiner =getRandomInt(1,36352)

// fetch("comments.json").then((response) => response.json()).then((data) => {
//     allNames = data
//     for (let i = 0; i <= allNames.length; i++) {
//         console.log(i)
//         if (allNames[i].platform !== undefined) {
//             counter=counter+0.2;
//             commentsContainer.innerHTML += `
//         <div class="comment bg-gray-300/30 p-2 rounded-xl rounded-tl-none w-full"">
//             <p class="capitalize ">${allNames[i].platform }</p>
//             <p>${allNames[i].name}</p>
//         </div>`;
//
//             console.log(counter);
//         }
//     }
// }).catch((error) => {
//     console.log(error)})
button.addEventListener("click", function() {
    console.log(counter);
     thewiner =getRandomInt(1,36352)

    scrollToTheWiner(0,0)

})
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function scrollToTheWiner(scrollTop = 0 ,spin = 0) {
    console.log("scrollToTheWiner");
    if (scrollTop < 36352 && spin !== 3) {
        spin++;
        scrollTop = scrollTop + 1000
        commentsContainer.scroll({
            top: scrollTop,
            behavior: "smooth"
        })
        scrollToTheWiner(scrollTop , spin);
    }
    else if ( spin >= 3) {
        spin = 3
        if (thewiner > scrollTop){
            spin = 3
            scrollTop = scrollTop + 500
            commentsContainer.scroll({
                top: scrollTop,
                behavior: "smooth"
            })
            if (thewiner > scrollTop){
                scrollToTheWiner(scrollTop , spin);
            }
        }
        else if (thewiner < scrollTop){
            spin = 3
            scrollTop = scrollTop - 500
            commentsContainer.scroll({
                top: scrollTop,
                behavior: "smooth"
            })
            if (thewiner < scrollTop){
                scrollToTheWiner(scrollTop , spin);
            }
        }
    }

    cancelAnimationFrame(scrollToTheWiner);
}
