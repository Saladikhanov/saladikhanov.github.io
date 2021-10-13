const gitHubPic = "https://api.github.com/users/saladikhanov";
fetch(gitHubPic)
  .then((response) => response.json())
  .then((data) => {
    setTimeout(() => {
      const gitAvatarHolder = document.getElementById("github-image-holder");
      const gitAvatar = document.createElement("img");
      gitAvatar.classList.add("github-image");
      gitAvatar.src = data.avatar_url;
      gitAvatarHolder.append(gitAvatar);
    }, [0]);
  });
