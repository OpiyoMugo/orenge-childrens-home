<script lang="ts">
	import 'iconify-icon';

	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import { enhance } from '$app/forms';
	import toast, { Toaster } from 'svelte-french-toast';

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
	console.log('root initializing');
	onMount(() => {
		console.log('root mounted');
	});
	const launchWhatsApp = () => {
		window.open('https://chat.whatsapp.com/It5g435ePBZJA57thggARw', '_blank');
	};
	console.log($page);
</script>

<svelte:head>
	<title>Orenge Children's Home</title>
	<meta
		name="description"
		content="Orenge's children's home"
	/>
	
</svelte:head>

<Toaster />
<!-- whole sections -->
<img src="/assets/linepattern.svg" alt="linepattern" class="absolute right-0 top-0 z-30" />
<!-- experience section  -->
<div class="h-auto bg-mainBlue p-2 text-mainWhite sm:h-auto lg:mx-auto lg:p-8">
	<!-- experience the epitome section -->
	<div
		class="container mx-auto flex max-w-5xl flex-col items-center gap-4 py-4 sm:gap-24"
		id="Home"
	>
		<img src="/assets/experience.svg" class="hidden sm:block" alt="experience" />
		<img src="/assets/experiencesmall2.svg" class="sm:hidden" alt="experience" />
		<div class="flex flex-col gap-16 sm:flex-row">
			<div class="flex flex-col justify-center gap-2 tracking-wide sm:w-1/2 sm:text-lg">
				<p>Tajji is the definitive platform that seamlessly</p>
				<p>merges property management, property</p>
				<p>discovery, and exploration into one</p>
				<p>unparalleled real estate experience.</p>
			</div>
			<!-- pointer section -->
			<div class="relative w-auto p-1 sm:w-1/2">
				<img
					src="https://tajji-landing-page-media.ams3.cdn.digitaloceanspaces.com/landing-page/hero.webp"
					class="w-full rotate-6 rounded-full"
					alt="hero"
				/>
				<a href="#Products" on:click={smoothScroll}>
					<iconify-icon
						icon="iconamoon:arrow-top-right-1"
						width="40"
						height="40"
						class="absolute right-4 top-4 z-40 rounded-full bg-mainOrange p-2 text-black"
					/>
				</a>
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
							on:click={launchWhatsApp}>Join our Community</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	div div nav button.active {
		@apply border-b border-mainOrange;
	}
	.text-stroke {
		-webkit-text-fill-color: transparent;
		-webkit-text-stroke-width: 1px; /* Adjust the stroke width as needed */
		-webkit-text-stroke-color: gray; /* Set the stroke color to white */
	}
</style>
