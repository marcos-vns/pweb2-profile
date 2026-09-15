export function setProfilePicture(avatar, profilePictureElement){
    const img = document.createElement('img');
    img.src = avatar;
    img.classList.add('picture');

    profilePictureElement.appendChild(img);
}

export function createProfilePicture(name, profilePictureElement){
    const nameParts = name.split(' ').slice(0, 2);
    const initials = nameParts.map((x) => x[0]);
    const initialsText = initials[0] + initials[1];
    const initialsProfile = document.createElement('span');
    initialsProfile.innerText = initialsText;

    // todo: add dots after each initial
    profilePictureElement.appendChild(initialsProfile);
}