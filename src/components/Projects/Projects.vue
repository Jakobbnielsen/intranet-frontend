<template>
	<div v-for="item in Projects" :key="item.id" class="projects card-style flex flex-stacked flex-center-center">
		<h3>Igangværende projekter</h3>
		<div class="image-section flex flex-space-between flex-vertical-center">
			<i class="fas fa-arrow-left image-section__icon"></i>
			<img
				:src="'https://lait-intranet-backend.herokuapp.com' + item.projectImage.url"
				alt=""
				class="image-section__image"
			/>
			<i class="fas fa-arrow-right image-section__icon"></i>
		</div>
		<p class="text-projects-name">{{ item.projectTitle }}</p>
		<p class="text-projects-manager">Projekt manager: {{ item.projectManager }}</p>
	</div>
</template>
<script lang="ts" src="./Projects.ts"></script>
<style lang="scss" src="./Projects.scss" scoped></style>
