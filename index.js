new Vue({
                    el:'#app',
                    template: `
                    <div class='container'>
                        <h1>Calculadora</h1>
                        <hr>
                        <form v-on:submit.prevent="onSubmit">
                            <label>Valor 1</label>
                            <input type='number' name='val1' v-model="val1"/>
                            <br>
                            <label>Valor 2</label>
                            <input type='number' name='val2' v-model="val2"/>
                            <br>
                            <button type="submit" id="soma" class="text" v-on:click="somar()">Somar</button>
                            <button type="submit" id="divisao" class="text" v-on:click="subtrair()">Subtratir</button>
                            <button type="submit" id="multiplicacao" class="text" v-on:click="dividir()">Dividir</button>
                            <button type="submit" id="subtracao" class="text" v-on:click="multiplicar()">Multiplicar</button>
                            <button type="submit" v-on:click="limpar()">Limpar</button>
                            <br>
                            <label> Resultado: </label> <label>{{ resultado }}</label>
                            <br/>
                            <label>{{ msg }}</label>
                        </form>                        
                    </div>
                    `,
                    data(){
                        return {
                            val1:0,
                            val2:0,
                            resultado:0,
                            msg:''
                        }
                    },
                    methods: {
                        validateValues(val1,val2){
                            if(!isNaN(val1) && !isNaN(val2))
                            {
                                this.msg = '';
                                return true;
                            }
                            
                            this.msg = 'Apenas valores Inteiros são aceitos';
                            return false;
                            
                        },
                        somar()
                        {
                            
                            if(!this.validateValues(this.val1,this.val2))
                            {
                                return;
                            }
                            this.resultado = parseInt(this.val1) + parseInt(this.val2);
                        },
                        subtrair()
                        {
                            if(!this.validateValues(this.val1,this.val2))
                            {
                                return;
                            }
                            this.resultado = parseInt(this.val1) - parseInt(this.val2);
                        },
                        dividir()
                        {
                            if(!this.validateValues(this.val1,this.val2))
                            {
                                return;
                            }
                            this.resultado = parseInt(this.val1) / parseInt(this.val2);
                        },
                        multiplicar()
                        {
                            if(!this.validateValues(this.val1,this.val2))
                            {
                                return;
                            }
                            this.resultado = parseInt(this.val1) * parseInt(this.val2);
                        },
                        limpar()
                        {
                            this.resultado = 0;
                            this.val1 = 0;
                            this.val2 = 0;
                            this.msg = '';
                        }
                    }
                })