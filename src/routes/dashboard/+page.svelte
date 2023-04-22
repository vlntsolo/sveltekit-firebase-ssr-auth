<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div>
	This is a restricted area. Welcome {#if data.user} {data.user.name} {/if}
</div>
