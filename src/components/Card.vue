
<template>
    <Card style="width: 25rem; overflow: hidden">
        <template #header>
            <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
        </template>
        <template #title>Advanced Card</template>
        <template #subtitle>Card subtitle</template>
        <template #content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                quas!
            </p>
        </template>
        <template #footer>
            <div class="btn-card">
                <Button label="Save" class="w-full" />
                <Button label="Cancel" severity="secondary" outlined class="w-full" />
            </div>
        </template>
    </Card>
</template>

<style scoped>

.btn-card {
    display: flex;
    justify-content: space-between;
}
</style>

<script setup>
import Button from 'primevue/button';
import Card from 'primevue/card';

</script>
