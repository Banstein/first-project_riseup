const speakers = [
  {
    name: 'Altair Ibn-la Ahad',
    title: 'CEO of Ubisoft',
    image: 'images/member1.png',
    description:
      "I'm a CEO and Entrepreneur. I'm also organizer of the DevOps+ Cloud Native Community in Costa Rica.",
  },
  {
    name: 'Jaime Raynor',
    title: 'Vice President of Activison',
    image: 'images/member2.png',
    description:
      'Jaime Raynor is part of Activison, official site for faculty, postdocs, students and staff collaboration in academic endeavors.',
  },
  {
    name: 'Sarrah Kerrigan',
    title: 'CEO of Blizard',
    image: 'images/member3.png',
    description:
      'Sarrah Kerrigan is a CEO of Blizard solutions at Activison where she focuses on building AI based tools.',
  },
  {
    name: 'Aneta Gutenberg',
    title: 'Vice President of Dexp',
    image: 'images/member4.png',
    description:
      'Aneta Gutenberg is Vice President of Dexp running SRE, Security, and tooling. Prior to this, he worked at Puppet running PE.',
  },
  {
    name: 'Lolo kline',
    title: 'VP & Head of Engineering @ Fast',
    image: 'images/member5.png',
    description:
      'Lolo kline is a Egyptian mathematician who specializes in number theory. she obtained his B.Sc from Ankara Technical University.',
  },
  {
    name: 'Hidetaka Myzaiki',
    title: 'Chief Technology Officer at Formsoftware',
    image: 'images/member6.png',
    description:
      'Hidetaka Myzaiki a Chief Technology Officer at Formsoftware director of dark souls. ',
  },
];

const speakersWrap = document.querySelector('.speakers');
speakers.forEach((speaker) => {
  speakersWrap.innerHTML += `
  <div class="speakers-card">
    <img src="${speaker.image}" alt="${speaker.name}" class="left-block">
    <div class="right-block">
      <h4 class="speakers-name">${speaker.name}</h4>
      <p class="speakers-desc">${speaker.title}</p>
      <p class="speakers-achiev">${speaker.description}</p>
    </div>
  </div>
  `;
});
