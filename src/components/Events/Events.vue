<template>
	<div class="events-section card-style flex flex-stacked">
		<p class="text-events-title">Hvad fejrer vi?</p>
		<ul class="events-list flex flex-stacked flex-space-between">
			<li v-for="item in Events" :key="item.id" class="events-item flex">
				<i v-if="item.eventType === 'Birthday'" class="fas fa-birthday-cake events-item__icon"></i>
				<i v-else-if="item.eventType === 'newEmployee'" class="fas fa-handshake events-item__icon"></i>
				<i v-else class="far fa-smile-beam events-item__icon"></i>
				<div class="flex flex-stacked flex-space-between">
					<p class="text-bold">{{ item.employeeName }}</p>
					<p v-if="item.eventType === 'Birthday'" class="text-light">Fødselsdag</p>
					<p v-else-if="item.eventType === 'Jubilee'" class="text-light">Jubilæum</p>
					<p v-else class="text-light">Ny medarbejder</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script lang="ts" src="./Events.ts"></script>
<style lang="scss" src="./Events.scss" scoped></style>
