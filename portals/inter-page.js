function take_me_to(href) {
  document.location.href = href
}

function go_back(num_times) {
  window.history.go(-parseInt(num_times))
}

export { take_me_to, go_back }
