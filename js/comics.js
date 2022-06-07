AFRAME.registerComponent('comic-poster', {
    schema: {

    },

    init: function () {
        // Do something when component first attached.
        this.comicsContainer = this.el;

        this.createCards();
    },

    createCards: function () {
        const thumbNailsRef = [{
                id: "spidey",
                title: "Spooder man",
                url: "assets/spooderman.jpg"
            },
            {
                id: "super",
                title: "Spooder man",
                url: "/assets/spooderman.jpg"
            },
            {
                id: "duper",
                title: "Spooder man",
                url: "/assets/spooderman.jpg"
            },
            {
                id: "poop",
                title: "Spooder man",
                url: "/assets/spooderman.jpg"
            },
        ];

        let previousXPosition = -38
        for (var item of thumbNailsRef) {
            const posX = previousXPosition + 15
            const posY = 10
            const posZ = -10
            const position = {
                x: posX,
                y: posY,
                z: posZ
            }
            previousXPosition = posX

            const borderEl = this.createBorder(position, item.id);

            // Thumbnail Element
            const thumbNail = this.createThumbNail(position, item);
            borderEl.appendChild(thumbNail);

            // Title Text Element
            const titleEl = this.createTitleEl(position, item);
            borderEl.appendChild(titleEl);

            this.comicsContainer.appendChild(borderEl);

        }
    },
    //I dont know how to position the image and text so used createBorder as a kind of cheat code
    createBorder: function (position, id) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("id", id);
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("position", position);
        entityEl.setAttribute("material", {
            color: "#0077CC",
            opacity: 1,
        });

        return entityEl;
    },

    createThumbNail: function (position, item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
            primitive: "plane",
            width: 20,
            height: 28
        });
        entityEl.setAttribute("position", position);
        entityEl.setAttribute("material", {
            src: item.url
        });

        return entityEl;
    },


    createTitleEl: function (position, item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("text", {
            font: "exo2bold",
            align: "center",
            width: 90,
            color: "#e65100",
            value: item.title,

        });
        const elPosition = position;
        elPosition.y = -5;
        entityEl.setAttribute("position", elPosition);
        entityEl.setAttribute("visible", true);
        return entityEl;
    },
});