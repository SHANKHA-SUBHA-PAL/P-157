AFRAME.registerComponent('comic-poster', {
    schema: {

    },

    init: function () {
        // Do something when component first attached.
        this.comicsContainer = this.el;

        this.createCards();
    },

    createCards: function () {
        const thumbNailsRef = [
            {
                id: "spidey",
                title: "Spooder man",
                url: "assets\spooderman.jpg"
            },
            {
                id: "spidey",
                title: "Spooder man",
                url: "/assets/spooderman.jpg"
            },
            {
                id: "spidey",
                title: "Spooder man",
                url: "/assets/spooderman.jpg"
            },
            {
                id: "spidey",
                title: "Spooder man",
                url: "/assets/spooderman.jpg"
            },
        ];

        let previousXPosition = -62
        for (var item of thumbNailsRef) {
            const posX = previousXPosition + 25
            const posY = 5
            const posZ = 0
            const position = {
                x: posX,
                y: posY,
                z: posZ
            }
            previousXPosition = posX

            const borderEl = this.createBorder(position, item.id);

            // Thumbnail Element
            const thumbNail = this.createThumbNail(item);
            borderEl.appendChild(thumbNail);

            // Title Text Element
            const titleEl = this.createTitleEl(position, item);
            borderEl.appendChild(titleEl);

            this.comicsContainer.appendChild(titleEl);

        }
    },

    createBorder: function (position, id) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("id", id);
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
            primitive: "ring",
            radiusInner: 9,
            radiusOuter: 10,
        });
        entityEl.setAttribute("position", position);
        entityEl.setAttribute("material", {
            color: "#0077CC",
            opacity: 1,
        });

        return entityEl;
    },

    createThumbNail: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
            primitive: "cicle",
            radius:50
        });

        entityEl.setAttribute("material", {src: item.url});

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
        entityEl.setAttribute("position", elPosition);
        entityEl.setAttribute("visible", true);
        return entityEl;
    },
});