<style scoped>

</style>

<template>
    <div class="total-select">
        <div class="amount-sum">
            已选择<em>{{qty}}</em>件商品
        </div>

        <div class="price-sum">
            <div>
                <span class="txt">总价：</span>
                <span class="price sumPrice"><em>¥{{totalprice}}</em></span>
            </div>
        </div>
        
    </div>
</template>

<script>
    import store from '../store'
    
    export default{
        data () {
            return {
                totalprice: 0,
            }
        },
        computed:{
            qty: function (){
                let itemqty = 0 ,
                    totalprice = 0,
                    value = store.state.products
                for(let i=0; i<value.length ; i++){
                    if(value[i]['checked']){
                        itemqty += parseInt(value[i]['qty']);
                        totalprice += value[i]['qty'] * value[i]['price']    
                    }
                    
                }
                this.totalprice = totalprice
                return itemqty
                
            },
        }
    }
</script>

