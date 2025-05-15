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
    "Tres años de aprendizaje autodidacta intensivo en backend y data engineering, con énfasis en tecnologías modernas y desarrollo práctico.",
    "Empecé con Python para análisis y procesamiento de datos, utilizando tecnologías como Apache Spark, Pandas y PowerBI.",
    "Luego, amplié mi experiencia hacia el desarrollo Backend con FastAPI, y finalmente me especialicé en Golang para construir aplicaciones y servicios backend rápidos y eficientes.",
    "Actualmente, combino Golang para servicios backend y Python para procesamiento y análisis de datos, considerando que esta combinación es adecuada según las fortalezas de cada lenguaje."
  ];
</script>

<section class="formation py-12 md:py-20 bg-bg" id="formation">
  <Container showBorder={false} xPadding="px-4 sm:px-6 lg:px-8">
    <SectionHeader
      title="Mi Trayectoria de Aprendizaje"
      subtitle="Fundamentos y dedicación continua al desarrollo."
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
          Cursos Destacados
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
                  title="Ver certificado"
                >
                  <ExternalLinkIcon class="w-4 h-4 xxs:w-5 xxs:h-5" />
                  <span class="sr-only">Ver certificado</span>
                </a>
              {/if}
            </div>
            {#if curso.year}
              <p class="text-xs text-grey/70 mt-1.5 sm:mt-2">
                Finalizado en: {curso.year}
              </p>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </Container>
</section>
