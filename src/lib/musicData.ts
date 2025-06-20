import placeholderImage from '@/assets/images/projects/placeholder.svg';
import isisImage from '@/assets/images/music/Isis.jpg';
import laLaLandImage from '@/assets/images/music/lalaland.jpg';
import tchaikovskyImage from '@/assets/images/music/tchaikovsky.png';
import debussyImage from '@/assets/images/music/debussy.jpg';
import cinemaParadisoImage from '@/assets/images/music/cinemaparadiso.jpg';
import playingLoveImage from '@/assets/images/music/1900.png';
import secretImage from '@/assets/images/music/secret.jpg';
import bachImage from '@/assets/images/music/bach.jpg';
import attaliImage from '@/assets/images/music/attali.jpg';


export interface MusicPerformance {
    title: string;
    composer: string;
    image: any;
    link: string;
    isFeature?: boolean;
  }

export const musicPerformances: MusicPerformance[] = [
  {
    title: "Isis",
    composer: "Kenn Cox",
    image: isisImage,
    link: "https://youtu.be/CzE5DU4cHvg?si=G3_w_qQwqSzXbtx9",
    isFeature: true
  },
  {
    title: "La La Land Suite",
    composer: "Justin Hurwitz (arr. by Jacob Koller)",
    image: laLaLandImage,
    link: "https://www.bilibili.com/video/BV1Sq4y1J7mX/?share_source=copy_web&vd_source=392c792d93d5c08d4435cb13d4c5a55f"
  },
  {
    title: "Waltz of the Flowers (The Nutcracker Suite)",
    composer: "Pyotr Ilyich Tschaikovsky",
    image: tchaikovskyImage,
    link: "https://www.bilibili.com/video/BV1Dp4y1q7dP/?share_source=copy_web&vd_source=392c792d93d5c08d4435cb13d4c5a55f"
  },
  {
    title: "Clair de Lune",
    composer: "Claude Debussy",
    image: debussyImage,
    link: "https://www.bilibili.com/video/BV1JJ411Q7Ki/?share_source=copy_web&vd_source=392c792d93d5c08d4435cb13d4c5a55f"
  },
  {
    title: "Love Theme from Cinema Paradiso",
    composer: "Ennio Morricone",
    image: cinemaParadisoImage,
    link: "https://www.bilibili.com/video/BV1uE411x77F/?share_source=copy_web&vd_source=392c792d93d5c08d4435cb13d4c5a55f"
  },
  {
    title: "Playing Love",
    composer: "Ennio Morricone",
    image: playingLoveImage,
    link: "https://www.bilibili.com/video/BV15e411W7Qa/?share_source=copy_web&vd_source=392c792d93d5c08d4435cb13d4c5a55f"
  },
  {
    title: "Secret",
    composer: "Jay Chou",
    image: secretImage,
    link: "https://www.bilibili.com/video/BV1xE411o7L3/?share_source=copy_web&vd_source=392c792d93d5c08d4435cb13d4c5a55f"
  },
  {
    title: "Harmonic Analysis of Bach's Praeludium XXII",
    composer: "Xueshan (Kevin) Peng",
    image: bachImage,
    link: "https://example.com/performance8"
  },
  {
    title: 'Essay on Attali\'s "Noise - The Political Economy of Music"',
    composer: "Xueshan (Kevin) Peng",
    image: attaliImage,
    link: "https://example.com/performance9"
  }
] as const; 