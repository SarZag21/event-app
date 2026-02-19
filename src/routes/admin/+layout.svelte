<script>
    let {children} =$props();
</script>

<header>

    <h1> Admin Dashboard</h1>
   
</header>

{@render children()}

<style>

header {
    background-color: #4f46e5; 
    color: white;
    padding: 1.5rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #3730a3;
    border-radius: 0 0 1rem 1rem;
}

header h1 {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0;
}

header:hover {
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.2s ease;
}

</style>