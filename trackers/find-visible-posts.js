const visiblePosts = getVisiblePosts()

function getVisiblePosts() {
  const posts = []
  const container = document.querySelector("article")
  const matches = container.querySelectorAll("a")
  matches.forEach(match =>
    posts.push({
      href: match.href,
      visited: false,
    })
  )
  return posts
}
console.log(visiblePosts)
document.location.href = visiblePosts[0].href
