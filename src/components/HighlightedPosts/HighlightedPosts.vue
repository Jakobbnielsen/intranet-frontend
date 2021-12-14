<template>
	<div
		v-for="(item, index) in Posts"
		:key="item.id"
		class="post-section card-style"
		:class="{ active: index === counter }"
	>
		<div class="author-section flex">
			<i class="fas fa-user-circle author-section__icon"></i>
			<div class="flex flex-stacked flex-space-between">
				<p>{{ item.author }}</p>
				<p>{{ item.uploadedDate }}</p>
			</div>
		</div>
		<div class="image-section flex flex-space-between flex-vertical-center">
			<div @click="prev()">
				<i class="fas fa-arrow-left image-section__icon"></i>
			</div>
			<div class="flex">
				<img
					v-if="item.image"
					:src="'https://lait-intranet-backend.herokuapp.com' + item.image.url"
					alt=""
					class="image-section__image"
				/>
				<img v-else alt="" class="image-section__image" />
			</div>
			<div class="flex flex-stacked">
				<p>{{ item.title }}</p>
				<p>{{ item.message }}</p>
			</div>
			<div @click="next()">
				<i class="fas fa-arrow-right image-section__icon"></i>
			</div>
		</div>
	</div>
</template>
<script lang="ts" src="./HighlightedPosts.ts"></script>
<style lang="scss" src="./HighlightedPosts.scss" scoped></style>
