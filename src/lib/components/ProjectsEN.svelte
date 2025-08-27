<script lang="ts">
    import Container from "./Container.svelte";
    import ExternalLinkIcon from "./ExternalLinkIcon.svelte";
    import SectionHeader from "./SectionHeader.svelte";

    interface Project {
        title: string;
        description: string;
        link: string;
        image?: string;
        tags?: string[];
    }

    const projects: Project[] = [
        {
            title: "Slurp Tools",
            description:
                "Virtual editor with tools to scan, edit, and manage documents and images, designed for personal or professional use, developed with Go, SvelteKit, and Python.",
            link: "https://github.com/navalesnahuel/slurp-tools",
            tags: ["Golang", "SvelteKit", "Python", "Docker"],
        },

        {
            title: "Nasdaq Vision",
            description:
                "Financial analysis platform designed to process and visualize stock market data in real time, using Spark, Airflow, Streamlit, and MinIO.",
            link: "https://github.com/navalesnahuel/nasdaqvision",
            tags: [
                "Apache Spark",
                "Airflow",
                "Streamlit",
                "MinIO",
                "Python",
                "PostgreSQL",
            ],
        },

        {
            title: "FastAPI Template Ready for Production",
            description:
                "Professional template to build RESTful APIs with FastAPI. Includes OAuth2 authentication with JWT, automated testing with Pytest, continuous integration with GitHub Actions, and migration management with Alembic for PostgreSQL.",
            link: "https://github.com/navalesnahuel/fastapi-template",
            tags: [
                "FastAPI",
                "OAuth2",
                "JWT",
                "Pytest",
                "GitHub Actions",
                "PostgreSQL",
                "Alembic",
            ],
        },
    ];
</script>

<section class="projects py-12 md:py-20 bg-bg" id="projects">
    <Container xPadding="px-4 sm:px-6 lg:px-8">
        <SectionHeader
            title="Featured Projects"
            subtitle="Some of my favorite works."
        />
        <div class="projects-content mt-6 md:mt-8">
            <ul class="projects-list space-y-6 md:space-y-8">
                {#each projects as project (project.title)}
                    <li
                        class="project-item flex flex-col bg-grey/5 p-4 xxs:p-5 sm:p-6 rounded-lg shadow-md
                               border border-grey/10 hover:border-secondary/40
                               hover:shadow-secondary/5 hover:shadow-xl group"
                    >
                        <h3
                            class="project-item-title text-md xxs:text-lg sm:text-xl font-header font-semibold text-primary mb-2 sm:mb-3"
                        >
                            {project.title}
                        </h3>
                        <p
                            class="project-item-description text-xs xxs:text-sm sm:text-base text-grey leading-normal mb-3 xxs:mb-4 sm:mb-5 flex-grow"
                        >
                            {project.description}
                        </p>

                        {#if project.tags && project.tags.length > 0}
                            <div
                                class="project-item-tags flex flex-wrap gap-1 xxs:gap-1.5 sm:gap-2 mb-3 xxs:mb-4 sm:mb-5"
                            >
                                {#each project.tags as tag (tag)}
                                    <span
                                        class="tag text-[10px] sm:text-sm xxs:text-xs font-medium bg-secondary/10 text-secondary opacity-90 px-1.5 xxs:px-2 py-0.5 rounded"
                                    >
                                        {tag}
                                    </span>
                                {/each}
                            </div>
                        {/if}

                        {#if project.link && project.link !== "#"}
                            <a
                                href={project.link}
                                class="project-item-link self-start inline-flex items-center space-x-1 xxs:space-x-1.5 text-secondary font-medium
                                       hover:text-primary group-hover:underline mt-auto text-[11px] xxs:text-xs sm:text-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>View Project</span>
                                <ExternalLinkIcon
                                    class="w-3 h-3 xxs:w-3.5 xxs:h-3.5 sm:w-4 sm:h-4"
                                />
                            </a>
                        {/if}
                    </li>
                {/each}
            </ul>
        </div>
    </Container>
</section>
