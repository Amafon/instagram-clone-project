const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

function renderPost(postsArr) {
  let sectionContent = "";
  const postSection = document.querySelector(".here");
  for (const post of postsArr) {
    sectionContent += `
            <section class="post-section">
                <div class="container">
                    <div class="section-heading">
                        <p class="author-name">${post.name}</p>
                        <p class="author-location">${post.location}</p>
                        <img
                        class="post-author-img"
                        src="${post.avatar}"
                        alt="Author Profile Picture"
                        />
                    </div>
                </div>
                <img class="post-img" src="${post.post}" alt="Author Post Image"/>
                <div class="content">
                    <div class="container">
                        <div class="icons">
                            <img class="icons-img" src="images/icon-heart.png" alt="Heart Icon"/>
                            <img class="icons-img" src="images/icon-comment.png" alt="Comment Icon"/>
                            <img class="icons-img" src="images/icon-dm.png" alt="Message Icon" />
                        </div>
                        <p class="post-likes">${post.likes} likes</p>
                        <p class="comment">
                            <span class="comment-author">${post.username}</span>
                            <span class="comment-content">${post.comment}</span>
                        </p>
                    </div>
                </div>
                <div class="s">&nbsp;</div>
            </section>
            `;
  }
  postSection.innerHTML = sectionContent;
}

renderPost(posts);
