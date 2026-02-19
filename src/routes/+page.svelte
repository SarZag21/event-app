<script>
    let {data} =$props();
</script>

<h2>Events in Shkodra</h2>


<main>
    {#each data.events as event }
    <a href={"/event/" + event.id}>
    
    <h2>{event.name}</h2>
    <p>{event.description}</p>
    <p>
        {new Data (event.startdate).tpDataString()}
        {event.starttime}
    </p>
    <p>{event.category_name}</p>
    </a>
        
    {/each}
</main>




<main>
    {#each data.categories as categories }
    <a href={"/categories/" + categories.id}>
    
    <h2>{categories.name}</h2>

    </a>
        
    {/each}
</main>

<style>
    body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background-color: #f4f6f8;
        color: #222;
    }

    h2 {
        text-align: center;
        margin: 2rem 0 1rem;
        color: #1f2937;
    }

    main {
        max-width: 1000px;
        margin: 0 auto 3rem;
        padding: 0 1rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
    }

    a {
        background: white;
        border-radius: 14px;
        padding: 1.4rem;
        text-decoration: none;
        color: inherit;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    a:hover {
        transform: translateY(-6px);
        box-shadow: 0 18px 35px rgba(0, 0, 0, 0.12);
    }

    a h2 {
        margin: 0 0 0.5rem;
        font-size: 1.2rem;
        color: #2563eb;
        text-align: left;
    }

    a p {
        margin: 0.25rem 0;
        font-size: 0.9rem;
        color: #555;
        line-height: 1.4;
    }

    
    main:last-of-type a {
        text-align: center;
        font-size: 1.1rem;
        font-weight: 600;
        color: #2563eb;
    }
</style>

