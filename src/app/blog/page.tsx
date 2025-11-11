import { Column, Heading, Meta, Schema, Row } from "@once-ui-system/core";
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
    <Column maxWidth="l" paddingTop="24" paddingX="l" fillWidth>
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
      <Heading marginBottom="xl" variant="heading-strong-xl">
        {blog.title}
      </Heading>
      <Row 
        fillWidth 
        gap="l" 
        s={{ direction: "column" }}
      >
        {/* Left Sidebar - Filter (Fixed) */}
        <Column 
          flex={3} 
          minWidth={20} 
          maxWidth={24} 
          s={{ maxWidth: "100%" }}
          style={{
            position: "sticky",
            top: "80px",
            alignSelf: "flex-start",
            height: "fit-content",
            maxHeight: "calc(100vh - 100px)"
          }}
        >
          <BlogFilter tags={uniqueTags} />
        </Column>
        
        {/* Right Side - Blog Posts (Normal Flow - Global Scroll) */}
        <Column flex={9} fillWidth>
          <BlogPostsList searchParams={searchParams} />
        </Column>
      </Row>
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
    <Posts filterByTags={filterTags} thumbnail />
  );
}
