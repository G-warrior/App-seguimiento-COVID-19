<template>
    <div class="d-flex mb-5">
        <div class="alert-primary w-25 mx-auto my-3 h-25 rounded text-center">
            <h3>Casos</h3>
            <p><strong>Nuevos:{{Estado}}</strong></p>
            <p><strong>Total:</strong></p>

        </div>

        <div class="alert-primary w-25 mx-auto my-3 h-25 rounded text-center">
            <h3>Muertes</h3>
            <p><strong>Nuevos:</strong></p>
            <p><strong>Total:</strong></p>
        </div>
    </div>
  
</template>
<script>
    export default{
        name:'Datos1',
        props:['Estado']
    }
</script>