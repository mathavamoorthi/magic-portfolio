import { getPosts } from "@/utils/utils";
import { Grid } from "@once-ui-system/core";
import Post from "./Post";

interface PostsProps {
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
  thumbnail?: boolean;
  direction?: "row" | "column";
  exclude?: string[];
  filterByTags?: string[];
}

export function Posts({
  range,
  columns = "1",
  thumbnail = false,
  exclude = [],
  direction,
  filterByTags = [],
}: PostsProps) {
  let allBlogs = getPosts(["src", "app", "blog", "posts"]);

  // Exclude by slug (exact match)
  if (exclude.length) {
    allBlogs = allBlogs.filter((post) => !exclude.includes(post.slug));
  }

  // Filter by tags (multiple tags - shows posts that have ANY of the selected tags)
  if (filterByTags.length > 0) {
    allBlogs = allBlogs.filter((post) => {
      const postTags = post.metadata.tags || (post.metadata.tag ? [post.metadata.tag] : []);
      // Normalize tags to lowercase for comparison
      const normalizedPostTags = postTags
        .filter((tag): tag is string => typeof tag === "string" && tag.length > 0)
        .map((tag) => tag.toLowerCase());
      
      // Check if post has any of the selected tags
      return filterByTags.some((selectedTag) => {
        const normalizedSelectedTag = selectedTag.toLowerCase();
        return normalizedPostTags.includes(normalizedSelectedTag);
      });
    });
  }

  const sortedBlogs = allBlogs.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedBlogs = range
    ? sortedBlogs.slice(range[0] - 1, range.length === 2 ? range[1] : sortedBlogs.length)
    : sortedBlogs;

  return (
    <>
      {displayedBlogs.length > 0 && (
        <Grid columns={columns} s={{ columns: 1 }} fillWidth marginBottom="40" gap="16">
          {displayedBlogs.map((post) => (
            <Post key={post.slug} post={post} thumbnail={thumbnail} direction={direction} />
          ))}
        </Grid>
      )}
    </>
  );
}
