import { AtlpNavigation } from '@atlp/types';

export const navigation: AtlpNavigation[] = [
    {
        id: 'ui-kit-component',
        title: 'Ui Kit',
        type: 'group',
        icon: 'pages',
        children: [
            {
                id: 'ui-kit',
                title: 'Ui Kit',
                translate: 'Ui Kit',
                type: 'item',
                icon: 'apps',
                url: '/ui-kit',
            },
        ]
    },
    {
        id: 'voyages-component',
        title: 'Voyages Page',
        type: 'group',
        icon: 'pages',
        children: [
            {
                id: 'voyages-page',
                title: 'Voyages',
                translate: 'Voyages Page',
                type: 'item',
                icon: 'apps',
                url: '/voyages-page',
            }
        ]
    },
    {
        id: 'components',
        title: 'Appointments Components',
        type: 'group',
        icon: 'pages',
        children: [
            {
                id: 'appointments',
                title: 'Appointments',
                translate: 'Appointments',
                type: 'item',
                icon: 'apps',
                url: '/appointments',
            },
            {
                id: 'vessel',
                title: 'Vessel',
                translate: 'Vessel',
                type: 'item',
                icon: 'apps',
                url: '/vessel',
            },
            {
                id: 'payment',
                title: 'Payment',
                translate: 'Payment',
                type: 'item',
                icon: 'apps',
                url: '/payment',
            },
            {
                id: 'airway',
                title: 'Airway',
                translate: 'Airway',
                type: 'item',
                icon: 'apps',
                url: '/airway',
            },
            {
                id: 'awb',
                title: 'Awb',
                translate: 'Awb',
                type: 'item',
                icon: 'apps',
                url: '/awb',
            },
            {
                id: 'voyages',
                title: 'Voyages',
                translate: 'Voyages',
                type: 'item',
                icon: 'apps',
                url: '/voyages',
            },
            // {
            //     id: 'information-services',
            //     title: 'Information services',
            //     translate: 'Information services',
            //     type: 'item',
            //     icon: 'apps',
            //     url: '/information-services',
            // },
            // {
            //     id: 'heavy-container',
            //     title: 'Heavy container',
            //     translate: 'Heavy container',
            //     type: 'item',
            //     icon: 'apps',
            //     url: '/heavy-container',
            // },
            // {
            //     id: 'truck-tracking',
            //     title: 'Truck tracking',
            //     translate: 'Truck tracking',
            //     type: 'item',
            //     icon: 'apps',
            //     url: '/truck-tracking',
            // },
            // {
            //     id: 'schedule',
            //     title: 'Schedule',
            //     translate: 'Schedule',
            //     type: 'item',
            //     icon: 'apps',
            //     url: '/schedule',
            // },
            // {
            //     id: 'track-cargo',
            //     title: 'Track cargo',
            //     translate: 'Track cargo',
            //     type: 'item',
            //     icon: 'apps',
            //     url: '/track-cargo',
            // }
        ]
    },
    {
        id: 'cargo',
        title: 'Cargo',
        type: 'group',
        icon: 'pages',
        children: [
            {
                id: 'multilevel',
                title: 'Multilevel',
                type: 'collapsable',
                icon: 'lock',
                children: [
                    {
                        id: '4',
                        title: '4',
                        type: 'item',
                        url: '/pages/auth/login'
                    }
                ]
            },
            {
                id: 'multileve2',
                title: 'Multilevel',
                type: 'collapsable',
                icon: 'lock',
                children: [
                    {
                        id: '5',
                        title: '5',
                        type: 'item',
                        url: '/pages/auth/login'
                    }
                ]
            }
        ]
    },
    {
        id: 'air1',
        title: 'Air',
        type: 'group',
        icon: 'pages',
        children: [
            {
                id: 'multileve3',
                title: 'Multilevel',
                type: 'collapsable',
                icon: 'lock',
                children: [
                    {
                        id: '6',
                        title: '6',
                        type: 'item',
                        url: '/pages/auth/login'
                    }
                ]
            },
            {
                id: 'multileve4',
                title: 'Multilevel',
                type: 'collapsable',
                icon: 'lock',
                children: [
                    {
                        id: '7',
                        title: '7',
                        type: 'item',
                        url: '/pages/auth/login'
                    }
                ]
            }
        ]
    },
    {
        id: 'air2',
        title: 'Air',
        type: 'group',
        icon: 'pages',
        children: [
            {
                id: 'multileve5',
                title: 'Multilevel',
                type: 'collapsable',
                icon: 'lock',
                children: [
                    {
                        id: '8',
                        title: '8',
                        type: 'item',
                        url: '/pages/auth/login'
                    }
                ]
            },
            {
                id: 'multileve6',
                title: 'Multilevel',
                type: 'collapsable',
                icon: 'lock',
                children: [
                    {
                        id: '9',
                        title: '9',
                        type: 'item',
                        url: '/pages/auth/login'
                    }
                ]
            }
        ]
    }
];
