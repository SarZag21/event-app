<script>
    let {data} = $props();
</script>


<h1>Manage my events</h1>

<a href="/admin/event/new">
  <button>Add new event </button>  
</a>


<main>
    {#each data.events as event}

    <div class="event">
        <p>{event.name}</p>
        <h3>{event.category_name}</h3>

        <div>
            <a href="/admin/event/{event.id}/edit">
                <button>Edit</button>
            </a>

        <form action="?/delete"method="POST">
        <input type="hidden" value={event.id} name="id">
        <button type="submit">delete</button>  
          </form>
        </div>
    </div>
    {/each}
</main>


<style>


h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #1f2937;
}


a > button {
    background-color: #4f46e5;
    color: white;
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: 600;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
}

a > button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(79, 70, 229, 0.3);
}


main {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
}


.event {
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.event:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 35px rgba(0, 0, 0, 0.08);
}

.event p {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
}

.event h3 {
    font-size: 0.9rem;
    font-weight: 500;
    color: #6b7280;
    margin-top: 0.25rem;
}


.event > div {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
}

.event button {
    flex: 1;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    font-weight: 500;
    transition: background 0.15s ease;
}

.event a button {
    background-color: #e0e7ff;
    color: #3730a3;
}

.event a button:hover {
    background-color: #c7d2fe;
}

.event form button {
    background-color: #fee2e2;
    color: #991b1b;
}

.event form button:hover {
    background-color: #fecaca;
}
</style>

