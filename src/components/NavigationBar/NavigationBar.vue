<template>
	<header>
		<nav class="nav-bar">
			<!-- placeholder icon -->
			<router-link to="/" class="nav-bar__logo flex flex-center-center"
				><i class="fas fa-people-carry item-logo"></i
			></router-link>
			<ul class="nav-list flex flex-stacked">
				<li
					v-for="(link, index) in navLinks"
					:key="index"
					class="nav-list__item flex flex-center-center"
					:class="{ active: link.url === $route.path }"
				>
					<router-link :to="link.url" class="nav-item flex flex-stacked flex-center-center">
						<i class="item-logo nav-item__logo" :class="[link.icon]"></i>
						<p class="text-navigation">{{ link.text }}</p>
					</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>
<script lang="ts" src="./NavigationBar.ts"></script>
<style lang="scss" src="./NavigationBar.scss" scoped></style>
