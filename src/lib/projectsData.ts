import lyftImage from '@/assets/images/projects/lyft.png';
import etlImage from '@/assets/images/projects/etl-code-snippet.png';
import creditImage from '@/assets/images/projects/credit-cards.png';
import placeholderImage from '@/assets/images/projects/placeholder.svg';
import sippImage from '@/assets/images/projects/wealthgap.png';
import airplaneImage from '@/assets/images/projects/britsair.png';

export interface Project {
  title: string;
  categories: string[];
  image: any; // We'll use any here since it's a StaticImageData type from Next.js
  link: string;
  backgroundColor: string;
}

export const projects: readonly Project[] = [
  {
    title: "Driver Incentive Program Evaluation",
    categories: ["Causal Inference", "A/B Testing", "Platform Strategy"],
    image: lyftImage,
    link: "https://github.com/kevinp972/rideshare-app-experiment",
    backgroundColor: "bg-[#fed5e5]"
  },
  {
    title: "Automated ETL for Yelp Analytics",
    categories: ["End-to-End Pipeline", "Data Engineering"],
    image: etlImage,
    link: "https://github.com/kevinp972/yelp-etl-pipeline-to-tableau",
    backgroundColor: "bg-[#9B9B9B]"
  },
  {
    title: "Optimizing Credit Score Cutoffs with RDD",
    categories: ["Causal Inference", "Behavioral Modeling", "Data-Driven Policy Design"],
    image: creditImage,
    link: "https://github.com/kevinp972/rdd-credit-limit",
    backgroundColor: "bg-[black]"
  },
  {
    title: "Modeling Wealth with the 1991 SIPP Dataset",
    categories: ["LASSO/Ridge", "Predictive Analytics", "Flexible Linear Models"],
    image: sippImage,
    link: "https://github.com/kevinp972/SIPP_Data_Value_Prediction",
    backgroundColor: "bg-[#BFE8D7]"
  },
  // Adding 4 more placeholder projects to reach 8 total
  {
    title: "British Airways Performance Tracker",
    categories: ["Tableau Dashboard", "Customer Experience Analytics"],
    image: airplaneImage,
    link: "https://public.tableau.com/views/BritishAirwaysDashboard_17504012958430/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    backgroundColor: "bg-[#C0C2EC]"
  },
  {
    title: "Project Six",
    categories: ["UI/UX", "Research"],
    image: placeholderImage,
    link: "https://example.com",
    backgroundColor: "bg-black"
  },
  {
    title: "Project Seven",
    categories: ["Product", "Strategy"],
    image: placeholderImage,
    link: "https://example.com",
    backgroundColor: "bg-black"
  },
  {
    title: "Project Eight",
    categories: ["Design", "Development"],
    image: placeholderImage,
    link: "https://example.com",
    backgroundColor: "bg-black"
  }
] as const; 