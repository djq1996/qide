//'use strict';
//@ts-check 

var countries = [
    {
        id: 1,
        countries: '美国',
        education: [{
                type: 1,
                name: '高中',
                tuition: '20-50万',
                alimoney: '3-17万',
                totoalMoney: '23-67万'
            },
            {
                type: 1,
                name: '本科预科',
                tuition: '28-42万',
                alimoney: '3-17万',
                totoalMoney: '31-59万'
            },
            {
                type: 1,
                name: '硕士预科',
                tuition: '10-18万',
                alimoney: '3-17万',
                totoalMoney: '13-35万'
            },
            {
                type: 2,
                name: '本科',
                professional: [{
                    name: '商科',
                    tuition: '6-45万',
                    alimoney: '3-17万',
                    totoalMoney: '9-62万'
                }, {
                    name: '理科',
                    tuition: '6-45万',
                    alimoney: '3-17万',
                    totoalMoney: '9-62万'
                }, {
                    name: '工科',
                    tuition: '6-45万',
                    alimoney: '3-17万',
                    totoalMoney: '9-62万'
                }, {
                    name: '文科',
                    tuition: '6-45万',
                    alimoney: '3-17万',
                    totoalMoney: '9-62万'
                }, {
                    name: '医科',
                    tuition: '6-45万',
                    alimoney: '3-17万',
                    totoalMoney: '9-62万'
                }, {
                    name: '艺术',
                    tuition: '6-45万',
                    alimoney: '3-17万',
                    totoalMoney: '9-62万'
                }, {
                    name: '公共管理',
                    tuition: '6-45万',
                    alimoney: '3-17万',
                    totoalMoney: '9-62万'
                }, {
                    name: '法律',
                    tuition: '6-45万',
                    alimoney: '3-17万',
                    totoalMoney: '9-62万'
                }]
            },
            {
                type: 3,
                name: '硕士',
                professional: [{
                    name: '商科',
                    tuition: '9-25万',
                    alimoney: '3-17万',
                    totoalMoney: '12-42万'
                }, {
                    name: '理科',
                    tuition: '9-25万',
                    alimoney: '3-17万',
                    totoalMoney: '12-42万'
                }, {
                    name: '工科',
                    tuition: '9-25万',
                    alimoney: '3-17万',
                    totoalMoney: '12-42万'
                }, {
                    name: '文科',
                    tuition: '6-22万',
                    alimoney: '3-17万',
                    totoalMoney: '9-39万'
                }, {
                    name: '医科',
                    tuition: '10-31万',
                    alimoney: '3-17万',
                    totoalMoney: '13-50万'
                }, {
                    name: '艺术',
                    tuition: '10-31万',
                    alimoney: '3-17万',
                    totoalMoney: '13-50万'
                }, {
                    name: '公共管理',
                    tuition: '7-21万',
                    alimoney: '3-17万',
                    totoalMoney: '10-38万'
                }, {
                    name: '法律',
                    tuition: '7-21万',
                    alimoney: '3-17万',
                    totoalMoney: '10-38万'
                }]
            },

        ],
    },
    {
        id: 2,
        countries: '加拿大',
        education: [{
                type: 1,
                name: '小学',
                tuition: '6.5万',
                alimoney: '3.1-4.8',
                totoalMoney: '8.6-11.3'
            },
            {
                type: 1,
                name: '中学',
                tuition: '5.5-29.6',
                alimoney: '3.1-4.8',
                totoalMoney: '8.6-34.4'
            },
            {
                type: 1,
                name: '本科预科',
                tuition: '7.8-9.8',
                alimoney: '4-8万',
                totoalMoney: '11-17.8'
            },
            {
                type: 1,
                name: '硕士预科',
                tuition: '7-8.5万',
                alimoney: '4.8万',
                totoalMoney: '11-18.5'
            },
            {
                type: 3,
                name: '本科',
                professional: [{
                    name: '商科',
                    tuition: '14-16万',
                    alimoney: '4-8万',
                    totoalMoney: '18-24万'
                }, {
                    name: '理科',
                    tuition: '13.5万',
                    alimoney: '4-8万',
                    totoalMoney: '17.5-21.5'
                }, {
                    name: '工科',
                    tuition: '14.5万',
                    alimoney: '4-8万',
                    totoalMoney: '18.5-22.5'
                }, {
                    name: '文科',
                    tuition: '11万',
                    alimoney: '4-8万',
                    totoalMoney: '15-19万'
                }, {
                    name: '医学',
                    tuition: '16.7-27',
                    alimoney: '4-8万',
                    totoalMoney: '20.7-35万'
                }, {
                    name: '艺术',
                    tuition: '10.8万',
                    alimoney: '4-8万',
                    totoalMoney: '14.8-18.8'
                }, {
                    name: '法律',
                    tuition: '11.7-15',
                    alimoney: '4-8万',
                    totoalMoney: '15.7-23万'
                }]
            },
            {
                type: 3,
                name: '硕士',
                professional: [{
                    name: '商科',
                    tuition: '11-18万',
                    alimoney: '4-8万',
                    totoalMoney: '15-26万'
                }, {
                    name: '理科',
                    tuition: '7.5万',
                    alimoney: '4-8万',
                    totoalMoney: '11.5-15.5'
                }, {
                    name: '工科',
                    tuition: '8.5-11.5',
                    alimoney: '4-8万',
                    totoalMoney: '12.5-19.5'
                }, {
                    name: '文科',
                    tuition: '7万',
                    alimoney: '4-8万',
                    totoalMoney: '11-15万'
                }, {
                    name: '医学',
                    tuition: '6-10.7',
                    alimoney: '4-8万',
                    totoalMoney: '10-18.7'
                }, {
                    name: '艺术',
                    tuition: '7万',
                    alimoney: '4-8万',
                    totoalMoney: '11-15'
                }, {
                    name: '法律',
                    tuition: '8.2',
                    alimoney: '4-8万',
                    totoalMoney: '12.2-16.2'
                }]
            },

        ],
    },
    {
        id: 3,
        countries: '英国',
        education: [{
                type: 1,
                name: '中学',
                tuition: '13-18万',
                alimoney: '8-15万',
                totoalMoney: '21-33万'
            },
            {
                type: 1,
                name: '高中',
                tuition: '18-24万',
                alimoney: '9-15万',
                totoalMoney: '27-39万'
            },
            {
                type: 1,
                name: '本科预科',
                tuition: '15-18万',
                alimoney: '9-13万',
                totoalMoney: '24-31'
            },
            {
                type: 1,
                name: '硕士预科',
                tuition: '15-18万',
                alimoney: '9-13万',
                totoalMoney: '24-31万'
            },
            {
                type: 1,
                name: '博士',
                tuition: '12-22万',
                alimoney: '9-13万',
                totoalMoney: '21-35万'
            },
            {
                type: 3,
                name: '本科',
                professional: [{
                    name: '商科',
                    tuition: '15-22万',
                    alimoney: '9-13万',
                    totoalMoney: '24-35万'
                }, {
                    name: '理科',
                    tuition: '15-22万',
                    alimoney: '9-13万',
                    totoalMoney: '24-35万'
                }, {
                    name: '医学',
                    tuition: '32-38万',
                    alimoney: '9-13万',
                    totoalMoney: '41-51万'
                }, {
                    name: '文科',
                    tuition: '32-38万',
                    alimoney: '9-13万',
                    totoalMoney: '21-33万'
                }]
            },
            {
                type: 3,
                name: '硕士',
                professional:  [{
                    name: '商科',
                    tuition: '15-28万',
                    alimoney: '9-13万',
                    totoalMoney: '24-41万'
                }, {
                    name: '理科',
                    tuition: '15-25万',
                    alimoney: '9-13万',
                    totoalMoney: '24-38万'
                }, {
                    name: '文科',
                    tuition: '12-20万',
                    alimoney: '9-13万',
                    totoalMoney: '21-33万'
                }]
            },

        ],
    },
    {
        id: 4,
        countries: '德国',
        education: [{
                type: 5,
                name: '高中',
                totoalMoney: '25-35万'
            },
            {
                type: 1,
                name: '本科预科',
                tuition: '10-15万',
                alimoney: '8-10万',
                totoalMoney: '18-25万'
            },
            {
                type: 1,
                name: '本科',
                tuition: '1600元',
                alimoney: '8-10万',
                totoalMoney: '8-10万'
            },
            {
                type: 1,
                name: '硕士',
                tuition: '1600元',
                alimoney: '8-10万',
                totoalMoney: '8-10万'
            },
        ],
    },
    {
        id: 5,
        countries: '法国',
        education: [
            {
                type: 4,
                name: '本科预科',
                tuition1: '3-6万',
                tuition2: '2-5万',
                alimoney: '6-8万',
                totoalMoney: '8-14万'
            },
            {
                type: 4,
                name: '本科',
                tuition1: '6-8万',
                tuition2: '0元',
                alimoney: '6-8万',
                totoalMoney: '12-16万'
            },
            {
                type: 4,
                name: '硕士预科',
                tuition1: '3-6万',
                tuition2: '2-5万',
                alimoney: '6-8万',
                totoalMoney: '8-14万'
            },
            {
                type: 4,
                name: '硕士',
                tuition1: '10-20万',
                tuition2: '0元',
                alimoney: '6-8万',
                totoalMoney: '16-28万'
            },
        ],
    },
    {
        id: 6,
        countries: '意大利',
        education: [
            {
                type: 1,
                name: '本科预科',
                tuition: '4-5万',
                alimoney: '6-10万',
                totoalMoney: '10-15万'
            },
            {
                type: 1,
                name: '本科',
                tuition: '1-2万',
                alimoney: '6-10万',
                totoalMoney: '7-11万'
            },
            {
                type: 1,
                name: '硕士',
                tuition: '1-2万',
                alimoney: '6-10万',
                totoalMoney: '7-11万'
            },
        ],
    },
    {
        id: 7,
        countries: '荷兰',
        education: [
            {
                type: 1,
                name: '高中',
                tuition: '16万',
                alimoney: '20万',
                totoalMoney: '36万'
            },
            {
                type: 1,
                name: '本科预科',
                tuition: '6-13万',
                alimoney: '6-8万',
                totoalMoney: '12-21万'
            },
            {
                type: 1,
                name: '本科',
                tuition: '6-8万',
                alimoney: '6-8万',
                totoalMoney: '12-16万'
            },
            {
                type: 1,
                name: '硕士预科',
                tuition: '6-13万',
                alimoney: '6-8万',
                totoalMoney: '12-20万'
            },
            {
                type: 1,
                name: '硕士',
                tuition: '7-11万',
                alimoney: '6-8万',
                totoalMoney: '13-19万'
            },
        ],
    },
    {
        id: 8,
        countries: '瑞士',
        education: [
            {
                type: 5,
                name: '高中',
                totoalMoney: '55-110'
            },
            {
                type: 5,
                name: '本科预科',
                totoalMoney: '2-7万'
            },
            {
                type: 5,
                name: '本科',
                totoalMoney: '15-35万'
            },
            {
                type: 5,
                name: '硕士预科',
                totoalMoney: '2-7万'
            },
            {
                type: 5,
                name: '硕士',
                totoalMoney: '19-50万'
            },
        ],
    },
    {
        id: 9,
        countries: '西班牙',
        education: [
            {
                type: 1,
                name: '高中',
                tuition: '8-10万',
                alimoney: '5-7万',
                totoalMoney: '13-17万'
            },
            {
                type: 3,
                name: '本科预科',
                tuition: '3-5万',
                alimoney: '5-7万',
                totoalMoney: '8-12万'
            },
            {
                type: 1,
                name: '本科',
                tuition: '1.5-6万',
                alimoney: '5-7万',
                totoalMoney: '6.5-13万'
            },
            {
                type: 2,
                name: '硕士',
                tuition: '3-6万',
                alimoney: '5-7万',
                totoalMoney: '8-13万'
            },
        ],
    },
    {
        id: 10,
        countries: '澳洲',
        education: [{
                type: 4,
                name: '中学',
                tuition1: '6-8万',
                tuition2: '6-15万',
                alimoney: '5-8万',
                totoalMoney: '13-23万'
            },
            {
                type: 1,
                name: '本科预科',
                tuition: '10-12万',
                alimoney: '8-10万',
                totoalMoney: '18-22万'
            },
            {
                type: 1,
                name: '博士',
                tuition: '5-10万',
                alimoney: '8-10万',
                totoalMoney: '13-20万'
            },
            {
                type: 3,
                name: '本科',
                professional: [{
                    name: '商科',
                    tuition: '15-20万',
                    alimoney: '8-10万',
                    totoalMoney: '30万+'
                }, {
                    name: '理科',
                    tuition: '15-18万',
                    alimoney: '8-10万',
                    totoalMoney: '30万+'
                }, {
                    name: '工科',
                    tuition: '15-20万',
                    alimoney: '8-10万',
                    totoalMoney: '30万+'
                }, {
                    name: '文科',
                    tuition: '13-17万',
                    alimoney: '8-10万',
                    totoalMoney: '30万+'
                }, {
                    name: '医学',
                    tuition: '20-25万',
                    alimoney: '8-10万',
                    totoalMoney: '30万+'
                }, {
                    name: '艺术',
                    tuition: '15-20万',
                    alimoney: '8-10万',
                    totoalMoney: '30万+'
                }, {
                    name: '法律',
                    tuition: '15-20万',
                    alimoney: '8-10万',
                    totoalMoney: '30万+'
                }, {
                    name: '其他',
                    tuition: '13-20万',
                    alimoney: '8-10万',
                    totoalMoney: '30万+'
                }]
            },
            {
                type: 3,
                name: '硕士',
                professional:  [{
                    name: '商科',
                    tuition: '15-20万',
                    alimoney: '8-10万',
                    totoalMoney: '30万+'
                }, {
                    name: '理科',
                    tuition: '15-18万',
                    alimoney: '8-10万',
                    totoalMoney: '30万+'
                }, {
                    name: '工科',
                    tuition: '15-20万',
                    alimoney: '8-10万',
                    totoalMoney: '30万+'
                }, {
                    name: '文科',
                    tuition: '13-17万',
                    alimoney: '8-10万',
                    totoalMoney: '30万+'
                }, {
                    name: '医学',
                    tuition: '20-25万',
                    alimoney: '8-10万',
                    totoalMoney: '30万+'
                }, {
                    name: '艺术',
                    tuition: '15-20万',
                    alimoney: '8-10万',
                    totoalMoney: '30万+'
                }, {
                    name: '法律',
                    tuition: '15-20万',
                    alimoney: '8-10万',
                    totoalMoney: '30万+'
                }, {
                    name: '其他',
                    tuition: '13-20万',
                    alimoney: '8-10万',
                    totoalMoney: '30万+'
                }]
            },

        ],
    },
    {
        id: 11,
        countries: '新西兰',
        education: [{
                type: 4,
                name: '中学',
                tuition1: '5-8万',
                tuition2: '9-14万',
                alimoney: '9-10万',
                totoalMoney: '14-24万'
            },
            {
                type: 1,
                name: '本科预科',
                tuition: '8-12万',
                alimoney: '6-8万',
                totoalMoney: '14-20万'
            },
            {
                type: 1,
                name: '硕士',
                tuition: '10-18万',
                alimoney: '5-8万',
                totoalMoney: '15-26万'
            },
            {
                type: 1,
                name: '博士',
                tuition: '3-4万',
                alimoney: '5-8万',
                totoalMoney: '8-12万'
            },
            {
                type: 3,
                name: '本科',
                professional: [{
                    name: '商科',
                    tuition: '8-14万',
                    alimoney: '6-8万',
                    totoalMoney: '14-22万'
                }, {
                    name: '理科',
                    tuition: '8-14万',
                    alimoney: '6-8万',
                    totoalMoney: '14-22万'
                }, {
                    name: '工科',
                    tuition: '8-14万',
                    alimoney: '6-8万',
                    totoalMoney: '14-22万'
                }, {
                    name: '文科',
                    tuition: '8-10万',
                    alimoney: '6-8万',
                    totoalMoney: '14-18万'
                }, {
                    name: '医学',
                    tuition: '10-20万',
                    alimoney: '6-8万',
                    totoalMoney: '16-28万'
                }, {
                    name: '艺术',
                    tuition: '10-15万',
                    alimoney: '6-8万',
                    totoalMoney: '16-23万'
                }, {
                    name: '法律',
                    tuition: '10-15万',
                    alimoney: '6-8万',
                    totoalMoney: '16-23万'
                }, {
                    name: '其他',
                    tuition: '1-8万',
                    alimoney: '6-8万',
                    totoalMoney: '7-16万'
                }]
            },
            

        ],
    },
    {
        id: 12,
        countries: '新加坡',
        education: [{
                type: 1,
                name: '小学',
                tuition: '7-9万',
                alimoney: '6-8万',
                totoalMoney: '14-20万'
            },
            {
                type: 1,
                name: '中学',
                tuition: '7-9万',
                alimoney: '6-8万',
                totoalMoney: '14-20万'
            },
            {
                type: 1,
                name: '本科',
                tuition: '7-12万',
                alimoney: '6-8万',
                totoalMoney: '15-26万'
            },
            {
                type: 1,
                name: '硕士',
                tuition: '15-18万',
                alimoney: '6-8万',
                totoalMoney: '8-12万'
            },
        ],
    },
    {
        id: 13,
        countries: '马来西亚',
        education: [
            {
                type: 1,
                name: '本科',
                tuition: '3-8万',
                alimoney: '2-3万',
                totoalMoney: '5-11万'
            },
            {
                type: 1,
                name: '硕士',
                tuition: '3-8万',
                alimoney: '2-3万',
                totoalMoney: '5-11万'
            },
        ],
    },
    {
        id: 14,
        countries: '日本',
        education: [
            {
                type: 1,
                name: '高中',
                tuition: '3-5万',
                alimoney: '7-8万',
                totoalMoney: '10-13万'
            },
            {
                type: 1,
                name: '硕士',
                tuition: '3.5-8万',
                alimoney: '7-8万',
                totoalMoney: '10.5-16'
            },
            {
                type: 1,
                name: '硕士',
                tuition: '3.5-8万',
                alimoney: '7-8万',
                totoalMoney: '10.5-16'
            },
        ],
    },
    {
        id: 15,
        countries: '韩国',
        education: [
            {
                type: 1,
                name: '高中',
                tuition: '2-6万',
                alimoney: '6-7万',
                totoalMoney: '8-13万'
            },
            {
                type: 1,
                name: '本科',
                tuition: '3-8万',
                alimoney: '6-7万',
                totoalMoney: '9-15万'
            },
            {
                type: 1,
                name: '硕士',
                tuition: '3-8万',
                alimoney: '6-7万',
                totoalMoney: '9-15万'
            },
        ],
    },
    {
        id: 16,
        countries: '香港',
        education: [
            {
                type: 1,
                name: '本科',
                tuition: '6-15万',
                alimoney: '8-10万',
                totoalMoney: '14-25万'
            },
            {
                type: 3,
                name: '硕士',
                professional: [{
                    name: '商科',
                    tuition: '20-25万',
                    alimoney: '8-10万',
                    totoalMoney: '28-35万'
                }, {
                    name: '理科',
                    tuition: '12-15万',
                    alimoney: '8-10万',
                    totoalMoney: '20-25万'
                }, {
                    name: '工科',
                    tuition: '12-15万',
                    alimoney: '8-10万',
                    totoalMoney: '20-25万'
                }, {
                    name: '文科',
                    tuition: '10-12万',
                    alimoney: '8-10万',
                    totoalMoney: '18-22万'
                }, {
                    name: '医学',
                    tuition: '10-15万',
                    alimoney: '8-10万',
                    totoalMoney: '18-25万'
                }, {
                    name: '法律',
                    tuition: '11-14万',
                    alimoney: '8-10万',
                    totoalMoney: '19-24万'
                }, {
                    name: '其他',
                    tuition: '12-15万',
                    alimoney: '8-10万',
                    totoalMoney: '20-25万'
                }]
            },
        ],
    },
    {
        id: 17,
        countries: '澳门',
        education: [
            {
                type: 1,
                name: '本科',
                tuition: '7-15万',
                alimoney: '3-5万',
                totoalMoney: '10-20万'
            },
            {
                type: 1,
                name: '硕士',
                tuition: '2-8万',
                alimoney: '3-5万',
                totoalMoney: '5-13万'
            },
        ],
    },
];