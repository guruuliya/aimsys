import React from 'react';
import { Icon } from 'native-base';
import {
  createSwitchNavigator, createDrawerNavigator, createStackNavigator, createAppContainer
} from 'react-navigation';
import Login from './Login';
import Workerdashboard from './Workerdashboard';
import AuthLoading from './AuthLoading';
import BuildingPicture from './infrastructure/BuildingPicture';
import InfrastructureDash from './infrastructure/InfrastrureDash';
import BuildingStatus from './infrastructure/BulidingStatus';
import Timeline from './TimeLine/Timeline';
import HealthSupplies from './TimeLine/HealthSupplies';
import FoodSupplies from './TimeLine/FoodSupplies';
import BuildingStatusUpdate from './infrastructure/BuildingStatusUpdate';
import Facility from './infrastructure/Facility';
import FacilityUpdate from './infrastructure/FacilityUpdate';
import BuildingPictureUpdate from './infrastructure/BuildingPictureUpdate';
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
  Dashboard: {
    screen: Workerdashboard,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft:
          <Icon name="ios-refresh" onPress={() => navigation.openDrawer()} />
      };
    }
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
  },
  BuildingStatusUpdate: {
    screen: BuildingStatusUpdate
  },
  BuildingPictureUpdate: {
    screen: BuildingPictureUpdate
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
});

const DrawerNavigation = createDrawerNavigator({
  Dashboard: {
    screen: RootStack
  }
});

const SwitchNavigator = createSwitchNavigator({
  AuthLoading: {
    screen: AuthLoading
  },
  Login: {
    screen: Login,
  },
  Dashboard: {
    screen: DrawerNavigation
  },
},
  {
    initialRouteName: 'AuthLoading',
  });

const Navigator = createAppContainer(SwitchNavigator);

export default Navigator;
