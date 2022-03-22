<template>
  <div class="patient">
  <app-tabs :options="options"
   @onChange="onChange"
  >
      </app-tabs>

  </div>

</template>

<script>
import AppTabs from "@/components/views/patient/AppTabs.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Patient",
  components: {AppTabs},
  data() {
    return {
           options:[
        {
          name:'my',
          label:'我的'
        },
        {
          name:'all',
          label:'全科'
        },
        {
          name:'stat',
          label:'收藏'
        },
      ],
    };
  },
  methods: {
     onChange (name,label) {
     
     },

  },
  created() {},
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
