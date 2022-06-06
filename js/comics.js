AFRAME.registerComponent('comic-poster', {
    schema: {

    },

    init: function () {
        // Do something when component first attached.
        this.comicsContainer = this.el;

        this.createCards();
    },

    update: function () {
        // Do something when component's data is updated.
    },

    remove: function () {
        // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
        // Do something on every scene tick or frame.
    },
    createCards: function () {
        const thumbNailsRef = [{
                id: "spidey",
                title: "Spooder man",
                url: "assets\download.jfif"
            },
            {
                id: "spidey",
                title: "Spooder man",
                url: "assets\download.jfif"
            },
            {
                id: "spidey",
                title: "Spooder man",
                url: "assets\download.jfif"
            },
            {
                id: "spidey",
                title: "Spooder man",
                url: "assets\download.jfif"
            },
        ];

        let previousXPosition = -60
        for (var item of thumbNailsRef) {
            const posX = previousXPosition + 25
            const posY = 10
            const posZ = -40
            const position = {
                x: posX,
                y: posY,
                z: posZ
            }
            previousXPosition = posX


            // Thumbnail Element
            const thumbNail = this.createThumbNail(item);
            borderEl.appendChild(thumbNail);

            // Title Text Element
            const titleEl = this.createTitleEl(position, item);
            borderEl.appendChild(titleEl);

            this.comicsContainer.appendChild(borderEl);

        }
    },

    createThumbNail: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
            primitive: "plane",
            width: 20,
            height: 28
        });

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
            width: 70,
            color: "#e65100",
            value: item.title,
        });
        const elPosition = position;
        elPosition.y = -20;
        entityEl.setAttribute("position", elPosition);
        entityEl.setAttribute("visible", true);
        return entityEl;
    },
});