<script lang="ts">
	import 'iconify-icon';

	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import { enhance } from '$app/forms';
	import toast, { Toaster } from 'svelte-french-toast';
	import { Card, Button } from 'flowbite-svelte';
	import Icon from '@iconify/svelte';

	import { page } from '$app/stores';

	import { onMount } from 'svelte';

	export let data: PageData;
	export let isSubmitted = false;

	function smoothScroll(event: {
		preventDefault: () => void;
		currentTarget: { getAttribute: (arg0: string) => any };
	}) {
		event.preventDefault();
		const targetId = event.currentTarget.getAttribute('href');
		const targetElement = document.querySelector(targetId);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}
	}

	let showExpandedContent = false;
</script>

<svelte:head>
	<title>Orenge Children's Home</title>
	<meta name="description" content="Orenge's children's home" />
</svelte:head>

<Toaster />
<!-- whole sections -->

<!-- home section  -->
<div class="h-auto bg-mainWhite p-2 text-mainBlack sm:h-auto lg:mx-auto lg:p-8">
	<div class="container mx-auto flex mt-4 flex-col items-center gap-4 py-4 sm:gap-24" id="Home">
		<div class="flex gap-4 flex-col lg:flex-row w-full">
			<div class=" flex flex-col gap-3 lg:w-[40%]">
				<p class="text-mainBlue mt-4 text-start justify-start items-start">
					-- TRUSTED CHILDREN’S HOME
				</p>

				<p class="text-4xl font-bold mt-4 lg:text-6xl">
					Let’s Help And Make People Smile By <span class="text-mainBlue">Giving</span> Of Yours
				</p>

				<p class="mt-6 lg:mt-10 text-secondaryGrey">
					No matter how small the donation you give will mean a lot to them, let's donate now to
					help fellow humans in need
				</p>

				<div class="w-full items-center justify-center flex lg:items-start lg:justify-start">
					<a
						href="#Donate"
						on:click={smoothScroll}
						class="flex w-[200px] justify-center items-center text-mainWhite rounded-md my-4 lg:mt-10 bg-mainOrange px-4 py-3"
					>
						Donate
					</a>
				</div>
			</div>

			<div class="relative w-auto lg:w-[505] p-1 sm:w-1/2">
				<img src="/home/home.png" class="w-full" alt="hero" />
			</div>
		</div>
		<!-- Cards section -->

		<div class="flex flex-col lg:flex-row">
			<div class="space-y-4">
				<Card>
					<div class="flex flex-col items-center justify-center">
						<div class=" flex justify-center items-center my-2">
							<img
								src="/cards/medicine.png"
								class="w-10 h-10 justify-center items-center"
								alt="hero"
							/>
						</div>

						<h5 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Medicine Help</h5>
						<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
							Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
							chronological order.
						</p>

						{#if !showExpandedContent}
							<button
								on:click={() => (showExpandedContent = !showExpandedContent)}
								class="flex flex-row"
							>
								<p class="text-mainOrange text-start">Read more</p>
								<Icon icon="formkit:arrowdown" class="w-6 h-6 ms-2 text-mainOrange " />
							</button>
						{/if}

						{#if showExpandedContent}
							<p class="font-normal text-gray-700 dark:text-gray-400">
								This is the expanded content. It can contain additional paragraphs or details that
								were previously hidden.
							</p>

							<button
								on:click={() => (showExpandedContent = !showExpandedContent)}
								class="flex flex-row"
							>
								<p class="text-mainOrange text-start">Read less</p>
								<Icon icon="formkit:arrowup" class="w-6 h-6 ms-2 text-mainOrange " />
							</button>
						{/if}
					</div>
				</Card>
			</div>
		</div>
	</div>
</div>

<!-- products section -->
<div class="bg-mainWhite md:pb-20">
	<div class="container mx-auto max-w-5xl p-4" id="Products">
		<div class="w-full">
			<h1 class="flex justify-center pb-3 text-3xl font-semibold capitalize">our products</h1>
		</div>
		<div class="z-40 flex w-full flex-col justify-between"></div>
	</div>
</div>
<!-- About us -->
<div id="AboutUs">
	<div
		class=" w-full bg-mainBlue bg-[url('/assets/about.webp')] bg-center bg-no-repeat px-4 py-8 opacity-100 lg:bg-cover"
	>
		<div class="container mx-auto flex w-full max-w-5xl flex-col gap-6 lg:flex-row">
			<div
				class="flex items-center justify-center pt-4 text-xl text-white lg:w-1/3 lg:grow lg:items-start lg:pl-4 lg:text-3xl"
			>
				<div class="flex items-center justify-center gap-2">
					<p class="shrink-0 font-bold capitalize">About us</p>
				</div>
			</div>

			<div class="flex flex-col gap-4 px-6 sm:items-center lg:w-auto lg:flex-row lg:justify-around">
				<div class=" text-bold flex flex-col gap-4 sm:items-center md:items-start">
					<div
						class="flex flex-col text-xl font-semibold uppercase tracking-wider text-mainWhite sm:text-5xl lg:gap-4 lg:tracking-normal"
					>
						<h1
							class="bg-gradient-to-r from-mainWhite from-40% to-mainBlack bg-clip-text text-transparent lg:from-mainWhite"
						>
							proptech solutions
						</h1>
						<h1 class="bg-gradient-to-r from-mainWhite to-mainBlack bg-clip-text text-transparent">
							crafted to redefine
						</h1>
						<h1>property management</h1>
					</div>
					<div class="flex flex-col gap-4 pt-3 text-sm text-mainWhite md:items-center md:text-lg">
						<p>
							At Tajji, we are on a mission to build seamless, intuitive experiences that foster
							harmonious landlord-tenant relationships and streamline property management processes.
						</p>
					</div>
					<div class="flex w-full items-center justify-start pt-3">
						<button
							class="rounded-full border border-mainOrange bg-mainOrange px-5 py-2 capitalize text-mainWhite hover:border-mainOrange hover:bg-transparent hover:text-mainOrange md:text-lg"
							>Join our Community</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
