AFRAME.registerComponent('comic-poster', {
    schema: {
        state: {
            type: "string",
            default: "comics-list"
        },
        selectedCard: {
            type: "string",
            default: "#card1"
        }
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
                title: "New York City",
                url: "/assets/spooderman.jpg"
            },
        ];

        let previousXPosition = -60
        for (var item of thumbNailsRef) {
            const posX = previousXPosition + 25
            const posY = 20
            const posZ = -10
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

        
            this.comicsContainer.appendChild(borderEl);

        }
    },

    createBorder: function (position, id) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("id", id);
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
            primitive: "ring",
            radiusInner: 10,
            radiusOuter: 11,
        });
        entityEl.setAttribute("position", position);
        entityEl.setAttribute("material", {
            color: "#0077CC",
            opacity: 1,
        });

        entityEl.setAttribute("cursor-listener", {})
        return entityEl;
    },

    createThumbNail: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
            primitive: "circle",
            radius: 10
        });
        entityEl.setAttribute("material", {
            src: item.url
        });

        return entityEl;
    },


 
});