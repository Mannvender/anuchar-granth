function find() {
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

export { find }
