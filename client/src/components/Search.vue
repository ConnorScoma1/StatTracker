<template>
    <section class="search">
        <h1>Track Player Stats</h1>
        <form v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="platform">Platform</label>
                    <select name="platform" id="platform" v-model="platform">
                        <option value="psn">Playstation</option>
                        <option value="xbl">Xbox</option>
                        <option value="origin">PC</option>
                    </select>
            </div>
            <div class="form-group">
                <label for="gamertag">Gamertag</label>
                <input type="text" name="text" id="gamertag" v-model="gamertag" placeholder="Origin ID, Xbox Live Gamertag, PNS ID, ect">
            </div>
            <div class="form-group">
                <input type="submit" value="Submit" class="btn" />
            </div>
        </form>
    </section>
</template>

<script>
export default {
    name: 'Search',
    data() {
        return {
            platform: "psn",
            gamertag: ""
        }
    },
    beforeCreate() {
        document.body.className = "body-bg-image"
    },
    methods: {
        onSubmit(){
            if(!this.gamertag) {
                this.$toasted.show("Please Enter a gamertag" , {
                    duration: 3000,
                    icon: 'exclamation-circle'
                })
            } else {
                console.log('Profile Conponents')
            }
        }
    }
}
</script>

<style scoped>

</style>