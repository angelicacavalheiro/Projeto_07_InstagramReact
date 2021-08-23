import Post from "./Post"

export default function Posts(){

  let posts = [
    {
      userImage: "./assets/meowed.svg",
      userName: "meowed",
      postImage: "./assets/gato-telefone.svg",
      likeImage: "./assets/respondeai.svg",
      firstLike: "respondeai",
      othersLike: "outras 101.523 pessoas"
    },

    {
      userImage: "./assets/barked.svg",
      userName: "barked",
      postImage: "./assets/dog.svg",
      likeImage: "./assets/adorable_animals.svg",
      firstLike: "adorable_animals",
      othersLike: "outras 99.159 pessoas"
    } 
  ];


    return (
        <div class="posts">
          {posts.map((post) => <Post post={post} />)}
        </div>
    )
}

