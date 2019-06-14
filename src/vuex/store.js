import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

var state={
	tags:[
		{ name: '首页', type: 'info',url:'/',index:'101'}
	],
	defaultIndex:'101'
}

var mutations={
	addTag(state,obj){
		for (var item of state.tags) {
			item.type='info';
		}
		for (var item of state.tags) {
			if(item.name==obj.name){
				item.type='warning';
				return;
			}
		}
		state.tags.push(obj)
	},
	cliTag(state,index){
		for (var item of state.tags) {
			item.type='info';
		}
		state.tags[index].type='warning'
	},
	delTag(state,index){
		state.tags.splice(index,1);
	},
	change(state,index){
		state.defaultIndex=index;
	},
	addComp(state,comp){
		state.compArr.push(comp);
	},
	
	addUser(state,adduser){
		state.userArr.push(adduser);
	},
	delComp(state,date){
		for (var i = 0; i < state.compArr.length; i++) {
			if(state.compArr[i].date==date){
				state.compArr.splice(i,1);
			}
		}
	}
}
export default new Vuex.Store({
	state,
	mutations
})