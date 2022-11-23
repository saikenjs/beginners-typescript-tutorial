interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface Post {
  id: string;
  title: string;
  body: string;
}

/**
 * How do we type this return statement so it's both
 * User AND { posts: Post[] }
 */
export const getDefaultUserAndPosts = (): User & { posts: Post[] } => {
  return {
    id: "1",
    firstName: "Matt",
    lastName: "Pocock",
    posts: [
      {
        id: "1",
        title: "How I eat so much cheese",
        body: "It's pretty edam difficult",
      },
    ],
  };
};

const userAndPosts = getDefaultUserAndPosts();

console.log(userAndPosts.posts[0]);

/**
 * We can combine 2 interface or type to create a new data type,
 * it's call Intersection
 */
