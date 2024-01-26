<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/vue';
import useStore from '../stores/main';

const mainStore = useStore();

const { welcomeText } = storeToRefs(mainStore);
</script>

<template>
	<page>
		<div class="welcome-page flex justify-center">
			<ion-card class="w-full mx-2 lg:w-96">
				<ion-card-header>
					<ion-card-subtitle>First Page</ion-card-subtitle>
					<ion-card-title>Welcome Home</ion-card-title>
				</ion-card-header>

				<ion-card-content class="text-center">
					<p>{{ welcomeText }}</p>
					<ion-button class="pt-1" router-link="/about">Click Me to Test</ion-button>
				</ion-card-content>
			</ion-card>
		</div>
	</page>
</template>
