/* "use client";
import React, { useState, useEffect } from "react";
import dotenv from "dotenv";

export default function NewsLastPost() {
  const [posts, setPosts] = useState([]);
  const accessToken = process.env.NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN;
  console.log(accessToken);
  const pageId = "115007933229699";

  useEffect(() => {
    const apiUrl = `https://graph.facebook.com/${pageId}/feed?limit=3&access_token=${accessToken}`;

    fetch(apiUrl)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error(`Erreur HTTP! Statut: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const fetchedPosts = data.data;
        setPosts(fetchedPosts);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des posts :",
          error.message
        );
      });
  }, [accessToken]);
  console.log(posts);

  return (
    <div>
      <h2>Les trois derniers posts de la page Facebook</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>Post ID: {post.id}</h2>
            <p>Message: {post.message}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
 */
