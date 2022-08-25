import { defineStore } from 'pinia';

// https://pinia.esm.dev/introduction.html
// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application

const useStore = defineStore('main', {
	state: () => ({
		welcomeText: `This is just to show bootstrap's grid system can be used with tailwind to create responsive UI with great customizability easily.`
	})
});

export default useStore;
