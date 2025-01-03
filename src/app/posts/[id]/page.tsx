"use client";
import React from "react";
import CommentSection from "@/components/CommentSection";
import AuthorCard from "@/components/AuthorCard";
import Footer from "@/components/Footer";
import Image from "next/image";

const posts = [
  {
    id: "1",
    title: "The Future of Technology",
    description:
      "Explore the latest innovations shaping our world, from AI advancements to space exploration.",
    image: "../images/pic1 (1).jpeg",
  },
  {
    id: "2",
    title: "Mastering the Art of Minimalism",
    description:
      "Learn how to declutter your life and focus on what truly matters.",

    image: "../images/pic1 (4).jpeg",
  },
  {
    id: "3",
    title: "Healthy Eating May Simple",
    description:
      "Discover easy tips and recipes to maintain a balanced and nutritious diet.",

    image: "../images/pic1 (5).jpeg",
  },
  {
    id: "4",
    title: "The Power of Mindfulness",
    description:
      "Uncover techniques to stay present and reduce stress in your daily life.",

    image: "../images/pic1 (6).jpeg",
  },
  {
    id: "5",
    title: "Travel On a Budget",
    description:
      "Tips and tricks to explore the world without breaking the bank.",

    image: "../images/pic1 (7).jpeg",
  },
  {
    id: "6",
    title: "Building Successful Career",
    description:
      "Insights and advice on climbing the career ladder and achieving your goals.",

    image: "../images/pic1 (8).jpeg",
  },
  {
    id: "7",
    title: "The Magic Of Reading",
    description:
      "Dive into the benefits of reading and book recommendations for every genre lover.",

    image: "../images/pic1 (9).jpeg",
  },
  {
    id: "8",
    title: "Fitness For Beginner",
    description:
      "A step-by-step guide to starting your fitness journey and staying motivated",

    image: "../images/pic1 (10).jpeg",
  },
  {
    id: "9",
    title: "Sustainable Living Tips ",
    description:
      "Simple ways to reduce your carbon footprint and live an eco-friendly life",

    image: "../images/pic1 (11).jpeg",
  },
  {
    id: "10",
    title: "Unlocking Creativity",
    description:
      "Strategies to boost your creativity and think outside the box.",
    image: "../images/pic1 (12).png",
  },
  {
    id: "11",
    title: "Financial Freedom 101",
    description:
      "Practical advice on saving, investing, and achieving financial independence.",
    image: "../images/pic1 (1).jpeg",
  },
  {
    id: "12",
    title: "The Impact of Social Media",
    description:
      "How social media influences our lives and tips for using it mindfully.",
    image: "../images/pic1 (2).jpeg",
  },
];

export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10"> Post Not Found</h2>
    );
  }

  const renderParagraghs = (description: string) => {
    return description.split("/n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}{" "}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
        {" "}
        {post.title}
      </h1>

      {post.image && (
        <Image
        src={post.image}
        alt={post.title}
        className="w-full h-auto rounded-md mt-4"
        width={100}
        height={100}
        
        />

      )}
      <div className="mt-6 text-lg text-slate-700">
        {renderParagraghs(post.description)}

      </div>
      <CommentSection postId={post.id} />
      <AuthorCard />
      <Footer/>
    </div>
  );
}
