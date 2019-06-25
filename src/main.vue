<template>
    <div>
        <transition
                name="dialog-fade">
            <div class="myDialog"
                 v-if="visible"
                 @click.self="handleWrapperClick">
                <div class="myDialogContent"
                     :style="containerStyle">
                    <div class="dialogComHeader">
                        <el-row>
                            <el-col :span="12">
                <span class="dialogComTitle">
                  {{title}}
                </span>
                            </el-col>
                            <el-col :span="12" style="text-align: right;">
                <span class="dialogComClose"
                      @click="closeFun()">X</span>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="dialogComBody">
                        <slot></slot>
                    </div>
                    <div class="dialogComFooter">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'dialog-com',
        mounted(){
           console.log('欢迎使用dialog-com,1138416676@qq.com')
        },
        props: {
            width: {
                type: String,
                default: '50%'
            },
            fullScreen: {
                type: Boolean,
                default: false
            },
            closeOnClickModal: {
                type: Boolean,
                default: true
            },
            closeOnPressEscape: {
                type: Boolean,
                default: true
            },
            title: {
                default: '',
                type: String
            },
            visible: {
                type: Boolean,
                default: false
            },
            appendToBody: {
                type: Boolean,
                default: false
            },
        },
        computed: {
            containerStyle() {
                if (this.fullScreen) {
                    return {
                        height: '100vh'
                    }
                }
                return {
                    margin: '150px auto 0',
                    width: this.width
                }
            }
        },
        watch: {
            visible: {
                handler(newVal, oldVal) {
                    if (newVal) {
                        if (this.appendToBody) {
                            document.body.appendChild(this.$el);
                        }
                        if (this.closeOnPressEscape) {
                            document.body.addEventListener('keydown', (event) => {
                                if (event.keyCode === 27) {
                                    this.closeFun();
                                }
                            })
                        }
                    } else {
                        if (this.appendToBody && this.$el && this.$el.parentNode) {
                            this.$el.parentNode.removeChild(this.$el);
                        }
                        if (this.closeOnPressEscape) {
                            document.body.removeEventListener('keydown', this.closeFun())
                        }
                    }
                }
            }
        },
        methods: {
            closeOnPressEscapeFun() {
                if (!this.closeOnPressEscape) return;
                document.body.addEventListener('keydown', (event) => {
                    if (event.keyCode === 27) {
                        this.closeFun();
                    }
                })
            },
            handleWrapperClick() {
                if (!this.closeOnClickModal) return;
                this.closeFun();
            },
            closeFun() {
                this.$emit('update:visible', false)
            }
        },
        destroyed() {
            document.body.removeEventListener('keydown', this.closeFun());
            if (this.appendToBody && this.$el && this.$el.parentNode) {
                this.$el.parentNode.removeChild(this.$el);
            }
        }
    }
</script>

<style  scoped>
    .myDialog {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        margin: 0;
        background: rgba(0, 0, 0, 0.6);
    }

    .myDialog .myDialogContent {
        /*top: 25%;*/
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 3px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        /*position: absolute;*/
        /*transform: translate(50%, 0%);*/
    }

    .myDialog .myDialogContent .dialogComHeader {
        margin: 15px 20px 0 15px;
    }

    .myDialog .myDialogContent .dialogComHeader .dialogComTitle {
        font-size: 20px;
    }

    .myDialog .myDialogContent .dialogComHeader .dialogComClose {
        color: #909399;
        display: inline-block;
        height: 20px;
        width: 20px;
        text-align: center;
        line-height: 20px;
        transition: transform 0.5s;
    }

    .myDialog .myDialogContent .dialogComHeader .dialogComClose:hover {
        cursor: pointer;
        color: #409EFF;
        transform: rotate(720deg);
    }

    .myDialog .myDialogContent .dialogComBody {
        margin: 15px 20px 0 15px;
    }

    .myDialog .myDialogContent .dialogComFooter {
        text-align: right;
        margin: 15px 20px 20px 15px;
    }

</style>
