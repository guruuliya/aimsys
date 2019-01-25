import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './Login';
import Workerdashboard from './Workerdashboard';
import {
  BuildingPicture, BuildingStatus, DrinkingWater,
  InfrastructureDash, Medicine, PlayGround, Toilet,
  WeighInfants, WeighMother, Facility
} from './infrastructure/';


import Timeline from './TimeLine/Timeline';
import HealthSupplies from './TimeLine/HealthSupplies';
import FoodSupplies from './TimeLine/FoodSupplies';

import {
  ChildNutrition, ChildRegistration,
  FoodNutri, InjectionRecords,
  MaternalDash
} from './Maternal/';

import {
  Children, DemographyDash,
  HouseHold, Pregnancy
} from './Demography/';

const RootStack = createStackNavigator({
  Home: {
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
  Water: {
    screen: DrinkingWater
  },
  buildingPicture: {
    screen: BuildingPicture
  },
  buildingStatus: {
    screen: BuildingStatus
  },
  Medicine: {
    screen: Medicine
  },
  PlayGround: {
    screen: PlayGround
  },
  WeighInfants: {
    screen: WeighInfants
  },
  WeighMother: {
    screen: WeighMother
  },
  Toilet: {
    screen: Toilet
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
    initialRouteName: 'Home',
  }

);

const Navigator = createAppContainer(RootStack);

export default Navigator;
