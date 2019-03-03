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


//Timeline 
import Timeline from './TimeLine/Timeline';
import BuildingStatusUpdate from './infrastructure/BuildingStatusUpdate';
import Facility from './infrastructure/Facility';
import FacilityUpdate from './infrastructure/FacilityUpdate';
import BuildingPictureUpdate from './infrastructure/BuildingPictureUpdate';
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
import { MaternalDash } from './Maternal/';
import ChildNutrition from './Maternal/ChildNutrition';
import NutritionTab from './Maternal/NutritionTab';
import NutritionSearch from './Maternal/NutritionSearch';
import NutritionEditForm from './Maternal/NutritionEditForm';
import ListNutrition from './Maternal/ListNutrition';
import ChildTab from './Maternal/ChildTab';
import ChildRegistration from './Maternal/ChildRegistration';
import ChildSearch from './Maternal/ChildSearch';
import FoodNutri from './Maternal/FoodNutri';
import ChildEditForm from './Maternal/ChildEditForm';
import ChildView from './Maternal/ChildView';
import ListChild from './Maternal/ListChild';
import InjectionRecords from './Maternal/InjectionRecords';
import InjectionSearch from './Maternal/InjectionSearch';
import InjectionEditForm from './Maternal/InjectionEditForm';
import ListInjection from './Maternal/ListInjection';
import InjectionTab from './Maternal/InjectionTab';
import NutritionView from './Maternal/NutritionView';
import InjectionView from './Maternal/InjectionView';
import { Children, DemographyDash } from './Demography/';
import HouseHoldListItem from './Demography/HouseHoldListItem';
import Householdtab from './Demography/Householdtab';
import HouseHoldEdit from './Demography/HouseHoldEdit';
import HouseholdView from './Demography/HouseholdView';
import PregnancyTab from './Demography/PregnancyTab';
import PregnancyEdit from './Demography/PregnancyEdit';
import PregnancyView from './Demography/PregnancyView';
import HouseHold from './Demography/HouseHold';
import HouseHoldMemberName from './Demography/HouseHoldMemberName';

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
  ResultMessage: {
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
  DailyUsagePeopleSearch: {
    screen: DailyUsagePeopleSearch
  },
  DailyUsagePeopleTab: {
    screen: DailyUsagePeopleTab
  },
  DailyUsagePeopleListItem: {
    screen: DailyUsagePeopleListItem
  },
  DailyUsagePeopleView: {
    screen: DailyUsagePeopleView
  },
  DailyUsagePeopleViewOption: {
    screen: DailyUsagePeopleViewOption
  },


  DailyUsageStockSearch: {
    screen: DailyUsageStockSearch
  },
  DailyUsageStockTab: {
    screen: DailyUsageStockTab
  },
  DailyUsageStockListItem: {
    screen: DailyUsageStockListItem
  },
  DailyUsageStockView: {
    screen: DailyUsageStockView
  },
  DailyUsageStockViewOption: {
    screen: DailyUsageStockViewOption
  },
  ChildNutrition: {
    screen: ChildNutrition
  },
  NutritionTab: {
    screen: NutritionTab
  },
  NutritionEditForm: {
    screen: NutritionEditForm
  },
  ListNutrition: {
    screen: ListNutrition
  },
  NutritionSearch: {
    screen: NutritionSearch
  },
  NutritionView: {
    screen: NutritionView
  },
  FoodNutri: {
    screen: FoodNutri
  },
  ChildRegistration: {
    screen: ChildRegistration
  },
  ChildSearch: {
    screen: ChildSearch
  },
  ChildTab: {
    screen: ChildTab
  },
  ChildEditForm: {
    screen: ChildEditForm
  },
  ListChild: {
    screen: ListChild
  },
  ChildView: {
    screen: ChildView
  },
  InjectionRecords: {
    screen: InjectionRecords
  },
  MaternalDash: {
    screen: MaternalDash
  },
  InjectionSearch: {
    screen: InjectionSearch
  },
  InjectionEditForm: {
    screen: InjectionEditForm
  },
  ListInjection: {
    screen: ListInjection
  },
  InjectionView: {
    screen: InjectionView
  },
  InjectionTab: {
    screen: InjectionTab
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
