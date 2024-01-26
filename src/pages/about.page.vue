<script setup lang="ts">
import { ref } from 'vue';

import { IonButton, IonModal } from '@ionic/vue';

import AboutComponent from 'components/about/AboutComponent.vue';

const modalIsOpen = ref(false);
const showModal = () => {
	modalIsOpen.value = true;
};
</script>
<template>
	<page>
		<h1 class="text-center mt-3">Routing Works !</h1>

		<ion-modal :is-open="modalIsOpen" @did-dismiss="modalIsOpen = false">
			<about-component @on-close="modalIsOpen = false" />
		</ion-modal>

		<div class="col-12 text-center mt-3">
			<ion-button @click="showModal()">Open Modal</ion-button>
		</div>
	</page>
</template>
