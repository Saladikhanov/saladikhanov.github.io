const log = console.log;
let x = "hello world";
// log(x);
// https://github.com/saladikhanov.png
// https://api.github.com/user/
// https://avatars.githubusercontent.com/u/67337730?v=4
const gitHubPic = "https://api.github.com/users/saladikhanov";
fetch(gitHubPic)
  .then((response) => response.json())
  .then((data) => {
    setTimeout(() => {
      console.log(data.avatar_url);
      const gitAvatarHolder = document.getElementById("github-image-holder");
      const gitAvatar = document.createElement("img");
      gitAvatar.classList.add("github-image");
      gitAvatar.src = data.avatar_url;
      gitAvatarHolder.append(gitAvatar);
      log(gitAvatar);
    }, [0]);
  });
