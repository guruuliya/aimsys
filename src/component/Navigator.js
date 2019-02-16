import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './Login';
import Workerdashboard from './Workerdashboard';
import AuthLoading from './AuthLoading';
import { BuildingPicture } from './infrastructure/';
import InfrastructureDash from './infrastructure/InfrastrureDash';
import BuildingStatus from './infrastructure/BulidingStatus';
import Timeline from './TimeLine/Timeline';
import HealthSupplies from './TimeLine/HealthSupplies';
import FoodSupplies from './TimeLine/FoodSupplies';
import BuildingStatusUpdate from './infrastructure/BuildingStatusUpdate';
import Facility from './infrastructure/Facility';
import FacilityUpdate from './infrastructure/FacilityUpdate';
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
  FacilityUpdate: {
    screen: FacilityUpdate
  }
  ,
  BuildingStatusUpdate: {
    screen: BuildingStatusUpdate
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
