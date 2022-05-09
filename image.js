export class Image{

    constructor(name, author, price, src) {
        this.name = name;
        this.author = author;
        this.src = src;
        this.price = price;

        this.container = null;
    }

    drawFrame(host) {

        if (!host)
            throw new Error("Host is not defined");
        
        this.container = document.createElement("div");
        this.container.className = "frame";
        host.appendChild(this.container);

        const image = document.createElement("img");
        image.src = this.src;
        this.container.appendChild(image);

        const infoDiv = document.createElement("div");
        infoDiv.className = "infoDiv";
        this.container.appendChild(infoDiv);

        let informations = [this.name, this.author, `${this.price}EUR`];
        let label = null;

        informations.forEach((info) => {
            label = document.createElement("label");
            label.innerHTML = info;

            infoDiv.appendChild(label);
        })
    }
}