<script lang="ts">
  import Container from "./Container.svelte";
  import SectionHeader from "./SectionHeader.svelte";
  import ExternalLinkIcon from "./ExternalLinkIcon.svelte";

  interface Curso {
    name: string;
    institution: string;
    year?: string; 
    certificateLink?: string; 
  }

  const cs50x: Curso = {
    name: "CS50x: Introduction to Computer Science",
    institution: "Harvard University (via edX)",
    year: "2024",
    certificateLink:
      "https://certificates.cs50.io/f67d5eb8-b545-48a2-ab13-dc4261256de5.pdf?size=letter",
  };

  const cs50p: Curso = {
    name: "CS50p: Introduction to Programming with Python",
    institution: "Harvard University (via edX)",
    year: "2023",
    certificateLink:
      "https://certificates.cs50.io/67c0344d-e4a9-437a-a4f8-c8eafc72ca8c.pdf?size=letter",
  };

  const learningJourney = [
    "Three years of intensive self-taught learning in backend and data engineering, with a focus on modern technologies and hands-on development.",
    "I started with Python for data analysis and processing, using technologies such as Apache Spark, Pandas, and PowerBI.",
    "Then, I expanded my experience into Backend development with FastAPI, and finally specialized in Golang to build fast and efficient backend applications and services.",
    "Currently, I combine Golang for backend services and Python for data processing and analysis, considering this combination suitable according to the strengths of each language."
  ];
</script>

<section class="formation py-12 md:py-20 bg-bg" id="formation">
  <Container showBorder={false} xPadding="px-4 sm:px-6 lg:px-8">
    <SectionHeader
      title="My Learning Journey"
      subtitle="Foundations and continuous dedication to development."
    />

    <div class="content-wrapper mt-6 md:mt-8 space-y-8 md:space-y-10">
      <div class="narrative space-y-4">
        {#each learningJourney as paragraph}
            <p class="text-sm xs:text-base sm:text-lg text-primary opacity-80 leading-relaxed">
                {paragraph}
            </p>
        {/each}
      </div>

      <div class="cursos space-y-4 sm:space-y-5">
        <h3
          class="text-lg xxs:text-xl sm:text-2xl font-header font-semibold text-secondary mb-4 sm:mb-5"
        >
          Featured Courses
        </h3>

        {#each [cs50x, cs50p] as curso (curso.name)}
          <div
            class="curso-item p-4 xxs:p-5 sm:p-6 bg-grey/5 rounded-lg border border-grey/10"
          >
            <div class="flex justify-between items-start gap-3">
              <div class="flex-grow">
                <h4
                  class="text-base xxs:text-lg sm:text-xl font-medium text-primary mb-0.5"
                >
                  {curso.name}
                </h4>
                <p class="text-xs xxs:text-sm text-grey">{curso.institution}</p>
              </div>
              {#if curso.certificateLink}
                <a
                  href={curso.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-secondary hover:text-primary opacity-80 hover:opacity-100 ml-2 xxs:ml-4 flex-shrink-0"
                  title="View Certificate"
                >
                  <ExternalLinkIcon class="w-4 h-4 xxs:w-5 xxs:h-5" />
                  <span class="sr-only">View Certificate</span>
                </a>
              {/if}
            </div>
            {#if curso.year}
              <p class="text-xs text-grey/70 mt-1.5 sm:mt-2">
                Completed in: {curso.year}
              </p>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </Container>
</section>
