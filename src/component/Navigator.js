import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './Login';
import Workerdashboard from './Workerdashboard';
import AuthLoading from './AuthLoading';
import {
  BuildingPicture,
  InfrastructureDash, Facility
} from './infrastructure/';
import BuildingStatus from './infrastructure/BulidingStatus';
import Timeline from './TimeLine/Timeline';
import HealthSupplies from './TimeLine/HealthSupplies';
import FoodSupplies from './TimeLine/FoodSupplies';

import {
  ChildNutrition, ChildRegistration,
  FoodNutri, InjectionRecords,
  MaternalDash
} from './Maternal/';

import {
  Children, DemographyDash
} from './Demography/';

import Splash from './Splash';
import HouseHoldListItem from './Demography/HouseHoldListItem';
//import HouseHoldUpdate from './Demography/HouseHoldUpdate';
import Householdtab from './Demography/Householdtab';
import HouseHoldEdit from './Demography/HouseHoldEdit';
import HouseholdView from './Demography/HouseholdView';
import PregnancyTab from './Demography/PregnancyTab';
import PregnancyEdit from './Demography/PregnancyEdit';
import PregnancyView from './Demography/PregnancyView';
import HouseHold from './Demography/HouseHold';
import HouseHoldMemberName from './Demography/HouseHoldMemberName';

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
  Health: {
    screen: HealthSupplies
  },
  Food: {
    screen: FoodSupplies
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
  Householdtab: {
    screen: Householdtab
  },
  HouseHold: {
    screen: HouseHold
  },

  HouseHoldMemberName: {
    screen: HouseHoldMemberName
  },
  HouseHoldListItem:
  {
    screen: HouseHoldListItem
  },
  HouseHoldEdit: {
    screen: HouseHoldEdit
  },
  HouseholdView: {
    screen: HouseholdView
  },
  PregnancyTab:
  {
    screen: PregnancyTab
  },
  PregnancyEdit:
  {
    screen: PregnancyEdit
  },
  PregnancyView:
  {
    screen: PregnancyView
  }
},
  {
    initialRouteName: 'AuthLoading',
  }

);

const Navigator = createAppContainer(RootStack);

export default Navigator;
