"use client";

import { Card, Column, Media, Row, Avatar, Text, Tag } from "@once-ui-system/core";
import { formatDate } from "@/utils/formatDate";
import { person } from "@/resources";

interface PostProps {
  post: any;
  thumbnail: boolean;
  direction?: "row" | "column";
}

export default function Post({ post, thumbnail, direction }: PostProps) {
  return (
    <Card
      fillWidth
      key={post.slug}
      href={`/blog/${post.slug}`}
      transition="micro-medium"
      border="neutral-alpha-weak"
      background="surface"
      padding="l"
      radius="l"
      gap="16"
    >
      {post.metadata.image && thumbnail && (
        <Media
          priority
          sizes="(max-width: 768px) 100vw, 640px"
          border="neutral-alpha-weak"
          cursor="interactive"
          radius="m"
          src={post.metadata.image}
          alt={"Thumbnail of " + post.metadata.title}
          aspectRatio="16 / 9"
          marginBottom="8"
        />
      )}
      <Column fillWidth gap="12">
        <Row gap="16" vertical="center" wrap>
          <Row vertical="center" gap="8">
            <Avatar src={person.avatar} size="s" />
            <Text variant="label-default-s">{person.name}</Text>
          </Row>
          <Text variant="body-default-xs" onBackground="neutral-weak">
            {formatDate(post.metadata.publishedAt, false)}
          </Text>
        </Row>
        <Text variant="heading-strong-l" wrap="balance">
          {post.metadata.title}
        </Text>
        {post.metadata.summary && (
          <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
            {post.metadata.summary}
          </Text>
        )}
        {((post.metadata.tags && post.metadata.tags.length > 0) || post.metadata.tag) && (
          <Row gap="8" wrap>
            {post.metadata.tags && post.metadata.tags.length > 0
              ? post.metadata.tags.map((tag, index) => (
                  <Tag key={index} size="s">
                    {tag}
                  </Tag>
                ))
              : post.metadata.tag && (
                  <Tag size="s">
                    {post.metadata.tag}
                  </Tag>
                )}
          </Row>
        )}
      </Column>
    </Card>
  );
}
