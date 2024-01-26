import { createRouter, createWebHistory } from '@ionic/vue-router';
import { routes } from 'vue-router/auto/routes';

export const routerCreated = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
});

/**
 * Router instance hoisted - src/router/index
 */
export let $router: ReturnType<typeof useRouter>;
/**
 * To have access to router initalised in setup context available throughout the app - src/router/index
 */
export function hoistRouter() {
	if (!$router) {
		$router = useRouter();
	}
	return $router;
}
