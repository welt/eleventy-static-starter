import dotenv from "dotenv";
dotenv.config();

export default function () {
  return {
    ogDescription: 'Lorem ipsum dolor sit amet',
    ogTitle: 'Duis eu massa vitae nisi efficitur ornare',
    canonical: process.env.CANONICAL,
    env: process.env.ELEVENTY_ENV,
  };
};
