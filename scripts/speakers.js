const speakers = [
  {
    name: 'Altair Ibn-la Ahad',
    title: 'CEO of Ubisoft',
    image: 'images/member1.png',
    description:
      "I'm a CEO and Entrepreneur. I'm passionate about Cloud Native Solutions, DevOps and AllTheOps that followed. I'm also organizer of the DevOps + Cloud Native Community in Costa Rica and a DevOps Institute Ambassador.",
  },
  {
    name: 'Jaime Raynor',
    title: 'Vice President of Activison',
    image: 'images/partners/mozilla.png',
    description:
      'Jaime Raynor is part of Activison, official site for faculty, postdocs, students and staff information (Expertise, Bio, Research, Publications, and more). The site facilitates research and collaboration in academic endeavors.',
  },
  {
    name: 'Sarrah Kerrigan',
    title: 'CEO of Blizard',
    image: '/images/member3.png',
    description:
      'Sarrah Kerrigan is a CEO of Blizard solutions at Activison where she focuses on building AI based tool that enable testers to focus on the fun parts of QA.',
  },
  {
    name: 'Aneta Gutenberg',
    title: 'Vice President of Dexp',
    image: 'images/member4.png',
    description:
      'Aneta Gutenberg is Vice President of Dexp running SRE, Security, and tooling. Prior to this, he worked at Puppet running PE, Platform engineering as well as SRE.',
  },
  {
    name: 'Lolo kline',
    title: 'VP & Head of Engineering @ Fast',
    image: 'images/member5.png',
    description:
      'Lolo kline is a Egyptian mathematician who specializes in number theory. He obtained his B.Sc from Middle East Technical University in Ankara, Turkey and his PhD from the University of london in 1990.',
  },
  {
    name: 'Hidetaka Myzaiki',
    title: 'Chief Technology Officer at Formsoftware',
    image: 'images/member6.png',
    description:
      'Hidetaka Myzaiki a Chief Technology Officer at Formsoftware director of dark souls and a BS in Computer Science from kyoto  University. ',
  },
];

const speakersWrap  = document.querySelector('.speakers');
speakers.forEach((speaker) => {
  speakersWrap.innerHTML += `
  <img src="${speakers.image}" alt="${speaker.name}" class="speakers-image">
  <div class="speakers-card">
    <h4 class="speakers-name">${speaker.name}</h4>
    <p class="speakers-desc">${speaker.title}</p>
    <p class="speakers-achiev">${speaker.description}</p>
  </div>
  `;
});

var imga = {images}