import "./FeaturedPosts.css";
import FeaturedPostCard from "./FeaturedPostCard";

import post1 from "../../assets/images/posts/post-1.png";
import post2 from "../../assets/images/posts/post-2.png";
import post3 from "../../assets/images/posts/post-3.png";

const posts = [
  {
    image: post1,
    title: "Loudest à La Madison",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  },
  {
    image: post2,
    title: "Loudest à La Madison",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  },
  {
    image: post3,
    title: "Loudest à La Madison",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  },
];

const FeaturedPosts = () => {
  return (
    <section className="featured-posts">
      <div className="featured-posts__container">

        <div className="featured-posts__header">
          <p className="featured-posts__subtitle">
            Practice Advice
          </p>

          <h2 className="featured-posts__title">
            FEATURED POSTS
          </h2>
        </div>

        <div className="featured-posts__grid">
          {posts.map((post, index) => (
            <FeaturedPostCard
              key={index}
              image={post.image}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedPosts;