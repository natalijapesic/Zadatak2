export class Museum {

    constructor(name, numberOfColumns) {

        this.name = name;
        this.numberOfColumns = numberOfColumns;

        this.container = null;

        this.images1 = [];
        this.images2 = [];
        this.columns = [];
    }

    addIntoArray1(image) {
        this.images1.push(image);
    }

    addIntoArray2(image) {
        this.images2.push(image);
    }

    async draw(host) {

        if (!host)
            throw new Error("Host is not defined");

        this.container = document.createElement("div");
        this.container.className = `museum ${this.name}`;
        host.appendChild(this.container);

        let div = null;

        for (let i = 0; i < this.numberOfColumns; i++) {

            div = document.createElement("div");
            div.className = "column";

            this.columns.push(div);
            this.container.appendChild(div);
        }

        while(true)
        {
            this.showImages(this.images2);

            await this.sleep(5000);
    
            this.showImages(this.images1);
    
            await this.sleep(5000);
        }
    }


    showImages(images) {

        let columns = Array.from(this.container.children);

        columns.forEach((column) => {
            column.innerHTML = "";
        });

        images.forEach((image, index) => {
            console.log(columns[index % 4]);
            image.drawFrame(columns[index % 4]);
        });

    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}