<template>
	<header>
		<nav class="nav-bar">
			<div class="nav-bar__logo flex flex-center-center">logo</div>
			<ul class="nav-list flex flex-stacked">
				<li
					v-for="(link, index) in navLinks"
					:key="index"
					class="nav-list__item flex flex-stacked flex-center-center"
					:class="{ active: !index }"
				>
					<div>logo</div>
					<p class="text-navigation">{{ link.text }}</p>
				</li>
			</ul>
		</nav>
	</header>
</template>
<script lang="ts" src="./NavigationBar.ts"></script>
<style lang="scss" src="./NavigationBar.scss" scoped></style>
