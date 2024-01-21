<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { hoistRouter } from 'pages/router';

hoistRouter();
</script>

<template>
	<ion-app>
		<ion-router-outlet />
	</ion-app>
</template>
