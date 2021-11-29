<template>
	<header>
		<nav class="nav-bar">
			<div class="nav-bar__logo">logo</div>
			<template v-for="(link, index) in navLinks" :key="index">
				<p>{{ link.text }}</p>
			</template>
		</nav>
	</header>
</template>
<script lang="ts" src="./NavigationBar.ts"></script>
<style lang="scss" src="./NavigationBar.scss" scoped></style>
