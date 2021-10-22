// <<<<<<<<<_________________MODAL WINDOW-------------------->>>>>>>
const $ = {};
function _createModal(options) {
  const modal = document.createElement("div");
  modal.classList.add("amodal");

  modal.insertAdjacentHTML(
    "afterbegin",
    `<div class="modal-overlay">
          <div class="modal-window">
            <div class="modal-header">
            
              <div class="modal-title">Upcoming meetings</div>
              <div id="close" class="modal-close">&times;</div>
            </div>
            <div class="modal-wrapper-flex">
              <div class="modal-calendar" id="color-calendar"></div>
              <div id="calendarResults" class="modal-body">
            </div>
            </div>
            <div class="modal-footer">
              
            </div>
              <!-- <div class="calendar" id="color-calendar"></div> -->
            </div>
          </div>
        </div>`
  );
  document.body.appendChild(modal);
  return modal;
}
$.modal = function (options) {
  const animationSpeed = 200;
  const $modal = _createModal(options);
  return {
    open() {
      $modal.classList.remove("hide");
      $modal.classList.add("open");
    },
    close() {
      $modal.classList.remove("open");
      $modal.classList.add("hide");
      setTimeout(() => {
        $modal.classList.add("hide");
      }, animationSpeed);
    },
    destroy() {},
  };
};
const modal = $.modal();
const button = document.getElementById("myModal");
button.addEventListener("click", modal.open);

const close = document.getElementById("close");
close.addEventListener("click", modal.close);
// <<<<<<<<-----------------------------------------------_>>>>>>>>>>>>>>>>

let userObject = [];
const users = {};
const submit = document.getElementById("submit");
const calendarWrapper = document.getElementById("calendarResults");

submit.addEventListener("click", function () {
  if (
    document.getElementById("nameInput").value.length == 0 ||
    document.getElementById("surnameInput").value.length == 0 ||
    document.getElementById("emailInput").value.length == 0 ||
    document.getElementById("numberInput").value.length == 0 ||
    document.getElementById("dateInput").value.length == 0 ||
    document.getElementById("commentsInput").value.length == 0
  ) {
    alert("Fill all fields, Please");
  } else {
    const userName = document.getElementById("nameInput").value;
    const userSurname = document.getElementById("surnameInput").value;
    const userEmail = document.getElementById("emailInput").value;
    const userNumber = document.getElementById("numberInput").value;
    const userDate = document.getElementById("dateInput").value;
    const userComments = document.getElementById("commentsInput").value;
    let ID = "id" + new Date().getTime();

    userObject.push({
      key: ID,
      user: userName,
      userSurname: userSurname,
      userEmail: userEmail,
      userNumber: userNumber,
      userDate: userDate,
      userComments: userComments,
      //////connecting calendar////////
      start: userDate,
      end: userDate,
    });
    new Calendar({
      id: "#color-calendar",
      eventsData: userObject,
      startWeekday: 0,
      fontFamilyHeader: "Oswald",
      fontFamilyWeekdays: "Oswald",
      fontFamilyBody: "Oswald",
    });
    console.log(userObject);

    while (calendarWrapper.firstChild) {
      calendarWrapper.removeChild(calendarWrapper.firstChild);
    }

    for (let i = 0; i < userObject.length; i++) {
      const eachUserWrapper = document.createElement("div");
      eachUserWrapper.classList.add("each-user-wrapper");

      const eventName = document.createElement("div");
      eventName.textContent = userObject[i]["user"];
      eventName.classList.add("event");

      const eventSur = document.createElement("div");
      eventSur.textContent = userObject[i]["userSurname"];
      eventSur.classList.add("event");

      const eventEmail = document.createElement("div");
      eventEmail.textContent = userObject[i]["userEmail"];
      eventEmail.classList.add("event");

      const eventNumber = document.createElement("div");
      eventNumber.textContent = userObject[i]["userNumber"];
      eventNumber.classList.add("event");

      const eventDate = document.createElement("div");
      eventDate.textContent = userObject[i]["userDate"];
      eventDate.classList.add("event");

      const eventComments = document.createElement("div");
      eventComments.textContent = userObject[i]["userComments"];
      eventComments.classList.add("event");

      eachUserWrapper.append(
        eventName,
        eventSur,
        eventEmail,
        eventNumber,
        eventDate,
        eventComments
      );
      calendarWrapper.append(eachUserWrapper);
    }

    document.querySelector("form").reset();
  }
});
