import {
  benefitImage2,
  benefitImage3,
  benefitImage4,
  benefitImage5,
  benefitImage6,
  benefitImage7,
  benefitImage8,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  framer,
  instagram,
  notion,
  photoshop,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  slack,
  sliders04,
  telegram,
  twitter,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Innovations",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Future Aspect",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Contact Us",
    url: "/contact/contact.html",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Log In",
    url: "/login/login.html",
    onlyMobile: true,
  },
];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice Recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free",
    status: "progress",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Avatar Improvement",
    text: "Provide 3D Avatars which helps to generates input text/speech into Indian sign language",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot Customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interaction",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "ISL Courses With TOP Educator",
    text: "Offer expert-led instruction in ISL,providing compreshensive training from experienced instructor which enhance learning and effective communication skills",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Contextual Understanding",
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "personalization with Integration Capabilities",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 56,
    height: 26,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 48,
    height: 34,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 35,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 90,
    height: 90,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 70,
    height: 70,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 90,
    height: 70,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 56,
    height: 56,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 56,
    height: 56,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Basic AI chatbot, personalized job recommendations , text to avatar creation",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized job recommendations for deaf community based on your preferences",
      "Ability to create avatar based on your text input",
    ],
  },
  {
    id: "1",
    title: "Advanced",
    description: "Advanced AI chatbot, courses for deaf community, accessibility features",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "Advanced courses for deaf community",
      "Different accessibility features offer text customization and color adjustments",
    ],
  },
  {
    id: "2",
    title: "Premium",
    description: "Augmented reality overlay, 3D holographic technology, dynamic language switching",
    price: "19.99",
    features: [
      "AR technology for intuitive communication",
      "3D sign language interpreter with holographic technology",
      "Provides more than 21 languages for multilingual support",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "TEXT TO ISL ALPHABETS",
    text: "Convert input text into Indian Sign Language alphabetwise to seamless communication with deaf community",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    ImageUrl: benefitImage7,
    light: true,
  },
  {
    id: "1",
    title: "TEXT/SPEECH TO ISL TRANSLATOR",
    text: "Convert input text or spoken words into Indian Sign Language to start communication with deaf community",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "REAL TIME ISL VIDEO TO TEXT TRANSLATOR",
    text: 'Converts ISL gestures from live video feeds to text in real-time using your device camera',
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    imageUrl: benefitImage3,
    light: true,
},
{
  id: "3",
  title: "TEXT/SPEECH TO ISL AVATAR GENERATOR",
  text: "Transforms input text or spoken words into Indian Sign Language using animated avatars",
  backgroundUrl: "./src/assets/benefits/card-4.svg",
  additionalContent:'<div style={{ position: "absolute", bottom: "10px", left: "10px", fontWeight: "bold", color: "#ff0000" }}>DEMO VIDEO</div>',
  imageUrl: benefitImage8,
  light: true,
},
{
    id: "4",
    title: "REAL TIME ISL VIDEO TO SPEECH TRANSLATOR",
    text: "Transforms spoken words into Indian Sign Language using animated avatars",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    imageUrl: benefitImage4,
    additionalContent:'<div style={{ position: "absolute", bottom: "10px", left: "10px", fontWeight: "bold", color: "#ff0000" }}>Coming Soon</div>',
    light: true,
  },
  {
    id: "5",
    title: "VIDEO CALL TO REAL TIME ISL TRANSLATOR",
    text: "Enhance video calls with real-time sign language translation.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    imageUrl: benefitImage6,
    additionalContent:'<div style={{ position: "absolute", bottom: "10px", left: "10px", fontWeight: "bold", color: "#ff0000" }}>Coming Soon</div>',
    light: true,
  },
];
export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter, 
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
  },
];
