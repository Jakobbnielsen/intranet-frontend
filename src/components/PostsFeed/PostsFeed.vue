<template>
	<div v-for="item in Posts" :key="item.id" class="post-section card-style">
		<div class="author-section flex">
			<i class="fas fa-user-circle author-section__icon"></i>
			<div class="flex flex-stacked flex-space-between">
				<p>{{ item.author }}</p>
				<p>{{ dayjs(item.uploadedDate).fromNow(true) }}</p>
			</div>
		</div>
		<div class="image-section flex flex-space-between flex-vertical-center">
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
		</div>
	</div>
</template>
<script lang="ts" src="./PostsFeed.ts"></script>
<style lang="scss" src="./PostsFeed.scss" scoped></style>
