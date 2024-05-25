<script lang="ts">
	import Icon from '@iconify/svelte';
	let fullName = ''; 
	let email = '';
	let phoneNumber = ''; 
	let message = '';
</script>

<!-- Main div -->
<div class="bg-gray-100 lg:rounded-xl">
	<div class="flex flex-col gap-2 px-2 py-5 items-center justify-center">
		<p class="text-center text-2xl font-extrabold">BECOME A VOLUNTEER</p>

		<p class="justify-center text-center p-4">
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
						class="p-5"
						placeholder="Full Name"
						bind:value={fullName}
					/>
				</label>
				<label class="block text-sm mb-2">
					<input
						required
						type="email"
						name="email"
						class="  p-5"
						placeholder="Email Address"
						bind:value={email}
					/>
				</label>
				<label class="block text-sm mb-2">
					<input
						required
						type="tel"
						name="Phone Number"
						class=" p-5"
						placeholder="Phone Number"
						bind:value={phoneNumber}
					/>
				</label>
				<label class="block text-wrap text-sm text-start mb-2">
					<textarea
						required
						name="Message"
						class="h-[200px] p-5"
						placeholder="Message"
						bind:value={message}
					/>
				</label>
			</div>
			<div class="flex justify-end p-4">
				<button
					type="submit"
					class="h-[60px] w-[200px] text-md flex flex-row gap-3 items-center justify-center p-4 bg-mainBlue text-mainWhite hover:bg-mainOrange rounded-md"
					>Submit Now
				</button>
			</div>
		</form>
	</div>
</div>
