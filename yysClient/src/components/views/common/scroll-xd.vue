<template>
    <div class="wrapper">
        <div class="scoll-pic">
        </div>
        <div :class="fix ? 'isFixed' : ''" id="menuFlag">
            <scroll-menu :menuItems="menuItems" :iActiveColor="iActiveColor" :DefaultIndex="(1)"
                @clickLzMenuItem="clickMenuItem">
            </scroll-menu>
        </div>
        <div class="scoll-pic btm-pic">
        </div>
        <div>
            作为大家熟悉的椰汁类饮料，椰树牌椰汁在消费者心中有着相对稳定的地位，但在广告宣传上，它已多次陷入争议或者“擦边球”营销。
            2009年，因在海口市公交车上印有“老婆喜欢老公喝椰树牌石榴汁”“木瓜饱满我丰满”等广告字眼，被当地工商部门认定其为违规发布，责令立即停止并处以1000元的罚款；
            2016年，椰树集团推出过火山岩矿泉水“胸模瓶”的设计，引发不小争议；
            2019年，椰树椰汁直接在新包装上印上“大胸美女”，文案也直接主打为“丰胸神器”，后因妨碍社会公共秩序或违背社会良好风尚，椰树集团被当地市场监督管理部门罚款20万元；
            去年，椰树集团将“从小喝到大”申请商标，不过“喝到大”的申请被驳回。
            如此频繁地在擦边底线试探，和时下的广告环境直接相关。
            随着流量红利逼近天花板，碎片化社交媒体时代又对广告提出的短平快要求，让一些品牌为了博噱头而上传经不起推敲的广告，毕竟这些内容是能够最快抓住用户眼球的捷径。
            同时，部分广告营销人员自身的价值观偏差与广告相关法律知识的匮乏，也助长了这类营销内容的滋生。此外，违法成本也许不算高，北京大成（成都）律师事务所律师李莎莎接受媒体采访时曾表示，“（广告违规）对椰树集团来说罚款金额反正也不大，他们可能就帮自己做广告了。”
            而这些营销策略的背后，也反映了椰树集团近年来遇到的发展瓶颈。
            近年来，随着欢乐家和椰谷等品牌崛起，以及不少燕麦奶新消费品牌的崭露头角，它们正在不断抢夺椰树牌椰汁的市场份额，椰树集团的日子不似从前。
            今年2月，椰树集团发布的“开门红报喜”显示，集团2021企业全年销量比2020年增长16.82%，比2019年增长7.71%；两年平均增长12.26%。这样的营收低于董事长王光兴此前的目标——2014年，王光兴在接受海南日报采访时曾表示，他们的目标是在“十二五”期间（2011-2015年)完成60亿元产值，“十三五”期间（2016-2020年）产值超过100亿元。
            然而根据椰树集团此前发布的数据，2014年至2020年间，集团的营收分别为44.5亿元、43.36亿元、40.21亿元、41.57亿元、39.16亿元、43.29亿元、38.96亿元、38.96亿元，也就是说，距离此前的预期还相差甚远。
        </div>

    </div>
</template>
  
<script>
import scrollMenu from "../common/scroll-menu.vue"
export default {
    name: "Scroll-xd",
    components: {
        scrollMenu,
    },
    props: {


    },
    data() {
        return {
            currentIndex: 0,
            menuItems: [
                {
                    id: 1,
                    name: "通知公告",
                },
                {
                    id: 2,
                    name: "讲座预告",
                },
                {
                    id: 3,
                    name: "综合新闻",
                },
                {
                    id: 4,
                    name: "校园动态",
                },
                {
                    id: 5,
                    name: "教育教学",
                },
                {
                    id: 6,
                    name: "创新创业",
                },
                {
                    id: 7,
                    name: "开放办学",
                },
                {
                    id: 8,
                    name: "我爱我家",
                },
            ],
            iActiveColor: "#ff0", //选中时文本为黄色
            fix: false,
            startTop: 0,
        };
    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        let offsetTop = document.querySelector('#menuFlag').offsetTop;
        this.startTop = offsetTop

    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            //计算滚动条位置
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            //计算绑定div位置
            var offsetTop = document.querySelector('#menuFlag').offsetTop;

            console.log(scrollTop, 'MMM', offsetTop)
            //进行比较设置位置fixed
            if (scrollTop < this.startTop) {
                this.fix = false
            } else {
                this.fix = scrollTop > offsetTop;

            }

        },


    },
};
</script>
  
<style lang="scss" scoped>
.wrapper {
    background-color: #f2f2f2;
    width: 100%;

    .scoll-pic {
        width: 100%;
        height: 900px;
        background-color: red;

    }

    .btm-pic {
        background-color: yellow;
    }

    .isFixed {
        position: fixed;
        top: 0;
        z-index: 1000;
    }
}
</style>