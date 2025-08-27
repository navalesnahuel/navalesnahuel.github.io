<script lang="ts">
    import Container from "./Container.svelte";
    import Icon from "@iconify/svelte";

    const title = "Hello, I'm Nahuel";
    const subtitleBase = "Developer";
    const subtitleHighlight = "Backend.";

    const email = "navalesnahuel@gmail.com";
    const githubLink = "https://github.com/navalesnahuel";
    const linkedinLink = "https://www.linkedin.com/in/navalesnahuel/";
    const whatsappLink = "https://wa.me/+541167619266";
    const resumeLink = "/CV-Nahuel-Navales.pdf";
</script>

<section
    class="hero min-h-screen flex flex-col items-center justify-center text-left py-16 sm:py-20 bg-bg relative"
    id="hero"
>
    <Container showBorder={false}>
        <div>
            <p
                class="text-sm sm:text-base font-semibold text-principal mb-5 sm:mb-6 flex items-center"
            >
                <span
                    class="inline-block w-2 h-2 bg-green rounded-full mr-2 animate-pulse"
                ></span>
                Available for work.
            </p>

            <h1
                class="text-4xl xxs:text-5xl xs:text-6xl sm:text-6xl md:text-7xl font-header font-bold text-primary mb-0 sm:mb-0 leading-tight sm:leading-none"
            >
                {title}
            </h1>
            <h2
                class="text-xl xxs:text-2xl xs:text-3xl sm:text-3xl md:text-5xl font-header font-semibold text-grey opacity-90 mb-6 sm:mb-6 leading-snug sm:leading-normal"
            >
                {subtitleBase}
                <span class="text-primary">{subtitleHighlight}</span>
            </h2>

            <p
                class="text-sm xs:text-base sm:text-lg md:text-xl font-body text-primary opacity-80 leading-relaxed mb-8 sm:mb-10"
            >
                I mainly work with <span class="font-semibold text-golang"
                    >Golang</span
                >
                to develop backend services, and I use
                <span class="font-semibold text-secondary">Python</span> for data
                processing and analysis. I like to keep things simple, understand
                what’s happening, and avoid unnecessary solutions.
            </p>

            <div
                class="actions grid grid-cols-2 gap-x-3 gap-y-3 sm:flex sm:flex-row sm:gap-4"
            >
                <a
                    href="mailto:{email}"
                    class="action-button col-span-2 group flex items-center justify-center space-x-2 text-primary border border-primary/40 font-medium py-2.5 px-4 rounded-lg text-xs xxs:text-sm sm:text-base
                           hover:border-primary/70 hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg focus:ring-primary/70 w-full"
                >
                    <Icon
                        icon="material-symbols:mail"
                        class="w-6 h-6 xxs:w-5 xxs:h-5 text-grey group-hover:text-primary/80 transition-colors"
                    />
                    <span>Email</span>
                </a>
                <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="action-button group flex items-center justify-center space-x-2 text-primary border border-primary/40 font-medium py-2.5 px-4 rounded-lg text-xs xxs:text-sm sm:text-base
                           hover:border-primary/70 hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg focus:ring-primary/70 w-full"
                >
                    <Icon
                        icon="mdi:github"
                        class="w-6 h-6 xxs:w-5 xxs:h-5 text-grey group-hover:text-primary/80 transition-colors"
                    />
                    <span>GitHub</span>
                </a>
                <a
                    href={linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="action-button group flex items-center justify-center space-x-2 text-primary border border-primary/40 font-medium py-2.5 px-4 rounded-lg text-xs xxs:text-sm sm:text-base
                           hover:border-primary/70 hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg focus:ring-primary/70 w-full"
                >
                    <Icon
                        icon="mdi:linkedin"
                        class="w-6 h-6 xxs:w-5 xxs:h-5 text-grey group-hover:text-primary/80 transition-colors"
                    />
                    <span>LinkedIn</span>
                </a>
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="action-button group flex items-center justify-center space-x-2 text-primary border border-primary/40 font-medium py-2.5 px-4 rounded-lg text-xs xxs:text-sm sm:text-base
                           hover:border-primary/70 hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg focus:ring-primary/70 w-full"
                >
                    <Icon
                        icon="ic:baseline-whatsapp"
                        class="w-6 h-6 xxs:w-5 xxs:h-5 text-grey group-hover:text-primary/80 transition-colors"
                    />
                    <span>WhatsApp</span>
                </a>
                <a
                    href={resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="action-button group flex items-center justify-center space-x-2 text-primary border border-primary/40 font-medium py-2.5 px-4 rounded-lg text-xs xxs:text-sm sm:text-base
                           hover:border-primary/70 hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg focus:ring-primary/70 w-full"
                >
                    <Icon
                        icon="tabler:pdf"
                        class="w-6 h-6 xxs:w-5 xxs:h-5 text-grey group-hover:text-primary transition-colors"
                    />
                    <span>Resume</span>
                </a>
            </div>
        </div>
    </Container>

    <div
        class="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
    >
        <svg
            class="w-7 h-7 sm:w-8 sm:h-8 text-secondary"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path d="M19 9l-7 7-7-7"></path>
        </svg>
    </div>
</section>
