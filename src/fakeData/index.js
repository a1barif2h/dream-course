import webDev from "./webDev";
import graphicDesign from "./graphicDesign";
import animation from "./animation";

const fakeData = [...webDev, ...graphicDesign, ...animation];

const shuffle = (a) => {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
};

shuffle(fakeData);

export default fakeData;
