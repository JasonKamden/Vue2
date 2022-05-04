//该文件用于创建Vuex中最为核心的store

import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const actions = {
    jia: function (context, value) {
        context.commit("JIA", value);
    },
    jian(context, value) {
        context.commit("JIAN", value);
    },

    jiaOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit("JIA", value);
        }
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit("JIA", value);
        }, 3000);
    },

};
const mutations = {
    JIA(state, value) {
        state.sum += value;
    },
    JIAN(state, value) {
        state.sum -= value;
    },
};
const state = {
    sum: 0, //当前的总和
    school: "上海理工",
    subject: '前端',

};
const getters = {
    bigSum(state) {
        return state.sum * 10;
    },
}
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,

});

