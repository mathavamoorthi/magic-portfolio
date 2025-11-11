"use client";

import { Row, Button, Text, Column } from "@once-ui-system/core";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface BlogFilterProps {
  tags: string[];
}

export function BlogFilter({ tags }: BlogFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Get all selected tags from URL (supports multiple tag params)
  const selectedTags = searchParams.getAll("tag");

  const handleTagClick = (tag: string | null) => {
    const params = new URLSearchParams();
    
    if (tag === null) {
      // Clear all filters - "All" button clicked
      // Don't add any tag params
    } else {
      // Get current selected tags
      const currentTags = searchParams.getAll("tag");
      
      if (currentTags.includes(tag)) {
        // Tag is already selected, remove it
        currentTags
          .filter((t) => t !== tag)
          .forEach((t) => params.append("tag", t));
      } else {
        // Tag is not selected, add it
        currentTags.forEach((t) => params.append("tag", t));
        params.append("tag", tag);
      }
    }

    const queryString = params.toString();
    router.push(`${pathname}${queryString ? `?${queryString}` : ""}`);
  };

  if (tags.length === 0) {
    return null;
  }

  const hasActiveFilters = selectedTags.length > 0;

  return (
    <Column fillWidth marginBottom="l" paddingX="l" gap="12">
      <Text variant="label-default-m" onBackground="neutral-weak">
        Filter by:
      </Text>
      <Row fillWidth gap="8" wrap vertical="center">
        <Button
          variant={!hasActiveFilters ? "primary" : "secondary"}
          size="s"
          onClick={() => handleTagClick(null)}
          data-border="rounded"
        >
          All
        </Button>
        {tags.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          return (
            <Button
              key={tag}
              variant={isSelected ? "primary" : "secondary"}
              size="s"
              onClick={() => handleTagClick(tag)}
              data-border="rounded"
            >
              {tag}
            </Button>
          );
        })}
      </Row>
      {hasActiveFilters && (
        <Text variant="body-default-xs" onBackground="neutral-weak" paddingTop="4">
          Showing posts with: {selectedTags.join(", ")}
        </Text>
      )}
    </Column>
  );
}

