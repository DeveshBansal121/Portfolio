const skills = [
  "Java",
  "C",
  "C++",
  "Python",
  "Data Structures"
];

const skillsList = document.getElementById("skills-list");

skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});