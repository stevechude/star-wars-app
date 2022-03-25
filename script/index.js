//window.addEventListener("load", main);
function main() {
    fetch("https://swapi.dev/api/people")
    .then (res => {
        if(!res.ok) {
            throw Error("Error")
        }
        return res.json();
    })
    .then(data => {
        let arr = data.results;
        //console.log(arr);

        let pictures = ["/images/luke.jpeg","/images/C-3PO.jpeg",
"/images/r2-d2.jpeg","/images/R5-D4.jpeg","/images/Darth-Vader-Mask-Star-Wars-Artwork-Wallpaper.jpeg","/images/biggs-darklighter.jpeg",
"/images/beru-lars.jpeg","/images/leia-organa.jpeg","/images/owen-lars.jpeg","/images/obi-wan.jpeg"];
let final = arr.map((info,index) => {
    let id = index + 1;
    return `<div id="#${id}" class="card">
            <img src=${pictures[index]} alt="${info.name}">
            <div class="details">
            <p>${info.name}</p>
            <button id="cool" data-modal-target="#modal${id}">Click</button>
            </div>
            </div>

            <div class="layout" id="modal${id}">
    <div class="modal-head">
        <div class="title">Info</div>
        <button data-close-button class="close-button">&times;</button>
        <div>
            <div class="modal-body">
                <div>Name: ${info.name}</div>
                <div>Gender: ${info.gender}</div>
                <div>Height: ${info.height}</div>
            </div>
        </div>
    </div>
</div>
           `; 
        }).join("");
    document.querySelector(".content").innerHTML = final;

    const open = document.querySelectorAll("[data-modal-target]")
        const close = document.querySelectorAll(".close-button")
        const modal_container = document.querySelectorAll(".layout")


        open.forEach((button, index) => {
            button.addEventListener("click", () => {
            modal_container[index].classList.add("show");
            });
        })

        close.forEach((button, index) => {
            button.addEventListener("click", () => {
            modal_container[index].classList.remove("show");
            });
        })

})
.catch(error => {
    console.warn(error)
})
}
main();



 