import dialogCom from './src/main';

/* istanbul ignore next */
dialogCom.install = function(Vue) {
    Vue.component(dialogCom.name, dialogCom);
};

export default dialogCom;
