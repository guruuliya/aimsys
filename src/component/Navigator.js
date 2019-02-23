import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './Login';
import Workerdashboard from './Workerdashboard';
import AuthLoading from './AuthLoading';
import {
  BuildingPicture,
  InfrastructureDash, Facility
} from './infrastructure/';
import BuildingStatus from './infrastructure/BulidingStatus';


//Timeline 
import Timeline from './TimeLine/Timeline';
import MedicineLog from './TimeLine/MedicineLog';
import DailyUsageStock from './TimeLine/DailyUsageStock';
import DailyUsagePeople from './TimeLine/DailyUsagePeople';
import ResultMessage from './TimeLine/ResultMessage';
import DailyUsagePeopleTab from './TimeLine/DailyUsagePeopleTab';
import DailyUsagePeopleSearch from './TimeLine/DailyUsagePeopleSearch';
import DailyUsagePeopleListItem from './TimeLine/DailyUsagePeopleListItem';
import DailyUsagePeopleView from './TimeLine/DailyUsagePeopleView';
import DailyUsagePeopleViewOption from './TimeLine/DailyUsagePeopleViewOption';

import DailyUsageStockTab from './TimeLine/DailyUsageStockTab';
import DailyUsageStockSearch from './TimeLine/DailyUsageStockSearch';
import DailyUsageStockListItem from './TimeLine/DailyUsageStockListItem';
import DailyUsageStockView from './TimeLine/DailyUsageStockView';
import DailyUsageStockViewOption from './TimeLine/DailyUsageStockViewOption';


import {
  ChildNutrition, ChildRegistration,
  FoodNutri, InjectionRecords,
  MaternalDash
} from './Maternal/';

import {
  Children, DemographyDash,
  HouseHold, Pregnancy
} from './Demography/';
import Splash from './Splash';

const RootStack = createStackNavigator({
  AuthLoading: {
    screen: AuthLoading
  },
  Splash: {
    screen: Splash
  },
  Login: {
    screen: Login,
  },
  Dashboard: {
    screen: Workerdashboard,
  },
  infrastructure: {
    screen: InfrastructureDash
  },
  Facility: {
    screen: Facility
  },
  buildingPicture: {
    screen: BuildingPicture
  },
  buildingStatus: {
    screen: BuildingStatus
  },

  
  Timeline: {
    screen: Timeline
  },
  ResultMessage:{
    screen: ResultMessage
  },
  DailyUsageStock: {
    screen: DailyUsageStock
  },
  DailyUsagePeople: {
    screen: DailyUsagePeople
  },
  MedicineLog: {
    screen: MedicineLog
  },
  DailyUsagePeopleSearch:{
    screen:DailyUsagePeopleSearch
  },
  DailyUsagePeopleTab:{
    screen:DailyUsagePeopleTab
  },
  DailyUsagePeopleListItem: {
    screen:DailyUsagePeopleListItem
  },
  DailyUsagePeopleView: {
    screen:DailyUsagePeopleView
  },
  DailyUsagePeopleViewOption:{
   screen:DailyUsagePeopleViewOption
},


DailyUsageStockSearch:{
  screen:DailyUsageStockSearch
},
DailyUsageStockTab:{
  screen:DailyUsageStockTab
},
DailyUsageStockListItem: {
  screen:DailyUsageStockListItem
},
DailyUsageStockView: {
  screen:DailyUsageStockView
},
DailyUsageStockViewOption:{
 screen:DailyUsageStockViewOption
},















  ChildNutrition: {
    screen: ChildNutrition
  },
  FoodNutri: {
    screen: FoodNutri
  },
  ChildRegistration: {
    screen: ChildRegistration
  },
  InjectionRecords: {
    screen: InjectionRecords
  },
  MaternalDash: {
    screen: MaternalDash
  },
  Children: {
    screen: Children
  },
  DemographyDash: {
    screen: DemographyDash
  },
  HouseHold: {
    screen: HouseHold
  },
  Pregnancy: {
    screen: Pregnancy
  }
},
  {
    initialRouteName: 'AuthLoading',
  }

);

const Navigator = createAppContainer(RootStack);

export default Navigator;
