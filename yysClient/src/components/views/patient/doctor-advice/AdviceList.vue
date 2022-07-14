<template>
  <div class="advice-list">
   医嘱
  </div>
</template>

<script>
export default {
  name:'AdviceList',
  components:{ 
 
  },
  data(){
    return {
      options:[
        {
          name:'长嘱',
          label:'长期医嘱'
        },
        {
          name:'临嘱',
          label:'临时医嘱'
        },
      ],
      longTold:{
        pageNum:'1',
        data:[]
      },
      shortTold:{
        pageNum:'1',
        data:[]
      },

      loading:false,
      finished:false,
      currentType:'长嘱'

    }
  },
  computed:{

   

  },
  
  created(){
 
 
  },
  methods:{

  }
}
</script>
<style lang="scss">
.advice-list{

}
</style>