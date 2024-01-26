<script setup lang="ts">
import { IonButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
defineEmits(['on-close']);
</script>

<template>
	<ion-header>
		<ion-toolbar class="px-1">
			<ion-buttons slot="end">
				<ion-button @click="$emit('on-close')">&#10005;</ion-button>
			</ion-buttons>
			<ion-title>Test Modal</ion-title>
		</ion-toolbar>
	</ion-header>
	<ion-content class="p-2 text-center">
		<h1 class="p-3">Helloo , modal works :D</h1>
	</ion-content>
</template>
