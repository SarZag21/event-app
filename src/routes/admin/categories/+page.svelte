<script>
    let {data} = $props();
</script>


<h1>Manage categories</h1>

<a href="/admin/category/new">
  <button>Add new category </button>  
</a>


<main>
    {#each data.categories as categories}

    <div class="categories">
        <p>{categories.name}</p>

        <div>
            <a href="/admin/category/{categories.id}/edit">
                <button>Edit</button>
            </a>

        <form action="?/delete"method="POST">
        <input type="hidden" value={categories.id} name="id">
        <button type="submit">delete</button>  
          </form>
        </div>
    </div>
    {/each}
</main>



<style>
    main{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .categories{
        border: 1px solid black;
        padding: 5px;
        display: flex;
        justify-content: space-between;
    }

</style>