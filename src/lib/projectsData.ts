import lyftImage from '@/assets/images/projects/lyft.png';
import etlImage from '@/assets/images/projects/etl-code-snippet.png';
import creditImage from '@/assets/images/projects/credit-cards.png';
import placeholderImage from '@/assets/images/projects/placeholder.svg';
import sippImage from '@/assets/images/projects/wealthgap.png';
import airplaneImage from '@/assets/images/projects/britsair.png';
import ofgImage from '@/assets/images/projects/ofg.png';
import mycribImage from '@/assets/images/projects/mycrib.png';
import clutchImage from '@/assets/images/projects/clutch.png';

export interface Project {
  title: string;
  categories: string[];
  image: any; // We'll use any here since it's a StaticImageData type from Next.js
  link: string;
  backgroundColor: string;
  zoom?: number; // Optional zoom level, defaults to 1 if not specified
}

export const projects: readonly Project[] = [
  {
    title: "Driver Incentive Program Evaluation",
    categories: ["Causal Inference", "A/B Testing", "Platform Strategy"],
    image: lyftImage,
    link: "https://github.com/kevinp972/rideshare-app-experiment",
    backgroundColor: "bg-[#fed5e5]",
    zoom: 0.9 
  },
  {
    title: "Automated ETL for Yelp Analytics",
    categories: ["End-to-End Pipeline", "Data Engineering"],
    image: etlImage,
    link: "https://github.com/kevinp972/yelp-etl-pipeline-to-tableau",
    backgroundColor: "bg-[#9B9B9B]",
    zoom: 1 
  },
  {
    title: "Optimizing Credit Score Cutoffs with RDD",
    categories: ["Causal Inference", "Behavioral Modeling", "Data-Driven Policy Design"],
    image: creditImage,
    link: "https://github.com/kevinp972/rdd-credit-limit",
    backgroundColor: "bg-[black]",
    zoom: 1.1 
  },
  {
    title: "Modeling Wealth with the 1991 SIPP Dataset",
    categories: ["LASSO/Ridge", "Predictive Analytics", "Flexible Linear Models"],
    image: sippImage,
    link: "https://github.com/kevinp972/SIPP_Data_Value_Prediction",
    backgroundColor: "bg-[#BFE8D7]",
    zoom: 1
  },
  {
    title: "British Airways Performance Tracker",
    categories: ["Tableau Dashboard", "Customer Experience Analytics"],
    image: airplaneImage,
    link: "https://public.tableau.com/views/BritishAirwaysDashboard_17504012958430/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    backgroundColor: "bg-[#C0C2EC]",
    zoom: 0.7
  },
  {
    title: "My Work at Center for Impact",
    categories: ["Data Analytics & Visualization", "Python, Dash, Tableau"],
    image: ofgImage,
    link: "https://www.anderson.ucla.edu/about/centers/impactanderson/corporate-sustainability/about-open-for-good",
    backgroundColor: "bg-[#2D2D2D]",
    zoom: 0.7
  },
  {
    title: "Source Code for This Website",
    categories: ["Front-End Developing", "Responsive Design"],
    image: mycribImage,
    link: "https://github.com/kevinp972/mycrib",
    backgroundColor: "bg-[#9B9B9B]"
  },
  {
    title: "Clutch Replacement on My Friend's Mustang GT 2017",
    categories: ["Mechanic Work", "Fun Time with Bro"],
    image: clutchImage,
    link: "https://example.com",
    backgroundColor: "bg-[#ECEAC0]",
    zoom: 0.7
  }
] as const; 