import React from 'react';
import { createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';
import { Button } from 'react-native';

// Tab my next course
import MyNextCourseListScreen from './MyNextCourse/List/MyNextCourseListScreen';
import MyNextCourseInfoScreen from './MyNextCourse/Info/MyNextCourseInfoScreen';
import MyNextCourseProfileScreen from './MyNextCourse/Profile/MyNextCourseProfileScreen';
import ProfileAddressForm from './MyNextCourse/Profile/ProfileAddressForm';

// Tab Map
import MapScreen from './Map/MapScreen';
import MapInfoScreen from './Map/Info/MapInfoScreen';
import RequestCourseScreen from './Map/RequestCourse/RequestCourseScreen';

// Login/Signup
import LoginScreen from './Login/LoginScreen';
import SignupScreen from './Signup/SignupScreen';
import ProfileScreen from './Profile/ProfileScreen';
import EditProfileScreen from './Profile/EditProfileScreen';

// Tab Planning
import PlanningListScreen from './Planning/List/PlanningListScreen';
import PlanningFormScreen from './Planning/Form/PlanningFormScreen';

export const PlanningStack = createStackNavigator({
    PlanningList: {
        screen: PlanningListScreen
    },
    PlanningForm: {
        screen: PlanningFormScreen,
        navigationOptions: {
            title: 'Planning'
        }
    }
});

export const ProfileStack = createStackNavigator({
    MyProfile: {
        screen: ProfileScreen,
        navigationOptions: {
            title: 'Profil',
        }
    },
    MyProfileAddressForm: {
        screen: ProfileAddressForm,
        navigationOptions: {
            title: 'Modifier mon adresse'
        }
    },
    ProfileForm: {
        screen: EditProfileScreen
    }
});

export const MyNextCourseListStack = createStackNavigator({
    MyNextCourseListScreen: {
        screen: MyNextCourseListScreen,
        navigationOptions: {
            title: 'Prochains cours',
        }
    },
    MyNextCourseInfo: {
        screen: MyNextCourseInfoScreen,
        navigationOptions: {
            title: 'Informations'
        }
    },
    Profile: {
        screen: MyNextCourseProfileScreen,
        navigationOptions: {
            title: 'Profil'
        }
    }
});

export const MapStack = createStackNavigator({
    Map: {
        screen: MapScreen,
        navigationOptions: {
            title: 'Map',
        }
    },
    MapInfo: {
        screen: MapInfoScreen,
        navigationOptions: {
            title: 'Informations'
        }
    },
    RequestCourse: {
        screen: RequestCourseScreen,
        navigationOptions: {
            title: 'Demande de cours'
        }
    },
    MyNextCourseInfoScreen: {
        screen: MyNextCourseInfoScreen,
        navigationOption: {
            title: 'Information sur le cours'
        }
    }
});

export const StudentTabs = createBottomTabNavigator({
    MyNextCourseList: {
        screen: MyNextCourseListStack,
        navigationOptions: {
            tabBarLabel: 'Prochain cours',
            tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor}/>
        }
    },
    Map: {
        screen: MapStack,
        navigationOptions: {
            tabBarLabel: 'Map',
            tabBarIcon: ({ tintColor }) => <Icon name="map" size={35} color={tintColor}/>
        }
    },
    MyProfile: {
        screen: ProfileStack,
        navigationOptions: {
            tabBarLabel: 'Profil',
            tabBarIcon: ({ tintColor }) => <Icon name="person" size={35} color={tintColor}/>
        }
    }
});

export const AccompagnistTabs = createBottomTabNavigator({
    MyNextCourseList: {
        screen: MyNextCourseListStack,
        navigationOptions: {
            tabBarLabel: 'Prochain cours',
            tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor}/>
        }
    },
    Planning: {
        screen: PlanningStack,
        navigationOptions: {
            tabBarLabel: 'Planning',
            tabBarIcon: ({ tintColor }) => <Icon name="event" size={35} color={tintColor}/>
        }
    },
    MyProfile: {
        screen: ProfileStack,
        navigationOptions: {
            tabBarLabel: 'Profil',
            tabBarIcon: ({ tintColor }) => <Icon name="person" size={35} color={tintColor}/>
        }
    }
});

export const LoginStack = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    },
    Signup: {
        screen: SignupScreen,
    },
    StudentTabs: {
        screen: StudentTabs,
        navigationOptions: {
            header: null
        }
    },
    AccompagnistTabs: {
        screen: AccompagnistTabs,
        navigationOptions: {
            header: null
        }
    }
});


export const Root = createStackNavigator({
    AccompagnistTabs: {
        screen: AccompagnistTabs,
    }
}, {
    node: 'modal',
    headerMode: 'none'
});

export const StudentRoot =  createStackNavigator({
    StudentRoot: {
        screen: StudentTabs,
    }
}, {
    node: 'modal',
    headerMode: 'none'
});

export const AccompagnistRoot = createStackNavigator({
    AccompagnistTabs: {
        screen: AccompagnistTabs,
    }
}, {
    node: 'modal',
    headerMode: 'none'
});
