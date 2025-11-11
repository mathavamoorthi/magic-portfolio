import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { Posts } from "@/components/blog/Posts";
import { BlogFilter } from "@/components/blog/BlogFilter";
import { baseURL, blog, person } from "@/resources";
import { getPosts } from "@/utils/utils";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string | string[] }>;
}) {
  // Get all unique tags from blog posts
  const allPosts = getPosts(["src", "app", "blog", "posts"]);
  const allTags = new Set<string>();
  
  allPosts.forEach((post) => {
    const tags = post.metadata.tags || (post.metadata.tag ? [post.metadata.tag] : []);
    tags.forEach((tag) => {
      // Ensure tag is a string before adding
      if (typeof tag === "string" && tag.length > 0) {
        allTags.add(tag);
      }
    });
  });

  const uniqueTags = Array.from(allTags).sort();

  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" marginLeft="24">
        {blog.title}
      </Heading>
      <BlogFilter tags={uniqueTags} />
      <Column fillWidth flex={1} gap="40">
        <BlogPostsList searchParams={searchParams} />
      </Column>
    </Column>
  );
}

async function BlogPostsList({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string | string[] }>;
}) {
  const params = await searchParams;
  // Handle both single tag and multiple tags from URL
  const tagParam = params.tag;
  const filterTags = tagParam
    ? Array.isArray(tagParam)
      ? tagParam
      : [tagParam]
    : [];

  return (
    <>
      <Posts range={[1, 1]} thumbnail filterByTags={filterTags} />
      <Posts range={[2, 3]} columns="2" thumbnail direction="column" filterByTags={filterTags} />
      <Posts range={[4]} columns="2" filterByTags={filterTags} />
    </>
  );
}
