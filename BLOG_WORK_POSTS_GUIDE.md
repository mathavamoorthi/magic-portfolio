# 📝 Blog & Work Posts Template Guide

Complete guide for adding blog posts and work/project posts to Magic Portfolio.

---

## 📰 BLOG POSTS

### Location
```
src/app/blog/posts/your-post-name.mdx
```

### Template
```markdown
---
title: "Your Blog Post Title"
summary: "A brief summary that appears in blog listings and meta descriptions"
publishedAt: "2025-01-15"
tags: ["Category 1", "Category 2", "Category 3"]
image: "/images/gallery/horizontal-1.jpg"
---

## Introduction

Start your blog post content here. You can use standard Markdown syntax.

### Subheading

- Bullet points
- **Bold text**
- *Italic text*
- [Links](https://example.com)

## Code Examples

Use code blocks for examples:

\`\`\`javascript
function example() {
  console.log("Hello, World!");
}
\`\`\`

## Images

Reference images from the `public/images/` directory:

![Alt text](/images/gallery/horizontal-1.jpg)

## Conclusion

Wrap up your post here.
```

### Frontmatter Fields

| Field | Required | Type | Description | Example |
|-------|----------|------|-------------|---------|
| `title` | ✅ Yes | String | Post title | `"Getting Started with React"` |
| `summary` | ✅ Yes | String | Short description | `"Learn React basics"` |
| `publishedAt` | ✅ Yes | String | Date (YYYY-MM-DD) | `"2025-01-15"` |
| `tags` | ❌ No | Array | Multiple tags | `["React", "Tutorial"]` |
| `tag` | ❌ No | String | Single tag (legacy) | `"React"` |
| `image` | ❌ No | String | Featured image path | `"/images/gallery/img.jpg"` |

### Example Blog Post

```markdown
---
title: "10 Tips for Better React Performance"
summary: "Learn how to optimize your React applications for better performance"
publishedAt: "2025-01-15"
tags: ["React", "Performance", "Web Development"]
image: "/images/gallery/horizontal-1.jpg"
---

## Introduction

Performance is crucial for modern web applications. Here are 10 tips to improve your React app's performance.

## 1. Use React.memo

\`\`\`jsx
const MyComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});
\`\`\`

## 2. Code Splitting

Use dynamic imports to split your code...

## Conclusion

These tips will help you build faster React applications.
```

---

## 💼 WORK / PROJECT POSTS

### Location
```
src/app/work/projects/your-project-name.mdx
```

### Template
```markdown
---
title: "Your Project Title"
publishedAt: "2025-01-15"
summary: "Brief description of your project"
images:
  - "/images/projects/project-01/cover-01.jpg"
  - "/images/projects/project-01/cover-02.jpg"
  - "/images/projects/project-01/video-01.mp4"
team:
  - name: "Your Name"
    role: "Your Role"
    avatar: "/images/avatar.jpg"
    linkedIn: "https://linkedin.com/in/yourprofile"
link: "https://your-project-url.com"
---

## Overview

Describe your project here. What problem does it solve? What was the goal?

## Key Features

- **Feature 1**: Description of feature
- **Feature 2**: Description of feature
- **Feature 3**: Description of feature

## Technologies Used

- **Technology 1**: How it was used
- **Technology 2**: How it was used
- **Technology 3**: How it was used

## Challenges and Solutions

Describe any challenges you faced and how you solved them.

## Outcome

What were the results? Include metrics, learnings, or achievements.
```

### Frontmatter Fields

| Field | Required | Type | Description | Example |
|-------|----------|------|-------------|---------|
| `title` | ✅ Yes | String | Project title | `"E-commerce Platform"` |
| `publishedAt` | ✅ Yes | String | Date (YYYY-MM-DD) | `"2025-01-15"` |
| `summary` | ❌ No | String | Project description | `"A modern e-commerce solution"` |
| `images` | ❌ No | Array | Image/video paths | `["/images/projects/img1.jpg"]` |
| `team` | ❌ No | Array | Team members | See example below |
| `link` | ❌ No | String | Project URL | `"https://project.com"` |

### Team Member Structure

```yaml
team:
  - name: "John Doe"
    role: "Frontend Developer"
    avatar: "/images/avatar.jpg"
    linkedIn: "https://linkedin.com/in/johndoe"
  - name: "Jane Smith"
    role: "UI Designer"
    avatar: "/images/team/jane.jpg"
    linkedIn: "https://linkedin.com/in/janesmith"
```

### Example Work Post

```markdown
---
title: "E-commerce Platform Redesign"
publishedAt: "2025-01-15"
summary: "Complete redesign of an e-commerce platform with improved UX and performance"
images:
  - "/images/projects/ecommerce/homepage.jpg"
  - "/images/projects/ecommerce/product-page.jpg"
  - "/images/projects/ecommerce/checkout.jpg"
team:
  - name: "Alex Johnson"
    role: "Lead Developer"
    avatar: "/images/avatar.jpg"
    linkedIn: "https://linkedin.com/in/alex"
link: "https://ecommerce-demo.com"
---

## Overview

Redesigned a legacy e-commerce platform to improve user experience and increase conversion rates.

## Key Features

- **Modern UI**: Clean, modern interface with improved navigation
- **Fast Checkout**: Streamlined checkout process reduced cart abandonment by 40%
- **Mobile First**: Fully responsive design optimized for mobile devices

## Technologies Used

- **Next.js**: For server-side rendering and optimal performance
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For rapid UI development

## Challenges and Solutions

**Challenge**: Legacy codebase with outdated dependencies
**Solution**: Gradual migration strategy, starting with new features

## Outcome

- 40% reduction in cart abandonment
- 25% increase in conversion rate
- 60% improvement in page load time
```

---

## 📋 QUICK REFERENCE

### File Naming Rules
- ✅ Use lowercase: `my-blog-post.mdx`
- ✅ Use hyphens for spaces: `getting-started.mdx`
- ✅ Filename = URL slug: `my-post.mdx` → `/blog/my-post`
- ❌ No spaces: `my post.mdx` (wrong)
- ❌ No special characters: `my@post.mdx` (wrong)

### Date Format
- Format: `YYYY-MM-DD`
- Example: `"2025-01-15"`

### Image Paths
- Images go in: `public/images/`
- Reference as: `"/images/folder/image.jpg"`
- Supported formats: `.jpg`, `.png`, `.gif`, `.webp`, `.mp4` (for videos)

### Tags
- Use arrays for multiple tags: `tags: ["React", "Tutorial"]`
- Single tag (legacy): `tag: "React"`
- Tags are case-sensitive
- Use consistent tag names across posts

### MDX Components Available
- `CodeBlock` - Syntax highlighted code blocks
- `Table` - Data tables
- `Heading`, `Text` - Typography
- `Media` - Images and videos
- `Button`, `Card` - UI components

---

## 🚀 QUICK START

### Add a Blog Post
1. Create file: `src/app/blog/posts/my-post.mdx`
2. Copy blog template above
3. Fill in frontmatter
4. Write your content
5. Save and view at `/blog/my-post`

### Add a Work Post
1. Create file: `src/app/work/projects/my-project.mdx`
2. Copy work template above
3. Fill in frontmatter
4. Write your content
5. Save and view at `/work/my-project`

---

## 💡 TIPS

1. **Slug = Filename**: Choose your filename carefully as it becomes the URL
2. **Images First**: Add images to `public/images/` before referencing them
3. **Consistent Tags**: Use the same tag names across posts for better filtering
4. **Date Format**: Always use `YYYY-MM-DD` format
5. **Hot Reload**: Refresh browser after creating new posts
6. **Featured Image**: Use `image` field for blog posts, `images` array for work posts

---

## 📁 Directory Structure

```
src/app/
├── blog/
│   ├── posts/
│   │   ├── my-blog-post.mdx      ← Blog posts here
│   │   └── another-post.mdx
│   └── [slug]/
│       └── page.tsx
└── work/
    ├── projects/
    │   ├── my-project.mdx        ← Work posts here
    │   └── another-project.mdx
    └── [slug]/
        └── page.tsx

public/
└── images/
    ├── gallery/                  ← Blog post images
    └── projects/                 ← Work post images
```

---

**Happy Writing! 🎉**

