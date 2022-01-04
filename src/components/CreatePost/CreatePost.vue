<template>
	<h2>Opret et post</h2>
	<div class="post-section card-style flex">
		<div class="author-section">
			<i class="fas fa-user-circle author-section__icon"></i>
		</div>
		<div class="submit-form flex flex-stacked">
			<div v-if="!submitted" class="form flex flex-stacked">
				<div class="form-group flex flex-stacked">
					<p>Title</p>
					<input
						type="text"
						class="form-control"
						id="title"
						required
						v-model="Posts.title"
						name="title"
						placeholder="Indtast titel..."
					/>
				</div>

				<div class="form-group flex flex-stacked">
					<p>Author</p>
					<input
						class="form-control"
						id="author"
						required
						v-model="Posts.author"
						name="description"
						placeholder="Indtast forfatter..."
					/>
				</div>
				<div class="form-group flex flex-stacked">
					<p>Description</p>
					<textarea
						class="form-control"
						id="message"
						rows="3"
						required
						v-model="Posts.message"
						name="description"
						placeholder="Indtast beskrivelse..."
					/>
				</div>
			</div>
			<button @click="saveTutorial" class="btn btn-success">Opret</button>
		</div>
	</div>
</template>
<script lang="ts" src="./CreatePost.ts"></script>
<style lang="scss" src="./CreatePost.scss" scoped></style>
