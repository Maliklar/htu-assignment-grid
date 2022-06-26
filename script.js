const gallery = document.querySelector(".gallery-view");



fetch("./assets/data.json")
    .then(res => res.json())
    .then(data => {
        console.log(data);

        data.forEach(element => {
            let component = document.createElement("div");
            component.setAttribute("class", "thumb-preview");

            let inner = null;
            if (element.type == "album") {
                inner = `
                <i class="fa fa-clone type" aria-hidden="true"></i>
                <img class="thumb-preview" src="./assets/${element.image}" />
                <div class="likes-container">
                    <i class="fa fa-heart likes" aria-hidden="true"> ${element.likes}</i>
                </div>`;
            } else if (element.type == "video") {
                inner = `
            <i class="fa fa-video type" aria-hidden="true"></i>
                <img class="thumb-preview" src="./assets/${element.image}" />
                <div class="likes-container">
                    <i class="fa fa-heart likes" aria-hidden="true"> ${element.likes}</i>
                </div>`;

            } else {
                inner = `
                <img class="thumb-preview" src="./assets/${element.image}" />
                <div class="likes-container">
                    <i class="fa fa-heart likes" aria-hidden="true"> ${element.likes}</i>
                </div>`;
            }


            component.innerHTML = inner;
            gallery.appendChild(component);

        });



    });