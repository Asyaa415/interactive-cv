// backend/data.js

const educationHistory = [
  {
    id: 1,
    period: '2023 - Sekarang',
    institution: 'Universitas Amikom Yogyakarta',
    major: 'S1 - Informatika'
  },
  {
    id: 2,
    period: '2020 - 2023',
    institution: 'SMK Negeri 1 Tanjung',
    major: 'Teknik Komputer dan Jaringan'
  },
  {
    id: 3,
    period: '2017 - 2020',
    institution: 'SMP Negeri 4 Tanjung',
    major: 'SMP'
  },
  {
    id: 4,
    period: '2011 - 2017',
    institution: 'SD Negeri 1 Syamsudinoor',
    major: 'SD'
  },
];


const skills = [
  { name: 'Vue.js', level: 'Menengah' },
  { name: 'Tailwind CSS', level: 'Menengah' },
  { name: 'Node.js', level: 'Menengah' },
  { name: 'JavaScript', level: 'Menengah' },

];


const projects = [
  {
    title: 'Jogja-Inside',
    image: 'https://via.placeholder.com/500x300?text=Jogja+Inside',
    description: 'Website rekomendasi destinasi wisata di Yogyakarta dengan fitur login admin, manajemen user & destinasi.',
    tech: ['Vue.js', 'Laravel', 'MySQL'],
    link: 'https://github.com/RamadhanZaki/Jogja_Inside' // atau link deploy kamu
  },

];

module.exports = { educationHistory, skills, projects };
