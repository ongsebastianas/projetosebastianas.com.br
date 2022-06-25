import { Author } from "./Author"
import { Guid, RenderedProp } from "./commons"

export type PostStatus = "publish"
export type CommentStatus = "closed"
export type PostContent = {
  protected: boolean
} & RenderedProp

export type Post = {
  id: string,
  date: Date,
  date_gmt: Date,
  guid: Guid,
  modified: Date,
  modified_gmt: Date,
  slug: string,
  status: string,
  type: "post",
  link: string,
  title: RenderedProp,
  content: PostContent,
  excerpt: PostContent,
  author: Author,
  featured_media: number,
  comment_status: CommentStatus,
  categories: number[],
  tags: number[],
}