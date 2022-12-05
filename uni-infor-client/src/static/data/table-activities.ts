export const tableActivities = <any>[
    {
        id: 10000,
        poster: {
            name: "智能科技学院学术部",
            avatar: "https://tech.tfswufe.edu.cn/images/foot-li.png"
        },
        name: "第十届程序设计大赛",
        startDate: "2022-11-15",
        endDate: "2022-12-8",
        startTime: "00:00",
        place: "绵阳校区3407教室",
        manner: "线下、线上",
        endTime: "24:00",
        opposition: 0,
        approves: 1415,
        type: 0,
        predict: true,
        timenode: [
            {
                complete: 1, // true
                desc: "大赛启动仪式",
                date: "2022-11-18 18:48:26"
            },
            {
                complete: 1, // false
                desc: "大赛报名阶段和作品收集阶段",
                date: "2022-11-30 18:48:26"
            },
            {
                complete: 1, // false
                desc: "公布大赛决赛名单",
                date: "2022-12-4 18:48:26"
            },
            {
                complete: 0, // false
                desc: "大赛进行中",
                date: "2022-12-8 19:30:00"
            }
        ],
        modifyTimeNode: [
            {
                desc: "大赛推迟到11月30号",
                date: "2022-11-17 23:26:00"
            },
            {
                desc: "大赛作品表收集日期推迟到11月27日",
                date: "2022-11-17 23:26:00"
            }
        ],
        comments: [
            {
                user: {
                    username: "42020306 郑人滏",
                    avatar: "https://img2.baidu.com/it/u=1135552644,1778479494&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                },
                content: "请问软件方面提交作品文件需要包含哪些？",
                postDate: "2022-11-20 21:36",
                agree: 1,
                oppose: 0,
                comments: [
                    {
                        user: {
                            username: "42004341 王清雲",
                            avatar: "https://img2.baidu.com/it/u=1135552644,1778479494&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                        },
                        content: "工程项目（源代码）、PPT、文档说明这些",
                        sendTo: null,
                        postDate: "",
                        agree: 2,
                        oppose: 0
                    },
                    {
                        user: {
                            username: "42020307 汪梓浩",
                            avatar:
                                "https://img2.baidu.com/it/u=2269622343,3274358192&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1669309200&t=11d972a25b3ca146ce492c3a7e9c9cb3"
                        },
                        content: "文档说明可以是问题、部署等这些。。",
                        sendTo: "用户1",
                        postDate: "",
                        agree: 3,
                        oppose: 0
                    }
                ]
            },
            {
                user: {
                    username: "42020315 孙永坤",
                    avatar:
                        "https://img1.baidu.com/it/u=3042263128,2763345565&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1669309200&t=a6f2140f477c6c711aa54a9298793275"
                },
                content: "请问只是一个静态的App可以吗？时间还是不太够，只能做个静态的，但是动态数据也很简单。",
                postDate: "2022-11-23 14:33:13",
                agree: 59,
                oppose: 0,
                comments: [
                    {
                        user: {
                            username: "42004341 王清雲",
                            avatar: "https://img1.baidu.com/it/u=1895587885,3688202843&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                        },
                        content: "我觉得主要是把想表达的想法和功能呈现出来就应该可以吧？",
                        sendTo: null,
                        postDate: "2022-11-23 15:33:13",
                        agree: 2,
                        oppose: 0
                    },
                    {
                        user: {
                            username: "42020307 汪梓浩",
                            avatar: "https://img1.baidu.com/it/u=3647793059,2345323890&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                        },
                        content:
                            "同意，毕竟 UI 才是来得最直接的，直接演示功能和我们要做的是什么就行。数据库这些只是时间问题，很好搭建的。",
                        sendTo: "用户11",
                        postDate: "2022-11-23 18:33:13",
                        agree: 3,
                        oppose: 0
                    }
                ]
            },
            {
                user: {
                    username: "42020307 汪梓浩",
                    avatar:
                        "https://img2.baidu.com/it/u=2269622343,3274358192&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1669309200&t=11d972a25b3ca146ce492c3a7e9c9cb3"
                },
                content: "这个比赛都有些啥奖励啊？素拓和二课加多少啊，我这学期还差呢。",
                postDate: "2022-11-20 10:32:00",
                agree: 2,
                oppose: 0
            },
            {
                user: {
                    username: "42004341 王清雲",
                    avatar: "https://img2.baidu.com/it/u=3509195037,2235023412&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                },
                content: "好耶！比赛开始了，到我大显身手的时候了，吼吼吼！",
                postDate: "",
                agree: 10,
                oppose: 0,
                comments: [
                    {
                        user: {
                            username: "40202033 小王",
                            avatar:
                                "https://img1.baidu.com/it/u=3042263128,2763345565&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1669309200&t=a6f2140f477c6c711aa54a9298793275"
                        },
                        content: "大佬，抱个大腿？",
                        sendTo: null,
                        postDate: "2022-11-19 13:43:11",
                        agree: 4,
                        oppose: 0
                    },
                    {
                        user: {
                            username: "4202044 小李",
                            avatar: "https://img2.baidu.com/it/u=1135552644,1778479494&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                        },
                        content: "你还差队友吗？你要参加哪个方向的啊？",
                        sendTo: "用户2",
                        postDate: "2022-11-19 14:33:11",
                        agree: 5,
                        oppose: 0
                    },
                    {
                        user: {
                            username: "4202055 小红",
                            avatar:
                                "https://img2.baidu.com/it/u=2269622343,3274358192&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1669309200&t=11d972a25b3ca146ce492c3a7e9c9cb3"
                        },
                        content: "我这里缺一个，你来吗？做移动应用开发。",
                        sendTo: "用户1",
                        postDate: "2022-11-19 16:13:11",
                        agree: 3,
                        oppose: 0
                    }
                ]
            }
        ],
        issues: [
            {
                name: "关于软件方面开发的问题",
                intro: "作品提交需要PPT、文档、项目源代码。文档包括：部署文档、问题解决文档等",
                current: -1,
                disabled: false
            },
            {
                name: "关于素拓和二课的问题",
                intro: "素拓和二课只有参赛者才有哦！！！",
                current: -1,
                disabled: false
            },
            {
                name: "关于开发语言的选择",
                intro: "不局限于 VB、C/C++、C#、Java、Python。开发工具不做限制。",
                current: -1,
                disabled: false
            }
        ],
        content:
            "此次程序设计大赛旨在进一步加强学校教学质量工程建设，提高学生们的创造力以及运用计算机技术开发程序的综合能力，培养学生们的创新思维与合作精神，激发广大学生的学习热情。此次程序设计大赛旨在进一步加强学校教学质量工程建设，提高学生们的创造力以及运用计算机技术开发程序的综合能力，培养学生们的创新思维与合作精神，激发广大学生的学习热情。此次程序设计大赛旨在进一步加强学校教学质量工程建设，提高学生们的创造力以及运用计算机技术开发程序的综合能力，培养学生们的创新思维与合作精神，激发广大学生的学习热情。此次程序设计大赛旨在进一步加强学校教学质量工程建设，提高学生们的创造力以及运用计算机技术开发程序的综合能力，培养学生们的创新思维与合作精神，激发广大学生的学习热情。",
        brief:
            "此次程序设计大赛旨在进一步加强学校教学质量工程建设，提高学生们的创造力以及运用计算机技术开发程序的综合能力，培养学生们的创新思维与合作精神，激发广大学生的学习热情。"
    },
    {
        id: 10001,
        poster: {
            name: "Oracle 俱乐部",
            avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.php.cn%2Fupload%2Farticle%2F000%2F000%2F004%2F1e0584250f8189dc313e12c2cccd5dff.png&refer=http%3A%2F%2Fimg.php.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672809070&t=97f31aec4d29fde942e886cbe5a0dc84"
        },
        name: "第十三届企业信息化成果展示大赛",
        place: "绵阳校区3407教室",
        manner: "线下",
        startDate: "2022-11-10",
        endDate: "2022-12-1",
        startTime: "00:00",
        endTime: "24:00",
        opposition: 1,
        approves: 333,
        predict: false,
        type: 2,
        timenode: [
            {
                complete: 1, // false
                desc: "大赛启动仪式",
                date: "2022-11-18 18:48:26"
            },
            {
                complete: 0, // false
                desc: "大赛报名阶段和作品收集阶段",
                date: "2022-11-24 18:48:26"
            }
        ],
        modifyTimeNode: [
            {
                desc: "修改大赛报名阶段日期",
                date: "2022-11-15 18:48:26"
            },
            {
                desc: "大赛报名阶段和作品收集变更同一天",
                date: "2022-11-20 18:48:26"
            }
        ],
        comments: [
            {
                user: {
                    username: "用户1",
                    avatar: ""
                },
                content: "1111111111111111111111",
                postDate: "",
                agree: 1,
                oppose: 0,
                comments: [
                    {
                        user: {
                            username: "用户1",
                            avatar: ""
                        },
                        content: "1111111111111111111111",
                        sendTo: null,
                        postDate: "",
                        agree: 2,
                        oppose: 0
                    },
                    {
                        user: {
                            username: "用户3",
                            avatar: ""
                        },
                        content: "1111111111111111111111",
                        sendTo: "用户1",
                        postDate: "",
                        agree: 3,
                        oppose: 0
                    }
                ]
            },
            {
                user: {
                    username: "用户2",
                    avatar: ""
                },
                content: "2222222222222222222222",
                postDate: "",
                agree: 1,
                oppose: 0
            },
            {
                user: {
                    username: "用户3",
                    avatar: ""
                },
                content: "3333333333333333",
                postDate: "",
                agree: 33,
                oppose: 0
            },
            {
                user: {
                    username: "用户4",
                    avatar: ""
                },
                content: "44444444444444444",
                postDate: "",
                agree: 10,
                oppose: 0,
                comments: [
                    {
                        user: {
                            username: "用户2",
                            avatar: ""
                        },
                        content: "1111111111111111111111",
                        sendTo: null,
                        postDate: "",
                        agree: 4,
                        oppose: 0
                    },
                    {
                        user: {
                            username: "用户1",
                            avatar: ""
                        },
                        content: "1111111111111111111111",
                        sendTo: "用户2",
                        postDate: "",
                        agree: 5,
                        oppose: 0
                    },
                    {
                        user: {
                            username: "用户3",
                            avatar: ""
                        },
                        content: "1111111111111111111111",
                        sendTo: "用户1",
                        postDate: "",
                        agree: 3,
                        oppose: 0
                    }
                ]
            }
        ],
        content:
            "此次程序设计大赛旨在进一步加强学校教学质量工程建设，提高学生们的创造力以及运用计算机技术开发程序的综合能力，培养学生们的创新思维与合作精神，激发广大学生的学习热情。此次程序设计大赛旨在进一步加强学校教学质量工程建设，提高学生们的创造力以及运用计算机技术开发程序的综合能力，培养学生们的创新思维与合作精神，激发广大学生的学习热情。此次程序设计大赛旨在进一步加强学校教学质量工程建设，提高学生们的创造力以及运用计算机技术开发程序的综合能力，培养学生们的创新思维与合作精神，激发广大学生的学习热情。此次程序设计大赛旨在进一步加强学校教学质量工程建设，提高学生们的创造力以及运用计算机技术开发程序的综合能力，培养学生们的创新思维与合作精神，激发广大学生的学习热情。",

        brief:
            "当今时代发展的大方向是趋于信息化时代。与此同时，信息化的理念也在各行各业的企业管理过程中占据着重要地位。现由西南财经大学天府学院智能科技学院主办，西南财经大学天府学院甲骨文俱乐部承办的企业信息化成果展示大赛即将在我院拉开帷幕。"
    },
    {
        id: 10002,
        poster: {
            name: "智能科技学院勤工俭学",
            avatar: "https://tech.tfswufe.edu.cn/images/foot-li.png"
        },
        place: "绵阳校区3407教室",
        manner: "线下",
        startDate: "2022-11-18",
        endDate: "2022-11-27",
        startTime: "00:00",
        endTime: "24:00",
        opposition: 1,
        approves: 333,
        type: 2,
        comments: [
            {
                user: {
                    username: "用户1",
                    avatar: ""
                },
                content: "1111111111111111111111",
                postDate: "",
                agree: 1,
                oppose: 0,
                comments: [
                    {
                        user: {
                            username: "用户1",
                            avatar: ""
                        },
                        content: "1111111111111111111111",
                        sendTo: null,
                        postDate: "",
                        agree: 2,
                        oppose: 0
                    },
                    {
                        user: {
                            username: "用户3",
                            avatar: ""
                        },
                        content: "1111111111111111111111",
                        sendTo: "用户1",
                        postDate: "",
                        agree: 3,
                        oppose: 0
                    }
                ]
            },
            {
                user: {
                    username: "用户2",
                    avatar: ""
                },
                content: "2222222222222222222222",
                postDate: "",
                agree: 1,
                oppose: 0
            },
            {
                user: {
                    username: "用户3",
                    avatar: ""
                },
                content: "3333333333333333",
                postDate: "",
                agree: 33,
                oppose: 0
            },
            {
                user: {
                    username: "用户4",
                    avatar: ""
                },
                content: "44444444444444444",
                postDate: "",
                agree: 10,
                oppose: 0,
                comments: [
                    {
                        user: {
                            username: "用户2",
                            avatar: ""
                        },
                        content: "1111111111111111111111",
                        sendTo: null,
                        postDate: "",
                        agree: 4,
                        oppose: 0
                    },
                    {
                        user: {
                            username: "用户1",
                            avatar: ""
                        },
                        content: "1111111111111111111111",
                        sendTo: "用户2",
                        postDate: "",
                        agree: 5,
                        oppose: 0
                    },
                    {
                        user: {
                            username: "用户3",
                            avatar: ""
                        },
                        content: "1111111111111111111111",
                        sendTo: "用户1",
                        postDate: "",
                        agree: 3,
                        oppose: 0
                    }
                ]
            }
        ],
        timenode: [
            {
                complete: 1, // true
                desc: "大赛启动仪式",
                date: "2022-11-18 18:48:26"
            },
            {
                complete: 1, // true
                desc: "大赛报名阶段",
                date: "2022-11-24 18:48:26"
            },
            {
                complete: 0, // false
                desc: "作品收集阶段",
                date: ""
            }
        ],
        predict: false,
        name: `“智芯”电子焊接大赛`,
        content:
            "此次程序设计大赛旨在进一步加强学校教学质量工程建设，提高学生们的创造力以及运用计算机技术开发程序的综合能力，培养学生们的创新思维与合作精神，激发广大学生的学习热情。此次程序设计大赛旨在进一步加强学校教学质量工程建设，提高学生们的创造力以及运用计算机技术开发程序的综合能力，培养学生们的创新思维与合作精神，激发广大学生的学习热情。此次程序设计大赛旨在进一步加强学校教学质量工程建设，提高学生们的创造力以及运用计算机技术开发程序的综合能力，培养学生们的创新思维与合作精神，激发广大学生的学习热情。此次程序设计大赛旨在进一步加强学校教学质量工程建设，提高学生们的创造力以及运用计算机技术开发程序的综合能力，培养学生们的创新思维与合作精神，激发广大学生的学习热情。",
        brief:
            "踏入校园，恰逢天府20载！走进天府，迎接校园生日。在我校20周年到来之际，为全面提高大学生的综合素质，加强师生之间的交流，丰富大学校园的文化生活，引领校园文化的主流，促进同学们的学习、交流并激发他们学习的兴趣，同时也为了凸显本学院的特色，增强同学们对焊接相关技术领域的学习，提高专业技能。因此，在校庆到来之际特举办“智芯”电子焊接大赛体现智科学子的风采。"
    }
];
