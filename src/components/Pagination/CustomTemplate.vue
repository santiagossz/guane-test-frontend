<template>
    <div class='VuePagination' :class='props.theme.wrapper'>
        <nav :class='props.theme.nav'>

            <ul v-show="props.showPagination" :class="props.theme.list">

                <li  :class='props.theme.firstPage' @click="props.setFirstPage">
                    <button type="button" v-bind="props.firstPageProps">Primera</button>
                </li>

                <li v-if="props.hasChunksNav" :class='props.theme.prevChunk' @click="props.setPrevChunk">
                    <button type="button" v-bind="props.nextChunkProps" class="img-wrap">
                       <img src="https://img.icons8.com/dusk/16/000000/reply-arrow.png"/>
                    </button>
                </li>

                <li v-for="page in props.pages" :key="page" :class="props.pageClasses(page)"
                    v-on="props.pageEvents(page)">
                    <button type="button" v-bind="props.aProps" :class="props.theme.link">{{page}}</button>
                </li>

                <li v-if="props.hasChunksNav" :class='props.theme.nextChunk' @click="props.setNextChunk">
                    <button type="button" v-bind="props.nextChunkProps" class="img-wrap">
                       <img src="https://img.icons8.com/dusk/16/000000/forward-arrow.png"/>
                    </button>
                </li>

                <li  :class="props.theme.lastPage" @click="props.setLastPage">
                    <button type="button" v-bind="props.lastPageProps">Última</button>
                </li>

            </ul>

            <p v-show="props.hasRecords" :class='props.theme.count'>{{props.count}}</p>

        </nav>
    </div>

</template>

<script>
    export default {
        name: 'MyPagination',
        props: ['props']
    }
</script>