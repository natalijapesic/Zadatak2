import { Image } from "./image.js";
import { Museum } from "./museum.js";

const museum = new Museum("Prado", 4);

const slika1 = new Image("Slika1", "Dave Kinsey", 2000, "./src/davekinsey_2.jpg");
console.log(slika1);

museum.addIntoArray1(new Image("Slika1", "Dave Kinsey", 2000, "./src/davekinsey_2.jpg"));
museum.addIntoArray1(new Image("Slika2", "Moebius", 4000, "./src/Moebius1.jpg"));
museum.addIntoArray1(new Image("Slika3", "Pablo Picasso", 5000, "./src/the_bull.jpg"));
museum.addIntoArray1(new Image("Slika4", "Jackson Pollock", 7000, "./src/CH-Pollock.jpg"));

museum.addIntoArray2(new Image("Slika1", "Dave Kinsey", 2000, "./src/davekinsey.jpg"));
museum.addIntoArray2(new Image("Slika2", "Moebius", 4000, "./src/Moebius2.jpg"));
museum.addIntoArray2(new Image("Slika4", "Jackson Pollock", 7000, "./src/jacksonPollock.jpg"));

museum.draw(document.body);
