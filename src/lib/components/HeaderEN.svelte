<script lang="ts">
    import { onMount, tick } from "svelte";
    import { quintOut } from "svelte/easing";
    import { fly } from "svelte/transition";
    import { throttle } from "$lib/utils/throttle";

    interface NavItem {
        name: string;
        href: string;
        idTarget: string;
    }

    const navItems: NavItem[] = [
        { name: "Skills", href: "#skills", idTarget: "skills" },
        { name: "Projects", href: "#projects", idTarget: "projects" },
        { name: "Formation", href: "#formation", idTarget: "formation" },
        { name: "ES", href: "/", idTarget: "" },
    ];

    let scrolled = false;
    let openMobileMenu = false;
    let activeSection = "hero";
    let isScrollingProgrammatically = false;
    let scrollTimeout: number;

    const performScrollCalculations = () => {
        if (isScrollingProgrammatically) return;

        scrolled = window.scrollY > 20;

        let currentSectionId = "hero";
        let smallestDistanceToViewportCenter = Infinity;

        const sectionsToWatch = [
            document.getElementById("hero"),
            ...navItems.map((item) => document.getElementById(item.idTarget)),
        ].filter((el) => el !== null) as HTMLElement[];

        const viewportTriggerPointY = window.innerHeight / 3;

        for (const section of sectionsToWatch) {
            const rect = section.getBoundingClientRect();

            if (
                rect.top <= viewportTriggerPointY &&
                rect.bottom > viewportTriggerPointY
            ) {
                currentSectionId = section.id;
                break;
            }
            if (rect.bottom > 0 && rect.top < window.innerHeight) {
                const distanceToTriggerPoint = Math.abs(
                    rect.top - viewportTriggerPointY,
                );
                if (distanceToTriggerPoint < smallestDistanceToViewportCenter) {
                    smallestDistanceToViewportCenter = distanceToTriggerPoint;
                    currentSectionId = section.id;
                }
            }
        }
        if (
            !sectionsToWatch.find((s) => s.id === currentSectionId) &&
            window.scrollY < viewportTriggerPointY
        ) {
            currentSectionId = "hero";
        }

        activeSection = currentSectionId;
    };

    const throttledScrollHandler = throttle(performScrollCalculations, 150);

    const scrollToId = async (id: string) => {
        isScrollingProgrammatically = true;
        activeSection = id;
        if (openMobileMenu) {
            openMobileMenu = false;
        }

        const element = document.getElementById(id);
        if (element) {
            const headerElement = document.querySelector("header");
            const headerHeight = headerElement
                ? headerElement.offsetHeight
                : 70;

            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.scrollY - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }

        clearTimeout(scrollTimeout);
        scrollTimeout = window.setTimeout(() => {
            isScrollingProgrammatically = false;
            performScrollCalculations();
        }, 750);
    };

    const scrollToTop = () => {
        scrollToId("hero");
    };

    onMount(() => {
        window.addEventListener("scroll", throttledScrollHandler, {
            passive: true,
        });
        performScrollCalculations();
        return () => {
            window.removeEventListener("scroll", throttledScrollHandler);
            clearTimeout(scrollTimeout);
        };
    });
</script>

<header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-in-out"
    class:bg-bg={scrolled}
    class:shadow-md={scrolled}
>
    <div class="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 md:h-20">
            <div class="flex-shrink-0">
                <button
                    on:click={scrollToTop}
                    class="text-xl sm:text-2xl font-header font-bold text-primary hover:text-secondary focus:outline-none"
                    aria-label="Go to top"
                >
                    Nahuel N.
                </button>
            </div>

            <nav class="hidden md:flex space-x-5 lg:space-x-6">
                {#each navItems as item (item.name)}
                    {#if item.href.startsWith("#")}
                        <button
                            on:click={() => scrollToId(item.idTarget)}
                            class="px-2.5 py-1.5 rounded-md text-xs sm:text-base font-medium focus:outline-none hover:text-secondary"
                            class:text-secondary={activeSection ===
                                item.idTarget}
                            class:text-primary={activeSection !== item.idTarget}
                            class:font-semibold={activeSection ===
                                item.idTarget}
                        >
                            {item.name}
                        </button>
                    {:else}
                        <a
                            href={item.href}
                            class="px-2.5 py-1.5 rounded-md text-xs sm:text-base font-medium text-primary hover:text-secondary"
                        >
                            {item.name}
                        </a>
                    {/if}
                {/each}
            </nav>

            <div class="md:hidden">
                <button
                    on:click={() => (openMobileMenu = !openMobileMenu)}
                    type="button"
                    class="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-secondary hover:bg-grey/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary"
                    aria-controls="mobile-menu"
                    aria-expanded={openMobileMenu}
                >
                    <span class="sr-only">Open main menu</span>
                    {#if !openMobileMenu}
                        <svg
                            class="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    {:else}
                        <svg
                            class="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    {/if}
                </button>
            </div>
        </div>
    </div>

    {#if openMobileMenu}
        <div
            class="md:hidden fixed inset-x-0 top-16 bg-bg/95 shadow-xl p-4 border-t border-grey/10"
            id="mobile-menu"
            transition:fly={{ y: -20, duration: 200, easing: quintOut }}
        >
            <nav class="flex flex-col space-y-2">
                {#each navItems as item (item.name)}
                    <button
                        on:click={() => scrollToId(item.idTarget)}
                        class="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium focus:outline-none hover:text-secondary"
                        class:text-secondary={activeSection === item.idTarget}
                        class:bg-secondary_div_10_mobile_placeholder={activeSection ===
                            item.idTarget}
                        class:text-primary={activeSection !== item.idTarget}
                    >
                        {item.name}
                    </button>
                {/each}
            </nav>
        </div>
    {/if}
</header>
