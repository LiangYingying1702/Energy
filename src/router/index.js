import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/home/Login'
import Index from '@/components/home/Index'
import Welcome from '@/components/home/Welcome'
import MainTable from '@/components/home/MainTable'
import CompList from '@/components/company/CompList'
import CompAdd from '@/components/company/CompAdd'
import CompEdit from '@/components/company/CompEdit'
import DevtypeList from '@/components/devtype/DevtypeList'
import DevtypeAdd from '@/components/devtype/DevtypeAdd'
import DevtypeEdit from '@/components/devtype/DevtypeEdit'
import UserList from '@/components/baseInfo/UserList'
import UserEdit from '@/components/baseInfo/UserEdit'
import UserAdd from '@/components/baseInfo/UserAdd'
import DeviceList from '@/components/device/DeviceList'
import DeviceAdd from '@/components/device/DeviceAdd'
import DeviceEdit from '@/components/device/DeviceEdit'
import FlowList from '@/components/flow/FlowList'
import FlowEdit from '@/components/flow/FlowEdit'
import FlowAdd from '@/components/flow/FlowAdd'
import parent from '@/components/demos/test/parent'
import FaultList from '@/components/fault/FaultList'
import FaultEdit from '@/components/fault/FaultEdit'
import FaultAdd from '@/components/fault/FaultAdd'
import RepairList from '@/components/repair/RepairList'
import RepairEdit from '@/components/repair/RepairEdit'
import RepairAdd from '@/components/repair/RepairAdd'
import ReportList from '@/components/report/ReportList'
import ReportEdit from '@/components/report/ReportEdit'
import ReportAdd from '@/components/report/ReportAdd'
import Control from '@/components/control/Control'
import JobList from '@/components/job/JobList'
import JobEdit from '@/components/job/JobEdit'
import JobAdd from '@/components/job/JobAdd'
import consumeList from '@/components/consume/consumeList'
import consumeEdit from '@/components/consume/consumeEdit'
import consumeAdd from '@/components/consume/consumeAdd'
import standradcoalList from '@/components/standradcoal/standradcoalList'
import standradcoalEdit from '@/components/standradcoal/standradcoalEdit'
import standradcoalAdd from '@/components/standradcoal/standradcoalAdd'
import jobAmount from '@/components/jobAmount/jobAmount'
import usage from '@/components/devInfo/usage'
import cost from '@/components/devInfo/cost'
import intactRatio from '@/components/devInfo/intactRatio'
import consume from '@/components/devInfo/consume'
import energyConsume from '@/components/energyConsume/energyConsume'
import productionMarketing from '@/components/productionMarketing/productionMarketing'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', name: 'Index', component: Index,children:
				[{path:"/",component:Welcome},
					{path:"CompList",component:CompList},
					{path:"CompAdd",component:CompAdd},
					{path:"CompEdit",name:"CompEdit",component:CompEdit},
					{path:'MainTable',component:MainTable},
					{path:'DevtypeList',component:DevtypeList,name:'DevtypeList'},
					{path:'DevtypeAdd',component:DevtypeAdd},
					{path:"DevtypeEdit",name:"DevtypeEdit",component:DevtypeEdit},
					{path:"UserAdd",component:UserAdd},
					{path:'UserList',component:UserList,name:'UserList'},
					{path:"UserEdit",name:"UserEdit",component:UserEdit},
					{path:'DeviceList',component:DeviceList,name:'DeviceList'},
					{path:'DeviceAdd',component:DeviceAdd},
					{path:"DeviceEdit",name:"DeviceEdit",component:DeviceEdit},
					{path:"FlowAdd",component:FlowAdd},
					{path:'FlowList',component:FlowList,name:'FlowList'},
					{path:"FlowEdit",name:"FlowEdit",component:FlowEdit},
					{path:"FaultAdd",component:FaultAdd},
					{path:'FaultList',component:FaultList,name:'FaultList'},
					{path:"FaultEdit",name:"FaultEdit",component:FaultEdit},
					{path:"RepairAdd",component:RepairAdd},
					{path:'RepairList',component:RepairList,name:'RepairList'},
					{path:"RepairEdit",name:"RepairEdit",component:RepairEdit},
					{path:"ReportAdd",component:ReportAdd},
					{path:'ReportList',component:ReportList,name:'ReportList'},
					{path:"ReportEdit",name:"ReportEdit",component:ReportEdit},
					{path:"Control",name:"Control",component:Control},
					{path:"JobAdd",component:JobAdd},
					{path:'JobList',component:JobList,name:'JobList'},
					{path:"JobEdit",name:"JobEdit",component:JobEdit},
					{path:"consumeAdd",component:consumeAdd},
					{path:'consumeList',component:consumeList,name:'consumeList'},
					{path:"consumeEdit",name:"consumeEdit",component:consumeEdit},
					{path:"standradcoalAdd",component:standradcoalAdd},
					{path:'standradcoalList',component:standradcoalList,name:'standradcoalList'},
					{path:"standradcoalEdit",name:"standradcoalEdit",component:standradcoalEdit},
					{path:"jobAmount",name:"jobAmount",component:jobAmount},
					{path:"usage",name:"usage",component:usage},
					{path:"cost",name:"cost",component:cost},
					{path:"intactRatio",name:"intactRatio",component:intactRatio},
					{path:"consume",name:"consume",component:consume},
					{path:"energyConsume",name:"energyConsume",component:energyConsume},
					{path:"productionMarketing",name:"productionMarketing",component:productionMarketing}
					]
    } ,
		{
			path:'/parent',name:'parent',component:parent
		},
		{
			path:'/Login',name:'Login',component:Login
		}
  ]
})
