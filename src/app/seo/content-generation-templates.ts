export const CONTENT_GENERATION_TEMPLATES = {
  /**
   * Skeleton generator for hyper-local landing pages
   */
  generateLocalityPageContent: (
    serviceName: string,
    locationName: string,
    landmark: string
  ): string => {
    return `
      <article class="semantic-content-silo">
        <h2>Licensed ${serviceName} in ${locationName}</h2>
        <p>
          Thulasi Engineers & Contractors delivers premier turnkey <strong>${serviceName.toLowerCase()} services in ${locationName}</strong>. 
          Our registered office manages entire regulatory approvals under the ${locationName} municipal zoning guidelines.
        </p>
        <p>
          With major completed landmarks near <strong>${landmark}</strong>, we are Trichy's leading engineering team, offering concrete structural design, brickwork, and fixtures.
        </p>
      </article>
    `.trim();
  },

  /**
   * Skeleton generator for detailed project case studies
   */
  generateProjectCaseStudyContent: (project: {
    title: string;
    location: string;
    timeline: string;
    area: string;
  }): string => {
    return `
      <section class="case-study-silo">
        <h2>Case Study: ${project.title}</h2>
        <p>
          This engineering project showcases standard-setting turnkey construction executed in <strong>${project.location}</strong>. 
          Covering a built-up area of <strong>${project.area}</strong>, the structure was successfully completed over a timeline of <strong>${project.timeline}</strong>.
        </p>
      </section>
    `.trim();
  }
};
