import { getStoredData } from "../api/index.js";
import { createEl, getId } from "../utils/index.js";

// Function to build the user page with the user's information from the stored data
// The user's information is displayed in the user-info section
const user = () => {
  const storedData = getStoredData();
  const profile = getId("profile");
  const user = storedData[1].results[0];
  const { name, picture } = user;
  const img = new Image();

  profile.innerText = `Hi, ${name.first}`;

  img.src = picture.medium;
  img.alt = name;
  profile.appendChild(img);
  const userIMG = new Image();
  userIMG.src = picture.large;
  userIMG.alt = name;

  const userInfo = getId("user-info");
  const userName = createEl("p", "user__name");
  userName.setAttribute("id", "username");
  const userEmail = createEl("p", "user__email");
  userEmail.setAttribute("id", "email");

  userName.innerText = `Username: ${name.first} ${name.last}`;
  userEmail.innerText = `Email: ${user.email}`;
  userInfo.appendChild(userIMG);
  userInfo.appendChild(userName);
  userInfo.appendChild(userEmail);
};

export { user };
