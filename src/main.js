import data from "./data/userData";
import { setProfilePicture, createProfilePicture } from "./handleProfilePicture";
import { setSkills } from "./handleSkills";

const appElement = document.getElementById('app');

const cardContainerElement = document.createElement('div');
cardContainerElement.classList.add('card-container');

const cardElement = document.createElement('div');
cardElement.classList.add('card');
app.appendChild(cardContainerElement);
cardContainerElement.appendChild(cardElement);

const profilePictureElement = document.createElement('div');
profilePictureElement.classList.add('profile-picture')
cardElement.appendChild(profilePictureElement);

// verificar se o user tem foto de perfil
const { profile: { avatar, name, bio, location: { city, state} } } = data;
avatar ? setProfilePicture(avatar, profilePictureElement) : createProfilePicture(name, profilePictureElement);

const img = profilePictureElement.querySelector('img');
img.addEventListener("error", () => {
    profilePictureElement.removeChild(img);
    createProfilePicture(name, profilePictureElement)
});

const infosElement = document.createElement('div');
infosElement.classList.add('infos')
cardElement.appendChild(infosElement);

const nameElement = document.createElement('h1');
nameElement.innerText = name;
infosElement.appendChild(nameElement);

const bioElement = document.createElement('p');
bioElement.innerText = bio;
infosElement.appendChild(bioElement);

const skillsElement = document.createElement('div');
cardElement.appendChild(skillsElement);


const skills = data.skills;
setSkills(skills, skillsElement);

