<script lang="ts">
	import 'iconify-icon';

	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import { enhance } from '$app/forms';
	import toast, { Toaster } from 'svelte-french-toast';
	import { Card, Button } from 'flowbite-svelte';
	import Icon from '@iconify/svelte';

	import { page } from '$app/stores';
	import PayPal from '../components/paypal.svelte';
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	import Message from '../components/message.svelte';

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

	const cards = [
		{
			title: 'Medicine Help',
			description:
				'At our childrens home, we prioritize the health and well-being of every child. Our Medicine Help program ensures that all children receive the necessary medical attention and medications they need.',
			expandedContent:
				'We work closely with healthcare professionals to provide regular health check-ups, vaccinations, and treatment for any illnesses. Our dedicated staff carefully administers and monitors all medications, ensuring each child follows their prescribed regimen. By offering comprehensive medical support, we aim to create a nurturing environment where children can grow healthy and thrive. Your support helps us maintain these vital services and improve the quality of life for our children.',
			imageUrl: '/cards/medicine.png',
			expanded: false
		},

		{
			title: 'Water Delivery',
			description:
				'Water Access to clean, safe water is essential for the health and well-being of our children. Our Water Delivery program ensures that all our facilities have a reliable supply of fresh water.',
			expandedContent:
				'We use advanced filtration systems to provide drinking water and maintain hygienic conditions. By safeguarding this basic necessity, we protect our children from waterborne diseases and promote overall health. Your support allows us to maintain and expand these vital services, ensuring every child has access to the clean water they need to thrive.',
			imageUrl: '/cards/water.png',
			expanded: false
		},

		{
			title: 'Education',
			description:
				'At our childrens home, education is a cornerstone of our mission. We provide a safe and supportive learning environment where children can pursue their academic goals. ',
			expandedContent:
				'Our dedicated teachers and volunteers offer personalized tutoring, access to educational resources, and extracurricular activities to foster a love of learning. By ensuring every child has the opportunity to succeed academically, we aim to open doors to brighter futures. Your contributions help us supply books, school supplies, and other essential materials that make a lasting impact on our childrens education.',
			imageUrl: '/cards/education.png',
			expanded: false
		},
		{
			title: 'Food Delivery',
			description:
				'Nutrition is key to the growth and development of the children in our care. Our Food Delivery program guarantees that every child receives nutritious, balanced meals every day. ',
			expandedContent:
				'We work with nutritionists to plan healthy menus and source fresh ingredients. Our dedicated kitchen staff prepares meals with love and care, catering to the dietary needs of each child. By providing wholesome food, we ensure that our children have the energy and nutrients they need to grow and succeed. Your generosity helps us continue to provide these essential meals and fight hunger within our community.',
			imageUrl: '/cards/food.png',
			expanded: false
		}
	];
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

			<div class="relative w-auto lg:w-[50] p-1 sm:w-1/2">
				<img src="/home/home.png" class="w-full" alt="hero" />
			</div>
		</div>
		<!-- Cards section -->

		<!-- <div class="flex flex-col lg:flex-row gap-4">
			{#each cards as card, i (card.title)}
				<Card>
					<div class="flex flex-col items-center justify-center">
						<div class="flex justify-center items-center my-2">
							<img src={card.imageUrl} class="w-10 h-10 justify-center items-center" alt="hero" />
						</div>
						<h5 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{card.title}</h5>
						<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.description}</p>
						{#if !card.expanded}
							<button on:click={() => (cards[i].expanded = true)} class="flex flex-row">
								<p class="text-mainOrange text-start">Read more</p>
								<Icon icon="formkit:arrowdown" class="w-6 h-6 ms-2 text-mainOrange " />
							</button>
						{/if}
						{#if card.expanded}
							<p class="font-normal text-gray-700 dark:text-gray-400" transition:scale>
								{card.expandedContent}
							</p>
							<button
								on:click={() => (cards[i].expanded = false)}
								transition:scale
								class="flex flex-row"
							>
								<p class="text-mainOrange text-start">Read less</p>
								<Icon icon="formkit:arrowup" class="w-6 h-6 ms-2 text-mainOrange " />
							</button>
						{/if}
					</div>
				</Card>
			{/each}
		</div> -->
	</div>
</div>

<!-- about us section -->
<div class="bg-mainBlue md:pb-20 flex flex-col gap-5" id="AboutUs">
	<div class="flex gap-8 flex-col lg:flex-row w-full">
		<p
			class="text-mainOrange mt-4 text-center justify-center items-start text-3xl lg:text-6xl lg:hidden"
		>
			About Us
		</p>
		<div class="relative w-auto lg:w-[40%] p-1 sm:w-1/2">
			<img src="/about/about.png" class="w-" alt="hero" />
		</div>
		<div class=" flex flex-col gap-3 lg:w-[40%] px-2">
			<p class="text-mainOrange mt-4 text-start justify-start items-start text-3xl lg:flex hidden">
				About Us
			</p>

			<p class="text-4xl font-bold mt-4 lg:text-5xl text-mainWhite">
				We’re a Non-Profit Charity & NGO Organization
			</p>

			<div class="bg-mainOrange rounded-lg w-[100px] h-1"></div>

			<p class="mt-6 lg:mt-10 text-mainWhite">
				Join us and make your life more valuable and useful, be a part of us and contribute to the
				nation and state and the simplest for the environment and yourself
			</p>

			<div class="flex flex-col space-y-4 text-mainWhite">
				<div class="flex items-center space-x-2">
					<div class="w-7 h-7 bg-mainOrange rounded-full flex items-center justify-center">
						<Icon icon="hugeicons:tick-02" height="24" style="color: white" />
					</div>
					<div class="text-sm">Support people in extreme need</div>
				</div>
				<div class="flex items-center space-x-2">
					<div class="w-7 h-7 bg-mainOrange rounded-full flex items-center justify-center">
						<Icon icon="hugeicons:tick-02" height="24" style="color: white" />
					</div>
					<div class="text-sm">Largest global crowdfunding community</div>
				</div>
				<div class="flex items-center space-x-2">
					<div class="w-7 h-7 bg-mainOrange rounded-full flex items-center justify-center">
						<Icon icon="hugeicons:tick-02" height="24" style="color: white" />
					</div>
					<div class="text-sm">Make the world a better place</div>
				</div>

				<div class="flex items-center space-x-2">
					<div class="w-7 h-7 bg-mainOrange rounded-full flex items-center justify-center">
						<Icon icon="hugeicons:tick-02" height="24" style="color: white" />
					</div>
					<div class="text-sm">Share your love for community</div>
				</div>
			</div>
		</div>
	</div>

	<div class="flex items-center flex-col justify-center gap-3">
		<p class="text-4xl font-bold mt-4 lg:text-5xl items-center justify-center flex text-mainWhite">
			What We do
		</p>
		<div
			class="bg-mainOrange rounded-lg w-[200px] lg:w-[300px] justify-center items-center flex h-1"
		></div>
	</div>

	<div class="flex flex-col lg:flex-row gap-4 px-8 items-center justify-center my-10">
		{#each cards as card, i (card.title)}
			<Card>
				<div class="flex flex-col items-center justify-center">
					<div class="flex justify-center items-center my-2">
						<img src={card.imageUrl} class="w-10 h-10 justify-center items-center" alt="hero" />
					</div>
					<h5 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{card.title}</h5>
					<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.description}</p>
					{#if !card.expanded}
						<button on:click={() => (cards[i].expanded = true)} class="flex flex-row">
							<p class="text-mainOrange text-start">Read more</p>
							<Icon icon="formkit:arrowdown" class="w-6 h-6 ms-2 text-mainOrange " />
						</button>
					{/if}
					{#if card.expanded}
						<p class="font-normal text-gray-700 dark:text-gray-400" transition:scale>
							{card.expandedContent}
						</p>
						<button
							on:click={() => (cards[i].expanded = false)}
							transition:scale
							class="flex flex-row"
						>
							<p class="text-mainOrange text-start">Read less</p>
							<Icon icon="formkit:arrowup" class="w-6 h-6 ms-2 text-mainOrange " />
						</button>
					{/if}
				</div>
			</Card>
		{/each}
	</div>
</div>

<!-- About us -->
<div id="Donate">
	<div class="container mx-auto flex mt-4 flex-col items-center gap-4 py-4 sm:gap-24">
		<div class="flex gap-4 flex-col lg:flex-row w-full">
			<div class=" flex flex-col gap-3 lg:w-[40%] p-2">
				<p class="text-4xl font-bold mt-4 lg:text-6xl">
					Let’s Help And Make People Smile By <span class="text-mainBlue">Giving</span> Of Yours
				</p>

				<p class="mt-6 lg:mt-10 text-secondaryGrey">
					By Donating $1 or your used clothes, shoes, e.t.c, We commit to packaging and shipping to
					provide needy families and kids without clothes. Your donation, no matter how much, will
					help us reach more poor communities and empower them.
				</p>

				<div class="flex space-x-4 text-center items-center justify-center mt-4">
					<PayPal />
				</div>
			</div>

			<div class="">
				<!-- Send us a message -->
				<div class=" bg-mainBlue">
					<Message />
				</div>
			</div>
		</div>
	</div>
</div>
