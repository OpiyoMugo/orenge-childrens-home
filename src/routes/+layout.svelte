<script>
	import { goto } from '$app/navigation';
	import '../app.css';
	import { fly } from 'svelte/transition';

	import { tick } from 'svelte';

	$: isOpen = false;

	/**
	 * @param {{ preventDefault: () => void; currentTarget: { getAttribute: (arg0: string) => any; }; }} event
	 */
	async function smoothScroll(event) {
		isOpen = false;

		event.preventDefault();
		const targetId = event.currentTarget.getAttribute('href');
		const targetElement = document.querySelector(targetId);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<div class="relative">
	<nav
		class="fixed top-0 right-0 left-0 z-50 flex items-center justify-between bg-mainBlue px-4 py-3 text-mainWhite opacity-100 lg:relative lg:top-0 lg:z-auto lg:mx-auto lg:px-10 lg:py-8"
	>
		<div>
			<a href="/" class="flex items-center justify-center gap-3">
				<span class="hidden text-xl tracking-widest lg:block">Orenge's Children Home</span>
			</a>
		</div>
		<button
			on:click={() => {
				console.log('clicked');
				isOpen = !isOpen;
			}}
			class="flex items-center lg:hidden"
		>
			{#if isOpen}
				<iconify-icon height="24" weight="24" class="" icon="iconamoon:close-fill" />
			{:else}
				<iconify-icon
					height="24"
					width="24"
					class=""
					icon="iconamoon:menu-burger-horizontal-bold"
				/>
			{/if}
		</button>
		<!-- larger screens menu -->
		<div
			class="w-[60%] hidden h-12 justify-center capitalize lg:z-50 lg:block lg:flex-row lg:space-x-8"
		>
			<a
				href="#Home"
				on:click={smoothScroll}
				class=" transform transition-all duration-200 ease-in-out text-xl hover:text-mainOrange"
				>home</a
			>
			<a
				href="#AboutUs"
				on:click={smoothScroll}
				class=" transform transition-all duration-200 ease-in-out text-xl hover:text-mainOrange"
				>about us</a
			>
			<a
				href="#Contact"
				on:click={smoothScroll}
				class="transform transition-all duration-200 ease-in-out text-xl hover:text-mainOrange"
				>contact
			</a>
			<a
				href="#Donate"
				on:click={smoothScroll}
				class="transform rounded-lg border-mainOrange bg-mainOrange px-6 py-4 text-mainWhite transition-all duration-200 ease-in-out hover:scale-125 hover:border-mainOrange hover:bg-transparent hover:text-mainOrange"
			>
				donate
			</a>
		</div>
	</nav>

	<!-- mobile menu -->
	{#if isOpen}
		<div
			in:fly={{ x: 200, duration: 200 }}
			out:fly={{ x: 200, duration: 400 }}
			class="fixed top-12 right-2 z-50 w-44 rounded-xl bg-mainBlue p-4 text-sm capitalize text-mainWhite opacity-90 lg:hidden lg:p-0"
		>
			<div class="flex w-full flex-col items-center gap-4">
				<a
					href="#Home"
					on:click={smoothScroll}
					class="flex w-full justify-center px-4 hover:text-mainOrange">home</a
				>
				<a
					href="#AboutUs"
					on:click={smoothScroll}
					class="flex w-full justify-center px-4 hover:text-mainOrange">about us</a
				>

				<a
					href="#Contact"
					on:click={smoothScroll}
					class="flex w-full justify-center px-4 hover:text-mainOrange"
					>contacts
				</a>
				<a
					href="#Donate"
					on:click={smoothScroll}
					class="flex w-full justify-center rounded-full bg-mainOrange px-4 py-1"
				>
					donate
				</a>
			</div>
		</div>
	{/if}
	<slot><!-- optional fallback --></slot>
	<footer class="bottom-0  bg-mainBlue px-8 py-10 text-white items-center justify-center flex flex-col lg:flex-row">
		<div class="flex items-center justify-center md:ml-10">Designed by VOXART Studios</div>
		<div class="flex items-center justify-center md:ml-10">
			© VOXART. {new Date().getFullYear()}. All rights reserved
		</div>
	</footer>
</div>
