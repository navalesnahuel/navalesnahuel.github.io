<script lang="ts">
  import Container from "./Container.svelte";
  import SectionHeader from "./SectionHeader.svelte";
  import Icon from "@iconify/svelte";

  type SkillView = "tecnologias" | "herramientas" | "conceptos";
  let activeView: SkillView = "tecnologias";

  interface Skill {
    name: string;
    iconString: string | null;
    colorClass?: string;
  }

  interface CategorizedSkills {
    tecnologias: Skill[];
    herramientas: Skill[];
    conceptos: Skill[];
  }

  const allSkills: CategorizedSkills = {
    tecnologias: [
      { name: "Golang", iconString: "devicon:go" },
      {
        name: "Python",
        iconString: "devicon:python",
        colorClass: "text-[#3776AB]",
      },
      { name: "PostgreSQL", iconString: "devicon:postgresql" },
      {
        name: "Pandas",
        iconString: "devicon:pandas",
        colorClass: "text-[#130654]",
      },

      { name: "Docker", iconString: "logos:docker-icon" },
      {
        name: "Linux",
        iconString: "devicon:linux",
        colorClass: "text-primary",
      },

      { name: "Apache Spark", iconString: "devicon:apachespark" },
      { name: "Git", iconString: "devicon:git" },
      {
        name: "FastAPI",
        iconString: "devicon:fastapi",
        colorClass: "text-[#009688]",
      },
      {
        name: "MongoDB",
        iconString: "skill-icons:mongodb",
      },

      {
        name: "Redis",
        iconString: "logos:redis",
      },

      {
        name: "Kafka",
        iconString: "simple-icons:apachekafka",
      },

      { name: "Delta Lake", iconString: "simple-icons:delta" },
    ],
    herramientas: [
      { name: "NeoVim", iconString: "devicon:neovim" },
      { name: "Airflow", iconString: "devicon:apacheairflow" },
      { name: "Jupyter", iconString: "devicon:jupyter" },
      { name: "Power BI", iconString: "logos:microsoft-power-bi" },
      {
        name: "Databricks",
        iconString: "simple-icons:databricks",
        colorClass: "text-[#FF3621]",
      },
      { name: "Google Cloud", iconString: "material-icon-theme:gcp" },
      { name: "Microsoft Azure", iconString: "material-icon-theme:azure" },
      {
        name: "Apache Hive",
        iconString: "simple-icons:apachehive",
        colorClass: "text-[#FDEE21]",
      },
      {
        name: "MinIO",
        iconString: "simple-icons:minio",
        colorClass: "text-[#C72C41]",
      },
    ],
    conceptos: [
      { name: "CI/CD", iconString: "clarity:ci-cd-line" },
      { name: "REST APIs", iconString: "mdi:api", colorClass: "text-primary" },

      {
        name: "Data Warehousing",
        iconString: "mdi:warehouse",
        colorClass: "text-primary",
      },
      {
        name: "Data Cleansing",
        iconString: "mdi:broom",
        colorClass: "text-primary",
      },
      {
        name: "Data Visualization",
        iconString: "mdi:chart-bar",
        colorClass: "text-primary",
      },
      {
        name: "ETL",
        iconString: "mdi:sync-circle",
        colorClass: "text-primary",
      },
      {
        name: "Data Lakes",
        iconString: "mdi:waves-arrow-up",
        colorClass: "text-primary",
      },
      {
        name: "Web Scraping",
        iconString: "mdi:spider-web",
        colorClass: "text-primary",
      },
      {
        name: "Auth",
        iconString: "mdi:shield-lock-outline",
        colorClass: "text-primary",
      },
      {
        name: "Testing",
        iconString: "mdi:test-tube",
        colorClass: "text-primary",
      },
    ],
  };

  $: currentSkills = allSkills[activeView] ?? [];

  const baseIconSize = "text-3xl";
  const desktopIconSize = "sm:text-4xl lg:text-5xl";

  const baseTextSize = "text-[10px]";
  const desktopTextSize = "xxs:text-xs sm:text-sm";

  const basePlaceholderHeight = "h-[1.875rem]";
  const desktopPlaceholderHeight = "sm:h-[2.25rem] lg:h-[3rem]";
</script>

<section class="skills py-12 md:py-20 bg-bg" id="skills">
  <Container xPadding="px-4 sm:px-6 lg:px-8">
    <SectionHeader
      title="Habilidades"
      subtitle="Las tecnologías que manejo y los conceptos que aplico."
    />

    <div class="skills-content-wrapper mt-6 md:mt-8">
      <div class="flex justify-center sm:justify-start mb-8 md:mb-10">
        <div
          class="inline-flex p-0.5 rounded-lg bg-grey/10 border border-grey/20"
        >
          <button
            type="button"
            on:click={() => (activeView = "tecnologias")}
            class="px-3 py-1 xxs:px-4 xxs:py-1.5 text-xs sm:text-sm font-medium rounded-[7px] focus:outline-none"
            class:bg-secondary={activeView === "tecnologias"}
            class:text-bg={activeView === "tecnologias"}
            class:shadow-md={activeView === "tecnologias"}
            class:text-primary={activeView !== "tecnologias"}
            class:opacity-70={activeView !== "tecnologias"}
            class:hover:bg-grey={activeView !== "tecnologias"}
            class:hover:opacity-100={activeView !== "tecnologias"}
          >
            Tecnologías
          </button>
          <button
            type="button"
            on:click={() => (activeView = "herramientas")}
            class="px-3 py-1 xxs:px-4 xxs:py-1.5 text-xs sm:text-sm font-medium rounded-[7px] focus:outline-none ml-0.5"
            class:bg-secondary={activeView === "herramientas"}
            class:text-bg={activeView === "herramientas"}
            class:shadow-md={activeView === "herramientas"}
            class:text-primary={activeView !== "herramientas"}
            class:opacity-70={activeView !== "herramientas"}
            class:hover:bg-grey={activeView !== "herramientas"}
            class:hover:opacity-100={activeView !== "herramientas"}
          >
            Herramientas
          </button>
          <button
            type="button"
            on:click={() => (activeView = "conceptos")}
            class="px-3 py-1 xxs:px-4 xxs:py-1.5 text-xs sm:text-sm font-medium rounded-[7px] focus:outline-none ml-0.5"
            class:bg-secondary={activeView === "conceptos"}
            class:text-bg={activeView === "conceptos"}
            class:shadow-md={activeView === "conceptos"}
            class:text-primary={activeView !== "conceptos"}
            class:opacity-70={activeView !== "conceptos"}
            class:hover:bg-grey={activeView !== "conceptos"}
            class:hover:opacity-100={activeView !== "conceptos"}
          >
            Conceptos
          </button>
        </div>
      </div>

      <ul
        class="skills-list grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 xxs:gap-2.5 xs:gap-3 sm:gap-4"
      >
        {#each currentSkills as skill (skill.name)}
          <li
            class="skill-item flex flex-col items-center justify-center
							text-center bg-grey/5 hover:bg-grey/10
							rounded-lg p-2 xxs:p-2.5 xs:p-3 sm:p-4 aspect-square group cursor-default
                            border border-transparent hover:border-grey/10 hover:shadow-md"
            title={skill.name}
          >
            {#if skill.iconString}
              <Icon
                icon={skill.iconString}
                class="{baseIconSize} {desktopIconSize} leading-none group-hover:scale-105 {skill.colorClass ||
                  'text-primary'}"
              />
            {:else}
              <div
                class="{basePlaceholderHeight} {desktopPlaceholderHeight} w-full"
              ></div>
            {/if}
            <span
              class="mt-1.5 xxs:mt-2 {baseTextSize} {desktopTextSize} font-normal text-primary opacity-80 leading-tight line-clamp-2"
            >
              {skill.name}
            </span>
          </li>
        {/each}
      </ul>
    </div>
  </Container>
</section>
