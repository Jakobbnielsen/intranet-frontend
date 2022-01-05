<template>
	<h2>Nyheder fra ledelsen</h2>
	<div
		v-for="(item, index) in Posts"
		:key="item.id"
		class="post-section card-style"
		:class="{ active: index === counter && item.mustRead === true }"
	>
		<div class="author-section flex">
			<i class="fas fa-user-circle author-section__icon"></i>
			<div class="flex flex-stacked flex-space-between">
				<p>{{ item.author }}</p>
				<p>{{ dayjs(item.uploadedDate).fromNow(true) }}</p>
			</div>
		</div>
		<div class="image-section flex flex-vertical-center">
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
			<div class="text-section flex flex-stacked">
				<p class="text-section__title text-post-title">{{ item.title }}</p>
				<p class="text-section__message text-bold">{{ item.message }}</p>
			</div>
			<div class="right" @click="next()">
				<i class="fas fa-arrow-right image-section__icon"></i>
			</div>
		</div>
	</div>
</template>
<script lang="ts" src="./HighlightedPosts.ts"></script>
<style lang="scss" src="./HighlightedPosts.scss" scoped></style>
