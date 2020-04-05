const PATH = "./data.json";
const fs = require('fs');

class Post {
   readData() {
      let rawdata = fs.readFileSync(PATH);
      let posts = JSON.parse(rawdata);
      return posts;
   }

   storeData(rawdata) {
      let data = JSON.stringify(rawdata);
      fs.writeFileSync(PATH, data);
   }

   get() {
      // Get posts
      return this.readData();
   }

   getIndividualPost(postId) {
      const posts = this.readData();
      const foundPost = posts.find((post) => post.id == postId);
      return foundPost;
   }

   add(newPost) {
      const currentPosts = this.readData();
      currentPosts.unshift(newPost);
      this.storeData(currentPosts)
   }

}

module.exports = Post;