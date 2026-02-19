<script>
    let {data}= $props();
</script>


<h1>Edit categories</h1>



<form action="?/edit" method="POST">

        <div>
        <label for="name">Category Name</label>
        <input type="text" id="name" name="name" required value={data.category.name}>

    </div>

    <div>
        <button type="submit">Edit Category</button>
    </div>



</form>


<style>
    
</style>