import { find as findPosts } from "../trackers/visible-posts"
import {
  take_me_to as take_me_to_page,
  go_back as go_n_page_back,
} from "../portals/inter-page"

const visiblePosts = findPosts()
console.log(visiblePosts)
