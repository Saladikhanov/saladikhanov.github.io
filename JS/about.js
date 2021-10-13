// maps and buttons----------------///////////////////
const fevralsk =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38906.33910606665!2d130.82959968148998!3d52.44932364018852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5e9134ac81c9bb11%3A0x2402a309d816703b!2sFevralsk%2C%20Amur%20Oblast%2C%20Russia!5e0!3m2!1sen!2sil!4v1634048475073!5m2!1sen!2sil";
const novomoskovsk =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42184.36578990015!2d35.19049354890799!3d48.638111910885776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d944c478db1555%3A0xf157d6556fed8f94!2sNovomoskovs&#39;k%2C%20Dnipropetrovsk%20Oblast%2C%20Ukraine%2C%2051209!5e0!3m2!1sen!2sil!4v1634055959361!5m2!1sen!2sil";
const dnipro =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169324.28019906426!2d34.86027313074193!3d48.462441175117114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe303fd08468f%3A0xa1cf3d5f2c11aba!2sDnipro%2C%20Dnipropetrovsk%20Oblast%2C%20Ukraine%2C%2049000!5e0!3m2!1sen!2sil!4v1634056273133!5m2!1sen!2sil";
const hamburg =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d303353.65349286445!2d9.647643032146384!3d53.558652557459205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b161837e1813b9%3A0x4263df27bd63aa0!2sHamburg%2C%20Germany!5e0!3m2!1sen!2sil!4v1634048432445!5m2!1sen!2sil";
const rishon =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54151.566142559306!2d34.743367333165224!3d31.9751940020366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b43827ab66ff%3A0x17bcc54a571a7ab8!2sRishon%20LeTsiyon!5e0!3m2!1sen!2sil!4v1634048180639!5m2!1sen!2sil";

let googleMaps = [fevralsk, dnipro, hamburg, rishon];

let i = 0;
let map = document.getElementById("map");
map.src = googleMaps[i];

const nextCity = () => {
  i = i + 1; // increase i by one

  return i;
};
const prevCity = () => {
  i = i - 1; // decrease by one
  return i;
};

const prevButton = document.getElementById("prev_button");
const nextButton = document.getElementById("next_button");
prevButton.disabled = true;

document.getElementById("prev_button").addEventListener(
  "click", // we want to listen for a click
  function (e) {
    // the e here is the event itself
    document.getElementById("map").src = googleMaps[prevCity()];

    if (i == 0) {
      prevButton.disabled = true;
    }
    if (i != 3) {
      nextButton.disabled = false;
    }
  }
);

document.getElementById("next_button").addEventListener(
  "click", // we want to listen for a click
  function (e) {
    // the e here is the event itself
    document.getElementById("map").src = googleMaps[nextCity()];

    if (i != 0) {
      prevButton.disabled = false;
    }
    if (i == 3) {
      nextButton.disabled = true;
    }
  }
);
