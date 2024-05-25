<script lang="ts">
	import Icon from '@iconify/svelte';
	let fullName = ''; // Updated variable name
	let email = '';
	let phoneNumber = ''; // New variable for phone number
	let message = '';
</script>

<!-- Main div -->
<div class="bg-gray-100 lg:bg-mainWhite lg:rounded-xl">
	<div class="flex flex-col gap-2 px-2 py-5 items-center justify-center">
		<p class="text-center text-4xl font-extrabold">BECOME A VOLUNTEER</p>

		<p class="justify-center text-center">
			We're excited to welcome new volunteers Fill out the form below to join our team.
		</p>
	</div>

	<div>
		<form
			class="gap-6"
			target="_blank"
			action="https://formsubmit.co/lazzohchainz@gmail.com"
			method="POST"
		>
			<input type="hidden" name="_template" value="box" />

			<div class="flex flex-col gap-3 p-4 text-center items-center">
				<label class="block text-sm mb-2">
					<input
						required
						type="text"
						name="Full Name"
						class="border border-mainBlack focus:outline-mainOrange p-5"
						placeholder="Full Name"
						bind:value={fullName}
					/>
				</label>
				<label class="block text-sm mb-2">
					<input
						required
						type="email"
						name="email"
						class="border border-mainBlack focus:outline-mainOrange p-5"
						placeholder="Email Address"
						bind:value={email}
					/>
				</label>
				<label class="block text-sm mb-2">
					<input
						required
						type="tel"
						name="Phone Number"
						class="border border-mainBlack focus:outline-mainOrange p-5"
						placeholder="Phone Number"
						bind:value={phoneNumber}
					/>
				</label>
				<label class="block text-wrap text-sm text-start mb-2">
					<textarea
						required
						name="Message"
						class="w-full h-[150px] border border-mainBlack focus:outline-mainOrange p-3"
						placeholder="How can you contribute?"
						bind:value={message}
					/>
				</label>
				<button
					type="submit"
					class="h-[60px] w-[200px] ml-4 text-xl flex flex-row gap-3 items-center justify-center p-4 border border-mainGold bg-mainGold text-mainWhite hover:border-mainGold hover:bg-transparent hover:text-mainGold"
					>Become a Volunteer <Icon
						icon="formkit:submit"
						color="hover:text-mainOrange"
						width="50"
						height="30"
					/></button
				>
			</div>
		</form>
	</div>
</div>
