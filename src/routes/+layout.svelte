<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<footer>
	<div>
		<h2>Contact</h2>
		<a href="mailto:SarZag21@htl-shkoder.com">Write a mail</a>
	</div>


	<div>
		<h2>Admin</h2>
		<a href="/admin">Go to admin area </a>
	</div>
</footer>


<style>
footer {
    background-color: #1f2937; 
    color: #f9fafb; 
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5rem;
    border-top: 2px solid #4f46e5; 
    border-radius: 1rem 1rem 0 0;
}

footer div {
    flex: 1 1 200px;
}

footer h2 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

footer a {
    color: #4f46e5; 
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
}

footer a:hover {
    color: #818cf8; 
}

</style>