import React from "react";
import BlogCard from "../components/BlogCard";


export default function Mega() {
  const posts = [
    {
      id: "1",
      title: "The Future of Technology",
      description:
        "Explore the latest innovations shaping our world, from AI advancements to space exploration.",
      date: "2024-06-20",
      imageUrl: "../images/pic1 (1).jpeg",
    },
    {
      id: "2",
      title: "Mastering the Art of Minimalism",
      description:
        "Learn how to declutter your life and focus on what truly matters.",
      date: "2023-10-20",
      imageUrl: "../images/pic1 (4).jpeg",
    },
    {
      id: "3",
      title: "Healthy Eating May Simple",
      description:
        "Discover easy tips and recipes to maintain a balanced and nutritious diet.",
      date: "2024-06-11",
      imageUrl: "../images/pic1 (5).jpeg",
    },
    {
      id: "4",
      title: "The Power of Mindfulness",
      description:
        "Uncover techniques to stay present and reduce stress in your daily life.",
      date: "2024-06-29",
      imageUrl: "../images/pic1 (6).jpeg",
    },
    {
      id: "5",
      title: "Travel On a Budget",
      description:
        "Tips and tricks to explore the world without breaking the bank.",
      date: "2023-09-05",
      imageUrl: "../images/pic1 (7).jpeg",
    },
    {
      id: "6",
      title: "Building Successful Career",
      description:
        "Insights and advice on climbing the career ladder and achieving your goals.",
      date: "2024-06-07",
      imageUrl: "../images/pic1 (8).jpeg",
    },
    {
      id: "7",
      title: "The Magic Of Reading",
      description:
        "Dive into the benefits of reading and book recommendations for every genre lover.",
      date: "2019-16-06",
      imageUrl: "../images/pic1 (9).jpeg",
    },
    {
      id: "8",
      title: "Fitness For Beginner",
      description:
        "A step-by-step guide to starting your fitness journey and staying motivated",
      date: "2020-06-20",
      imageUrl: "../images/pic1 (10).jpeg",
    },
    {
      id: "9",
      title: "Sustainable Living Tips ",
      description:
        "Simple ways to reduce your carbon footprint and live an eco-friendly life",
      date: "2021-12-19",
      imageUrl: "../images/pic1 (11).jpeg",
    },
    {
      id: "10",
      title: "Unlocking Creativity",
      description:
        "Strategies to boost your creativity and think outside the box.",
      date: "2022-16-09",
      imageUrl: "../images/pic1 (12).png",
    },
    {
      id: "11",
      title: "Financial Freedom 101",
      description:
        "Practical advice on saving, investing, and achieving financial independence.",
      date: "2013-16-02",
      imageUrl: "../images/pic1 (1).jpeg",
    },
    {
      id: "12",
      title: "The Impact of Social Media",
      description:
        "How social media influences our lives and tips for using it mindfully.",
      date: "2024-23-20",
      imageUrl: "../images/pic1 (2).jpeg",
    },
  ];
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change ">
        {" "}
        Exploring The Life Of Human
      </h1>

      <div className="grid grid-cols-1 sm:-grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
           <div className="fade-in" key={post.id}>
            <div className="blog-card">
            <BlogCard post={post} isDarkBackground={index % 2 === 0}/>
            </div>
           </div>
        ))}
      </div>
    </div>
  );
}
