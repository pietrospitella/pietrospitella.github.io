<template>
    <div id="about" class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div data-aos="fade-down" class="mx-6">
                <h1 class="text-5xl font-bold">{{ t('aboutTitle') }}</h1>
                <p class="py-6">
                    {{ t('aboutDesc', { expYears: new Date().getFullYear() - 2021 }) }}
                </p>
                <div class="flex justify-center">
                    <ul class="timeline timeline-snap-icon max-md:timeline-compact max-md:timeline-vertical min-lg:timeline-horizontal">
                        <li>
                            <hr />
                            <div class="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="h-5 w-5">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="timeline-start mb-10 md:text-end">
                                <time class="font-mono italic">2022-2024</time>
                                <div class="text-lg font-black">Gianos</div>
                                👨🏻‍💻💼
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div class="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="h-5 w-5">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="timeline-end mb-10">
                                <time class="font-mono italic">2022</time>
                                <div class="text-lg font-black">Vik School</div>
                                👨🏻‍💻🎨
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div class="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="h-5 w-5">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="timeline-start mb-10 md:text-end">
                                <time class="font-mono italic">2022</time>
                                <div class="text-lg font-black">Whip</div>
                                👨🏻‍💻
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div class="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="h-5 w-5">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="timeline-end mb-10">
                                <time class="font-mono italic">2021</time>
                                <div class="text-lg font-black">Boolean</div>
                                🎓
            
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div class="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="h-5 w-5">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="timeline-start mb-10 md:text-end">
                                <time class="font-mono italic">1998</time>
                                <div class="text-lg font-black">Birth</div>
                                🎂
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>