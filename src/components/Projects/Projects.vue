<template>
	<div
		v-for="(item, index) in Projects"
		:key="index"
		class="projects card-style flex flex-stacked flex-space-between"
		:class="{ active: index === counter }"
	>
		<h3>Igangværende projekter {{ counter }}</h3>
		<div class="image-section flex flex-space-between flex-vertical-center">
			<div @click="prev()">
				<i class="fas fa-arrow-left image-section__icon"></i>
			</div>
			<img
				v-if="item.projectImage"
				:src="'https://lait-intranet-backend.herokuapp.com' + item.projectImage.url"
				alt=""
				class="image-section__image"
			/>
			<img v-else alt="" class="image-section__image" />
			<div @click="next()">
				<i class="fas fa-arrow-right image-section__icon"></i>
			</div>
		</div>
		<p class="text-projects-name">{{ item.projectTitle }}</p>
		<p class="text-projects-manager">Projekt manager: {{ item.projectManager }}</p>
	</div>
</template>
<script lang="ts" src="./Projects.ts"></script>
<style lang="scss" src="./Projects.scss" scoped></style>
