<script setup lang="ts">
import { IonContent, IonButtons, IonBackButton, IonPage, IonHeader, IonTitle, IonToolbar } from '@ionic/vue';
</script>

<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-buttons slot="start">
					<ion-back-button></ion-back-button>
				</ion-buttons>
				<ion-title>
					<slot name="default-view-title"></slot>
				</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			<slot name="default-view-body"></slot>
		</ion-content>
	</ion-page>
</template>
