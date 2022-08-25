<template>
	<ion-header>
		<ion-toolbar class="px-1">
			<ion-buttons slot="end">
				<ion-button @click="$emit('on-close')">&#10005;</ion-button>
			</ion-buttons>
			<ion-title>About Modal</ion-title>
		</ion-toolbar>
	</ion-header>
	<ion-content class="p-2 text-center">
		<h1 class="p-3">Hey, modal works :D</h1>
	</ion-content>
</template>
