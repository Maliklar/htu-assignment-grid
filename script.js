const gallery = document.querySelector(".gallery-view");

// Reading data from assets/data.json file
fetch("./assets/data.json")
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            // creating the component
            const component = document.createElement("div");
            component.setAttribute("class", "thumb-preview");

            let inner = "";
            if (element.type == "album") {
                inner = `<i class="fa fa-clone type" aria-hidden="true"></i>`;
            } else if (element.type == "video") {
                inner = `<i class="fa fa-video type" aria-hidden="true"></i>`;
            }
            inner += `
                <img class="thumb-preview" src="./assets/${element.image}" />
                <div class="likes-container">
                    <pre><i class="fa fa-heart likes" aria-hidden="true"> ${element.likes}</i> | <i class="fa fa-comment comments" aria-hidden="true"> ${element.comments}</i></pre>
                </div>`;

            component.innerHTML = inner;
            gallery.appendChild(component);
        });
    });