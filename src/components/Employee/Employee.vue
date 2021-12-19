<template>
	<h3 class="search-label">Søg efter navn på kollega</h3>
	<input v-model="searchText" type="text" class="search l-mb-m" placeholder="Søg" />
	<ul class="employee-section">
		<li
			v-for="item in filteredList()"
			:key="item.id"
			class="employee-item flex flex-stacked flex-center-center card-style"
		>
			<i class="far fa-user-circle employee-item__icon"></i>
			<h3 class="employee-item__title c-mb-m">{{ item.fullName }}</h3>
			<p class="text-events-title c-mb-xxs">{{ item.jobTitle }}</p>
			<p class="text-projects-manager">{{ item.email }}</p>
			<div class="flex flex-stacked c-mt-m">
				<p class="text-green-title employee-item__phone c-mb-xxs">{{ item.phoneNumber }}</p>
				<p class="text-events-title employee-item__department">{{ item.Department }}</p>
			</div>
		</li>
	</ul>
</template>
<script lang="ts" src="./Employee.ts"></script>
<style lang="scss" src="./Employee.scss" scoped></style>
