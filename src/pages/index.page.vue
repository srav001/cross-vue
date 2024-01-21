<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent } from '@ionic/vue';

import useStore from '../stores/main';

const mainStore = useStore();

const { welcomeText } = storeToRefs(mainStore);
</script>

<template>
	<base-view id="home-page">
		<template #title>
			<div class="text-center">Home Page</div>
		</template>
		<div class="row welcome-page">
			<ion-card class="col-xl-4 col-lg-5 col-md-5 col-sm-6 col-12">
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
	</base-view>
</template>
