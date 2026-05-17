export interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
}

export const EDITORIAL_ENGINE = {
  /**
   * Generates a Table of Contents dynamically from raw markdown headings
   */
  generateTableOfContents: (markdown: string): TableOfContentsItem[] => {
    const headingLines = markdown.split('\n').filter(line => line.startsWith('##'));
    return headingLines.map((line, idx) => {
      const level = line.split(' ')[0].length; // number of '#'
      const text = line.replace(/^#+\s+/, '').trim();
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      return { id: `toc-${idx}-${id}`, text, level };
    });
  },

  /**
   * Semantic Related Article Algorithm
   */
  getRelatedArticles: (
    currentCategory: string,
    currentSlug: string,
    allPosts: any[],
    limit = 3
  ) => {
    return allPosts
      .filter(post => post.data.category === currentCategory && post.slug !== currentSlug)
      .slice(0, limit);
  }
};
