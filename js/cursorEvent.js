AFRAME.registerComponent('cursor-listener', {
    schema: {
        selectedItemId: {
            default: "",
            type: "string"
        }
    },

    init: function () {
        // Do something when component first attached.
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
    },

    handleComicListState: function () {
        const id = this.el.getAttribute("id")
        const comicId = ["spidey", "super", "duper", "poop"]
        if (comicId.includes(id)) {
            const comicContainer = document.querySelector("#poster-container")
            comicContainer.setAttribute("cursor-listener", {
                selectedItemId: id
            })
            this.el.setAttribute("material", {
                color: "blue",
                opacity: 1
            })
        }
    },

    handleMouseEnterEvents: function () {
        this.el.addEventListener("mouseenter", () => {
            this.handleComicListState()
        })
    },

    handleMouseLeaveEvents: function () {
        this.el.addEventListener("mouseleave", () => {
            const {
                selectedItemId
            } = this.data
            if (selectedItemId) {
                const el = document.querySelector(`#${selectedItemId}`)
                const id = el.getAttribute("id")

                if (id === selectedItemId) {
                    el.setAttribute("material", {
                        color: "#0077CC",
                        opacity: 1
                    })
                }
            }
        })
    },


    update: function () {
        // Do something when component's data is updated.
    },

    remove: function () {
        // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
        // Do something on every scene tick or frame.
    }
});